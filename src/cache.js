'use strict'

const loggerWrapper = require('./loggerWrapper')

const {
  asKey,
  clientSymbols: { _ttlField },
} = require('./dynamo')

const defaultCacheTtl = 300000
const delimiter = ':'
const CACHE_TYPE = '_CACHE-KEY_'
const asDynamoKey = (key) => [CACHE_TYPE, key].join(delimiter)

const _dynamo = Symbol('_dynamo')
const _logger = Symbol('_logger')
const _metrics = Symbol('_metrics')

class Cache {
  constructor({ dynamo, logger, metrics }) {
    this[_logger] = loggerWrapper(logger)
    this[_dynamo] = dynamo
    this[_metrics] = metricsWrapper(metrics, this[_logger])
  }

  asKey(id) {
    return asKey(this[_dynamo], asDynamoKey(id))
  }

  /**
   * Get a value from the cache, or get it from the cacheMissFn and store it in the cache if
   * It is missing or expired
   * @param {*} key
   * @param {*} cacheMissFn
   * @param {Object} options
   * @param {number} options.ttl the datetime value that the object should expire at (e.g. `Date.now() + 1000` = 1 second in the future)
   * @param {number} options.clearAfter will be used to set the ttl with `Date.now() + clearAfter`, useful in setting a static options obejct. Mutually exclusive with `options.ttl`
   * @param {number} options.staleAfter number of milliseconds after which the item is "stale" and will be refresh with the `cacheMissFn`
   * @param {boolean} options.allowStale if the `cacheMissFn` throws and `allowStale` is truthy then the stale item will be returned
   * @return {*}
   * @memberof Cache
   */
  async get(key, cacheMissFn, options = {}) {
    validateOptions(options)
    const ttlField = this[_dynamo][_ttlField]
    let cacheResult = await this[_dynamo]
      .get({
        TableName: this[_dynamo].getTableName(),
        Key: this.asKey(key),
      })
      .then((r) => r.Item)
      .catch((e) => {
        // This is a cache check, missing is normal
        if (!/resource not found/i.test(e.toString())) {
          throw e
        }
      })

    const isItemExpired = isExpired(cacheResult || {}, options, ttlField)
    if (cacheResult && !isItemExpired) {
      this[_metrics].cacheHit(key)
      return cacheResult.data
    }
    this[_metrics].cacheMiss(key, { isItemExpired })
    let fnResult
    try {
      fnResult = await cacheMissFn()
    } catch (e) {
      this[_logger].error('error getting cache fn', e.message, e.stack)
      if (options.allowStale) return cacheResult.data
      throw e
    }
    await this.set(key, fnResult, options)
    return fnResult
  }

  /**
   * Set a value in the cache
   * @param {*} key
   * @param {*} value
   * @return {*}
   * @memberof Cache
   */
  async set(key, value, options = {}) {
    const ttlField = this[_dynamo][_ttlField]
    return this[_dynamo].put({
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
  }

  /**
   * Remove a value from the cache
   * @param {*} key
   * @return {Promise<void>}
   * @memberof Cache
   */
  async clear(key) {
    await this[_dynamo].delete({
      TableName: this[_dynamo].getTableName(),
      Key: this.asKey(key),
    })
  }

  /**
   * This takes an array of object with an ID and CacheOptions
   * It will return the first object from the cache whose ID matches one in the array
   * Or it will call the cacheMissFn and write the result to every ID in the array
   * @param {*} keys will prioritize the first key that matches in the array
   * @param {*} cacheMissFn
   * @returns
   * @memberof Cache
   */
  async batchGet(keys, cacheMissFn) {
    const ttlField = this[_dynamo][_ttlField]
    const cacheKeys = keys.map((key) => ({ id: asDynamoKey(key.id) }))
    this[_logger].debug('batchGet - checking cache')

    // Create the params for dynamo batchGet
    let RequestItems = { [this[_dynamo].getTableName()]: { Keys: cacheKeys } }
    let cacheResult = await this[_dynamo]
      .batchGet({ RequestItems })
      .then((r) => r.Responses[this[_dynamo].getTableName()] || [])
      .catch((e) => {
        // This is a cache check, missing is normal
        if (!/resource not found/i.test(e.toString())) {
          throw e
        }
        return []
      })
    cacheResult = cacheResult.filter((key) => !isExpired(key))
    if (cacheResult.length) {
      const matcher = (dbKey) => keys.findIndex((k) => dbKey.id === asDynamoKey(k))
      cacheResult.sort((a, b) => matcher(a) - matcher(b))
      return cacheResult[0].data
    }
    this[_logger].debug('batchGet - cache miss')
    let fnResult = await cacheMissFn()
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

module.exports = {
  Cache,
  defaultCacheTtl,
}

function isExpired(item, options = {}, ttlField) {
  // Dynamo stores ttl in seconds
  // Its possible for items not to have a ttl from options.permanent
  // If no ttl then expiration false
  let isTtlExpired = item[ttlField] && item[ttlField] * 1000 < Date.now()
  let isStale = options.staleAfter && Date.now() - item.createdOn > options.staleAfter
  return isTtlExpired || isStale
}

function getTtl(options) {
  if (options.permanent) return undefined
  let ttl
  if (options.ttl) ttl = options.ttl
  else if (options.clearAfter) ttl = Date.now() + options.clearAfter
  else ttl = Date.now() + defaultCacheTtl
  // Dynamo needs ttl in seconds
  return Math.floor(ttl / 1000)
}

function metricsWrapper(metrics, logger) {
  return (
    metrics || {
      cacheHit: (key) => logger.debug(`cache hit: ${key}`),
      cacheMiss: (key) => logger.debug(`cache miss: ${key}`),
    }
  )
}

function validateOptions(options) {
  if (!options) return
  if (options.ttl && options.clearAfter)
    throw new Error('cache options "ttl" and "clearAfter" are mutually exclusive')
}
