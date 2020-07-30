'use strict'

const test = require('ava')
const sinon = require('sinon')
const { stub } = sinon
const { Cache, defaultCacheTtl } = require('../src/cache')
const { _ttlField } = require('../src/dynamo')

const createMetrics = () => ({ cacheHit: stub(), cacheMiss: stub() })
const testClient = () => ({
  getTableName: () => 'test-table',
  [_ttlField]: 'ttl',
})

test('cache.get should call dynamo first', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().resolves({ Item: { data: 1, ttl: Date.now() + 1000 } })
  let cacheFn = stub().resolves()
  let cache = new Cache({ dynamo, metrics: createMetrics() })
  let result = await cache.get('test', cacheFn)
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(cacheFn.callCount, 0, 'did not call source')
})

test('cache.get should call source if dynamo returns empty', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  let result = await cache.get('test', cacheFn)
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(cacheFn.callCount, 1, 'called source')
})

test('cache.get should set data on dynamo after caching', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  let result = await cache.get('test', cacheFn)
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(dynamo.put.callCount, 1, 'called dynamo put')
  t.is(dynamo.put.getCall(0).args[0].Item.data, 1, 'set data')
  t.is(cacheFn.callCount, 1, 'called source')
})

test('cache.get should set ttl on dynamo after caching', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  let result = await cache.get('test', cacheFn)
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(dynamo.put.callCount, 1, 'called dynamo put')
  t.truthy(dynamo.put.getCall(0).args[0].Item.ttl, 'set ttl')
  t.is(cacheFn.callCount, 1, 'called source')
})

test('cache.get should set to default ttl if none is given', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  await cache.get('test', cacheFn)
  t.truthy(
    dynamo.put.getCall(0).args[0].Item.ttl > (defaultCacheTtl + Date.now() - 2000) / 1000,
    'set ttl'
  )
})

test('cache.get should set ttl if given', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  await cache.get('test', cacheFn, { ttl: Date.now() + 100 })
  t.truthy(dynamo.put.getCall(0).args[0].Item.ttl > (Date.now() - 2000) / 1000, 'set ttl')
})

test('cache.get should not set ttl if permanent', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().rejects(new Error('resource not found'))
  dynamo.put = stub().resolves(1)
  let cacheFn = stub().resolves(1)
  let cache = new Cache({
    dynamo,
    metrics: createMetrics(),
  })
  await cache.get('test', cacheFn, { permanent: true })
  t.is(dynamo.put.getCall(0).args[0].Item.ttl, undefined, 'no ttl')
})

test('cache.get should re-use when staleAfter is not met', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub().resolves({
    Item: { data: 1, ttl: Date.now() + 1000, createdOn: Date.now() - 100 },
  })
  let cacheFn = stub().resolves()
  let cache = new Cache({ dynamo, metrics: createMetrics() })
  let result = await cache.get('test', cacheFn, { staleAfter: 500 })
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(cacheFn.callCount, 0, 'did not call source')
})

test('cache.get should call source if staleAfter is met', async (t) => {
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
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(cacheFn.callCount, 1, 'called source')
})

test('cache.get should return stale if source throws and allowStale is true', async (t) => {
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
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.get.callCount, 1, 'called dynamo')
  t.is(cacheFn.callCount, 1, 'called source')
})

test('cache.get should throw if source throws and allowStale is false', async (t) => {
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
    t.fail('should have thrown')
  } catch (e) {
    t.is(e.message, 'fail', 'threw cache error')
    t.is(dynamo.get.callCount, 1, 'called dynamo')
    t.is(cacheFn.callCount, 1, 'called source')
  }
})

test('cache.set should set data on dynamo', async (t) => {
  let dynamo = testClient()
  dynamo.put = stub().resolves(1)
  let cache = new Cache({ dynamo, metrics: createMetrics() })
  let result = await cache.set('test', 1)
  t.is(result, 1, 'returned cache result')
  t.is(dynamo.put.callCount, 1, 'called dynamo put')
  t.is(dynamo.put.getCall(0).args[0].Item.data, 1, 'set data')
})
