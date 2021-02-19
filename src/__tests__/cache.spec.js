/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { describe, expect, it } = require('@jest/globals')

const sinon = require('sinon')
const { Cache, defaultCacheTtl } = require('../cache')
const { _ttlField } = require('../dynamo')

const { stub } = sinon

const createMetrics = () => ({ cacheHit: stub(), cacheMiss: stub() })
const testClient = () => ({
  getTableName: () => 'test-table',
  [_ttlField]: 'ttl',
})

describe('Cache', () => {
  it('get should call dynamo first', async () => {
    let dynamo = testClient()
    dynamo.get = stub().resolves({ Item: { data: 1, ttl: Date.now() + 1000 } })
    let cacheFn = stub().resolves()
    let cache = new Cache({ dynamo, metrics: createMetrics() })
    let result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(0)
  })

  it('get should call source if dynamo returns empty', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    let result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set data on dynamo after caching', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    let result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0).args[0].Item.data).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set ttl on dynamo after caching', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    let result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0).args[0].Item.ttl).toBeTruthy()
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set to default ttl if none is given', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn)
    expect(
      dynamo.put.getCall(0).args[0].Item.ttl > (defaultCacheTtl + Date.now() - 2000) / 1000
    ).toBeTruthy()
  })

  it('get should set ttl if given', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { ttl: Date.now() + 100 })
    expect(dynamo.put.getCall(0).args[0].Item.ttl > (Date.now() - 2000) / 1000).toBeTruthy()
  })

  it('get should set ttl if given clearAfter', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { clearAfter: 100 })
    expect(dynamo.put.getCall(0).args[0].Item.ttl > (Date.now() - 2000) / 1000).toBeTruthy()
  })

  it('get should not set ttl if permanent', async () => {
    let dynamo = testClient()
    dynamo.get = stub().rejects(new Error('resource not found'))
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { permanent: true })
    expect(dynamo.put.getCall(0).args[0].Item.ttl).toBe(undefined)
  })

  it('get should re-use when staleAfter is not met', async () => {
    let dynamo = testClient()
    dynamo.get = stub().resolves({
      Item: { data: 1, ttl: Date.now() + 1000, createdOn: Date.now() - 100 },
    })
    let cacheFn = stub().resolves()
    let cache = new Cache({ dynamo, metrics: createMetrics() })
    let result = await cache.get('test', cacheFn, { staleAfter: 500 })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(0)
  })

  it('get should call source if staleAfter is met', async () => {
    let dynamo = testClient()
    dynamo.get = stub().resolves({
      Item: { data: 1, ttl: Date.now() + 1000, createdOn: Date.now() - 1000 },
    })
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().resolves(1)
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    let result = await cache.get('test', cacheFn, { staleAfter: 500 })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should return stale if source throws and allowStale is true', async () => {
    let dynamo = testClient()
    dynamo.get = stub().resolves({
      Item: { data: 1, createdOn: Date.now() - 1000 },
    })
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().rejects(new Error('fail'))
    let cache = new Cache({
      dynamo,
      logger: { error: stub() },
      metrics: createMetrics(),
    })
    let result = await cache.get('test', cacheFn, { staleAfter: 500, allowStale: true })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should throw if source throws and allowStale is false', async () => {
    let dynamo = testClient()
    dynamo.get = stub().resolves({
      Item: { data: 1, createdOn: Date.now() - 1000 },
    })
    dynamo.put = stub().resolves(1)
    let cacheFn = stub().rejects(new Error('fail'))
    let cache = new Cache({
      dynamo,
      logger: { error: stub() },
      metrics: createMetrics(),
    })
    try {
      await cache.get('test', cacheFn, { staleAfter: 500, allowStale: false })
      throw new Error('should have thrown')
    } catch (e) {
      expect(e.message).toBe('fail')
      expect(dynamo.get.callCount).toBe(1)
      expect(cacheFn.callCount).toBe(1)
    }
  })

  it('set should set data on dynamo', async () => {
    let dynamo = testClient()
    dynamo.put = stub().resolves(1)
    let cache = new Cache({ dynamo, metrics: createMetrics() })
    let result = await cache.set('test', 1)
    expect(result).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0).args[0].Item.data).toBe(1)
  })

  it('clear should clear cache', async () => {
    let dynamo = testClient()
    dynamo.delete = stub().resolves()
    let cache = new Cache({
      dynamo,
      metrics: createMetrics(),
    })
    await cache.clear('test')
    expect(dynamo.delete.callCount).toBe(1)
  })
})
