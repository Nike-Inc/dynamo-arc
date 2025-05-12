/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'
import { describe, it, expect } from '@jest/globals'
import { stub, SinonStubbedInstance } from 'sinon'

import { Cache, defaultCacheTtl } from '../cache'
import { _ttlField, ArcDynamoClient } from '../dynamo'

const createMetrics = () => ({ cacheHit: stub(), cacheMiss: stub() })
const testClient = () =>
  ({
    getTableName: () => 'test-table',
    [_ttlField]: 'ttl',
    get: stub(),
    put: stub(),
    delete: stub(),
  } as SinonStubbedInstance<ArcDynamoClient>)

describe('Cache', () => {
  it('get should call dynamo first', async () => {
    const dynamo = testClient()
    dynamo.get.resolves({ Item: { data: 1, ttl: Date.now() + 1000 } })
    const cacheFn = stub().resolves()
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(0)
  })

  it('get should call source if dynamo returns empty', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set data on dynamo after caching', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.data).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set ttl on dynamo after caching', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn)
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.ttl).toBeTruthy()
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should set to default ttl if none is given', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn)
    expect(
      dynamo.put.getCall(0)?.args?.[0].Item?.ttl > (defaultCacheTtl + Date.now() - 2000) / 1000
    ).toBeTruthy()
  })

  it('get should set ttl if given', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { ttl: Date.now() + 100 })
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.ttl > (Date.now() - 2000) / 1000).toBeTruthy()
  })

  it('get should set ttl if given clearAfter', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { clearAfter: 100 })
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.ttl > (Date.now() - 2000) / 1000).toBeTruthy()
  })

  it('get should not set ttl if permanent', async () => {
    const dynamo = testClient()
    dynamo.get.rejects(new Error('resource not found'))
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    await cache.get('test', cacheFn, { permanent: true })
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.ttl).toBe(undefined)
  })

  it('get should re-use when staleAfter is not met', async () => {
    const dynamo = testClient()
    dynamo.get.resolves({
      Item: { data: 1, ttl: Date.now() + 1000, createdOn: Date.now() - 100 },
    })
    const cacheFn = stub().resolves()
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn, { staleAfter: 500 })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(0)
  })

  it('get should call source if staleAfter is met', async () => {
    const dynamo = testClient()
    dynamo.get.resolves({
      Item: { data: 1, ttl: Date.now() + 1000, createdOn: Date.now() - 1000 },
    })
    dynamo.put.resolves(1)
    const cacheFn = stub().resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn, { staleAfter: 500 })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should return stale if source throws and allowStale is true', async () => {
    const dynamo = testClient()
    dynamo.get.resolves({
      Item: { data: 1, createdOn: Date.now() - 1000 },
    })
    dynamo.put.resolves(1)
    const cacheFn = stub().rejects(new Error('fail'))
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      logger: { error: stub() },
      metrics: createMetrics(),
    })
    const result = await cache.get('test', cacheFn, { staleAfter: 500, allowStale: true })
    expect(result).toBe(1)
    expect(dynamo.get.callCount).toBe(1)
    expect(cacheFn.callCount).toBe(1)
  })

  it('get should throw if source throws and allowStale is false', async () => {
    const dynamo = testClient()
    dynamo.get.resolves({
      Item: { data: 1, createdOn: Date.now() - 1000 },
    })
    dynamo.put.resolves(1)
    const cacheFn = stub().rejects(new Error('fail'))
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      logger: { error: stub() },
      metrics: createMetrics(),
    })
    try {
      await cache.get('test', cacheFn, { staleAfter: 500, allowStale: false })
      throw new Error('should have thrown')
    } catch (e) {
      expect((e as Error)?.message as string).toBe('fail')
      expect(dynamo.get.callCount).toBe(1)
      expect(cacheFn.callCount).toBe(1)
    }
  })

  it('set should set data on dynamo', async () => {
    const dynamo = testClient()
    dynamo.put.resolves(1)
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    const result = await cache.set('test', 1)
    expect(result).toBe(1)
    expect(dynamo.put.callCount).toBe(1)
    expect(dynamo.put.getCall(0)?.args?.[0].Item?.data).toBe(1)
  })

  it('clear should clear cache', async () => {
    const dynamo = testClient()
    dynamo.delete.resolves()
    const cache = new Cache({
      dynamo: (dynamo as unknown) as ArcDynamoClient,
      metrics: createMetrics(),
    })
    await cache.clear('test')
    expect(dynamo.delete.callCount).toBe(1)
  })
})
