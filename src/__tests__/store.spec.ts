/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from '@jest/globals'
import { stub } from 'sinon'

import { Store, StoreConfig, StoreSubConfig } from '../store'
import { _ttlField, _idField, _sortField, _typeIndex, ArcDynamoClient } from '../dynamo'

import { testClient } from './util'

interface TestItem {
  id: string
  owner: string
  name: string
}

class TestStore extends Store<TestItem> {
  constructor({ dynamo }: StoreSubConfig<TestItem>) {
    super({ dynamo, type: '_TESTITEM_', idKey: 'id', sortKey: 'owner' })
  }
}

describe('Store', () => {
  it('allows subclassing', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        super({ dynamo, type: '_TESTITEM_', idKey: 'id', sortKey: 'owner' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad idKey', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'other' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad sortKey', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'root', sortKey: 'bad' })
      }
    }
    expect(TestStore).toBeDefined()
  })
})

describe('Store', () => {
  it('typeKey joins type', () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.typeKey('1')).toBe('_TESTITEM_:1')
  })

  it('getTableName returns tableName', () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.getTableName()).toBe('test-table')
  })

  it('asKey returns key object', () => {
    const dynamo = testClient()
    let store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.asKey('1')).toEqual({ id: '_TESTITEM_:1', sort_key: '_' })
    expect(store.asKey('1', '2')).toEqual({ id: '_TESTITEM_:1', sort_key: '2' })

    store = new TestStore({
      dynamo: testClient({ hasSortField: false }) as unknown as ArcDynamoClient,
    })
    expect(store.asKey('1')).toEqual({ id: '_TESTITEM_:1' })
  })

  it('getKey returns key object', () => {
    const dynamo = testClient()
    let store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.getKey({ id: '1' })).toEqual({ id: '_TESTITEM_:1', sort_key: '_' })
    // @ts-expect-error Type Object literal may only specify known properties
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({
      id: '_TESTITEM_:1',
      sort_key: '_',
    })
    expect(store.getKey({ id: '1', owner: '2' })).toEqual({ id: '_TESTITEM_:1', sort_key: '2' })

    store = new TestStore({
      dynamo: testClient({ hasSortField: false }) as unknown as ArcDynamoClient,
    })
    expect(store.asKey('1')).toEqual({ id: '_TESTITEM_:1' })
  })

  it('getKey returns key object with custom sort', () => {
    const dynamo = testClient()
    let store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.getKey({ id: '1' })).toEqual({ id: '_TESTITEM_:1', sort_key: '_' })
    // @ts-expect-error Type Object literal may only specify known properties
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({
      id: '_TESTITEM_:1',
      sort_key: '_',
    })
    expect(store.getKey({ id: '1', owner: '2' })).toEqual({ id: '_TESTITEM_:1', sort_key: '2' })

    store = new TestStore({
      dynamo: testClient({ hasSortField: false }) as unknown as ArcDynamoClient,
    })
    expect(store.asKey('1')).toEqual({ id: '_TESTITEM_:1' })
  })

  it('Store fromDb handles empty item', () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    expect(store.fromDb()).toBe(null)
    expect(store.fromDb(undefined)).toBe(null)
    expect(store.fromDb({})).toBe(null)
    expect(store.fromDb({ data: undefined })).toBe(null)
  })

  it('Store fromDb unwraps data', () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const thing = { id: 'test' } as TestItem
    expect(store.fromDb({ data: thing })).toBe(thing)
  })

  it('Store toDb wraps input', () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const item = {
      id: 'id',
      name: 'test',
    } as TestItem
    expect(
      // Don't try to compare datetimes
      { ...store.toDb(item), updatedOn: undefined },
    ).toEqual({
      id: '_TESTITEM_:id',
      sort_key: '_',
      type: '_TESTITEM_',
      typeId: 'id',
      createdOn: undefined,
      updatedOn: undefined,
      data: item,
    })
  })

  it('Store calls dynamo for get', async () => {
    const dynamo = testClient()
    // dynamo.get = stub()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    dynamo.get.resolves({})
    await store.get('id')
    expect(dynamo.get.called).toBeTruthy()
    expect(dynamo.get.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: '_TESTITEM_:id', sort_key: '_' },
    })
  })

  it('Store calls dynamo for put', async () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    dynamo.put.resolves({})
    await store.put({ id: 'id', name: 'test' } as TestItem)
    expect(dynamo.put.called).toBeTruthy()
    expect(dynamo.put.firstCall?.args?.[0].Item?.id).toBe('_TESTITEM_:id')
    expect(dynamo.put.firstCall?.args?.[0].Item?.data.name).toBe('test')
  })

  it('Store calls dynamo for delete', async () => {
    const dynamo = testClient()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    dynamo.delete.resolves({})
    await store.delete('id')
    expect(dynamo.delete.called).toBeTruthy()
    expect(dynamo.delete.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: '_TESTITEM_:id', sort_key: '_' },
    })
  })

  it('query calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.query.resolves({ Items: [] })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    await store.query({
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    })
    const expected = {
      TableName: 'test-table',
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    }
    expect(dynamo.query.called).toBeTruthy()
    expect(dynamo.query.firstCall.args[0]).toEqual(expected)
  })

  it('scan calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.scan.resolves({ Items: [] })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const username = 'tester'
    await store.scan({
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    })
    const expected = {
      TableName: 'test-table',
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    }
    expect(dynamo.scan.called).toBeTruthy()
    expect(dynamo.scan.firstCall.args[0]).toEqual(expected)
  })

  it('batchGet calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchGet.resolves({ Items: [] })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })

    const item = { id: '1' } as TestItem
    await store.batchGet([store.getKey(item)])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: {
          Keys: [store.getKey(item)],
        },
      },
    }
    expect(dynamo.batchGet.called).toBeTruthy()
    expect(dynamo.batchGet.firstCall.args[0]).toEqual(expected)
  })

  it('batchWrite calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchWrite.resolves({ Items: [] })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const item = store.toDb({ id: '1' } as TestItem)
    await store.batchWrite([{ PutRequest: { Item: item } }])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: [{ PutRequest: { Item: item } }],
      },
    }
    expect(dynamo.batchWrite.called).toBeTruthy()
    expect(dynamo.batchWrite.firstCall.args[0]).toEqual(expected)
  })

  it('queryAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.queryAll.resolves({ Items: [], $metadata: {} })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    await store.queryAll({
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    })
    const expected = {
      TableName: 'test-table',
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    }
    expect(dynamo.queryAll.called).toBeTruthy()
    expect(dynamo.queryAll.firstCall.args[0]).toEqual(expected)
  })

  it('scanAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.scanAll.resolves({ Items: [], $metadata: {} })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const username = 'tester'
    await store.scanAll({
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    })
    const expected = {
      TableName: 'test-table',
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    }
    expect(dynamo.scanAll.called).toBeTruthy()
    expect(dynamo.scanAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchGetAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchGetAll.resolves({ Responses: { [dynamo.getTableName()]: [] }, $metadata: {} })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const item = { id: '1' } as TestItem
    await store.batchGetAll([store.getKey(item)])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: {
          Keys: [store.getKey(item)],
        },
      },
    }
    expect(dynamo.batchGetAll.called).toBeTruthy()
    expect(dynamo.batchGetAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchGetAll returns early when given empty array', async () => {
    const dynamo = testClient()
    dynamo.batchGetAll.rejects(new Error('should have avoided call'))
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const result = await store.batchGetAll([])
    expect(result).toEqual([])
    expect(dynamo.batchGetAll.called).toBeFalsy()
  })

  it('batchWriteAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const item = store.toDb({ id: '1' } as TestItem)
    await store.batchWriteAll([{ PutRequest: { Item: item } }])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: [{ PutRequest: { Item: item } }],
      },
    }
    expect(dynamo.batchWriteAll.called).toBeTruthy()
    expect(dynamo.batchWriteAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchWriteAll returns early when given empty array', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.rejects(new Error('should have avoided call'))
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    const result = await store.batchWriteAll([])
    expect(result).toEqual({ $metadata: {} })
    expect(dynamo.batchWriteAll.called).toBeFalsy()
  })

  it('getAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.queryAll.resolves({ Items: [], $metadata: {} })
    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })
    await store.getAll()
    const expected = {
      TableName: 'test-table',
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': '_TESTITEM_' },
    }
    expect(dynamo.queryAll.called).toBeTruthy()
    expect(dynamo.queryAll.firstCall.args[0]).toEqual(expected)
  })

  it('forEachPage calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.query.resolves({ Items: [] })

    const store = new TestStore({
      dynamo: dynamo as unknown as ArcDynamoClient,
    })

    const params = {
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': store.typeKey() },
      Limit: 100,
      ExclusiveStartKey: undefined,
    }

    await store.queryByPage(params, stub())

    expect(dynamo.query.called).toBeTruthy()

    const expected = {
      TableName: 'test-table',
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': store.typeKey() },
      Limit: 100,
      ExclusiveStartKey: undefined,
    }

    expect(dynamo.query.firstCall.args[0]).toEqual(expected)
  })
})
