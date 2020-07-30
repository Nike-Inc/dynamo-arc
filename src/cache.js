'use strict'

const loggerWrapper = require('@nike/logger-wrapper')

const { asKey, _ttlField } = require('./dynamo')

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

  async get(key, cacheMissFn, options = {}) {
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
   *
   *
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
