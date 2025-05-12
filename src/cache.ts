import { Logger, wrapper } from './logger'
import { asKey, _logger, _dynamo, TableKey, DbItem } from './store'
import { _ttlField, _idField, ArcDynamoClient } from './dynamo'

export const defaultCacheTtl = 300000
const delimiter = ':'
const CACHE_TYPE = '_CACHE-KEY_'

const asDynamoKey = (key: string) => [CACHE_TYPE, key].join(delimiter)

export interface CacheMetrics {
  cacheHit: (key: string) => void
  cacheMiss: (key: string, data: { isItemExpired: boolean }) => void
}

export interface CacheConfig {
  dynamo: ArcDynamoClient
  logger?: unknown
  metrics?: CacheMetrics
}

export interface CacheOptions {
  /** the datetime value that the object should expire at (e.g. `Date.now() + 1000` = 1 second in the future) */
  ttl?: number
  /**  will be used to set the ttl with `Date.now() + clearAfter`, useful in setting a static options object. Mutually exclusive with `ttl` */
  clearAfter?: number
  /** number of milliseconds after which the item is "stale" and will be refresh with the `cacheMissFn` */
  staleAfter?: number
  /** if the `cacheMissFn` throws and `allowStale` is truthy then the stale item will be returned */
  allowStale?: boolean
  /** if truthy cached items will never expire */
  permanent?: boolean
}

export interface BatchGetKeys extends CacheOptions {
  id: string
}

export class Cache {
  public [_dynamo]: ArcDynamoClient
  public [_logger]: Logger
  private metrics: CacheMetrics

  constructor({ dynamo, logger, metrics }: CacheConfig) {
    this[_dynamo] = dynamo
    this[_logger] = wrapper(logger)
    this.metrics = metricsWrapper(metrics, this[_logger])
  }

  asKey(id: string): TableKey {
    return asKey(this[_dynamo], asDynamoKey(id))
  }

  /**
   * Get a value from the cache, or get it from the cacheMissFn and store it in the cache if it is missing or expired
   */
  async get<T>(key: string, cacheMissFn: () => Promise<T>, options: CacheOptions = {}): Promise<T> {
    validateOptions(options)
    const ttlField = this[_dynamo][_ttlField] as string
    const cacheResult = await this[_dynamo]
      .get({
        TableName: this[_dynamo].getTableName(),
        Key: this.asKey(key),
      })
      .then((r) => r.Item as DbItem<T>)
      .catch((e) => {
        // This is a cache check, missing is normal
        if (!/resource not found/i.test(e.toString())) {
          throw e
        }
        return null
      })

    const isItemExpired = isExpired<T>(cacheResult || {}, options, ttlField)
    if (cacheResult && !isItemExpired) {
      this.metrics.cacheHit(key)
      return cacheResult.data as T
    }
    this.metrics.cacheMiss(key, { isItemExpired })
    let fnResult
    try {
      fnResult = await cacheMissFn()
    } catch (e) {
      this[_logger].error('error getting cache fn', (e as Error)?.message, (e as Error)?.stack)
      if (options.allowStale && cacheResult) return cacheResult.data as T
      throw e
    }
    await this.set(key, fnResult, options)
    return fnResult
  }

  /** Set a value in the cache */
  async set<T>(key: string, value: T, options: CacheOptions = {}): Promise<T> {
    const ttlField = this[_dynamo][_ttlField] as string
    await this[_dynamo].put({
      TableName: this[_dynamo].getTableName(),
      Item: {
        ...this.asKey(key),
        type: CACHE_TYPE,
        data: value,
        // Milliseconds
        createdOn: Date.now(),
        // Seconds (Dynamo requires seconds)
        [ttlField]: getTtl(options),
      },
    })
    return value
  }

  /** Remove a value from the cache */
  async clear(key: string): Promise<void> {
    await this[_dynamo].delete({
      TableName: this[_dynamo].getTableName(),
      Key: this.asKey(key),
    })
  }

  /**
   * This takes an array of objects with an ID and CacheOptions
   * It will return the first object from the cache whose ID matches one in the array
   * Or it will call the cacheMissFn and write the result to every ID in the array
   */
  async batchGet<T>(
    /** will prioritize the first key.id that matches in the array */
    keys: BatchGetKeys[],
    cacheMissFn: () => Promise<T>,
  ): Promise<T> {
    const idField = this[_dynamo][_idField]
    const ttlField = this[_dynamo][_ttlField] as string
    const cacheKeys = keys.map((key) => asKey(this[_dynamo], asDynamoKey(key.id)))
    this[_logger].debug('batchGet - checking cache')

    // Create the params for dynamo batchGet
    const RequestItems = {
      [this[_dynamo].getTableName()]: { Keys: cacheKeys },
    }
    const cacheResult = await this[_dynamo]
      .batchGet({ RequestItems })
      .then((r) => r.Responses?.[this[_dynamo].getTableName()] || [])
      .catch((e) => {
        // This is a cache check, missing is normal
        if (!/resource not found/i.test(e.toString())) {
          throw e
        }
        return []
      })
    if (cacheResult.length) {
      const matcher = (dbKey: TableKey) =>
        keys.findIndex((k) => dbKey[idField] === asKey(this[_dynamo], asDynamoKey(k.id))[idField])
      cacheResult
        // remove expired, using options from original keys input
        .filter((r) => !isExpired(r, keys[matcher(r)], ttlField))
        // sort by original id index
        .sort((a, b) => matcher(a) - matcher(b))
      return cacheResult[0].data
    }
    this[_logger].debug('batchGet - cache miss')
    const fnResult = await cacheMissFn()
    await this[_dynamo].batchWrite({
      RequestItems: {
        [this[_dynamo].getTableName()]: keys.map((key) => {
          return {
            PutRequest: {
              Item: {
                ...this.asKey(key.id),
                type: CACHE_TYPE,
                data: fnResult,
                [ttlField]: getTtl(key),
              },
            },
          }
        }),
      },
    })
    return fnResult
  }
}

function isExpired<T>(item: DbItem<T>, options: CacheOptions = {}, ttlField: string): boolean {
  // Dynamo stores ttl in seconds
  // Its possible for items not to have a ttl from options.permanent
  // If no ttl then expiration false
  const isTtlExpired = item[ttlField] ? (item[ttlField] as number) * 1000 < Date.now() : false
  const isStale =
    (options.staleAfter && Date.now() - (item.createdOn as number) > options.staleAfter) || false
  return isTtlExpired || isStale
}

function getTtl(options: CacheOptions) {
  if (options.permanent) return undefined
  let ttl
  if (options.ttl) ttl = options.ttl
  else if (options.clearAfter) ttl = Date.now() + options.clearAfter
  else ttl = Date.now() + defaultCacheTtl
  // Dynamo needs ttl in seconds
  return Math.floor(ttl / 1000)
}

function metricsWrapper(metrics: CacheMetrics | undefined, logger: Logger): CacheMetrics {
  return (
    metrics || {
      cacheHit: (key) => logger.debug(`cache hit: ${key}`),
      cacheMiss: (key) => logger.debug(`cache miss: ${key}`),
    }
  )
}

function validateOptions(options: CacheOptions) {
  if (!options) return
  if (options.ttl && options.clearAfter)
    throw new Error('cache options "ttl" and "clearAfter" are mutually exclusive')
}
