/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from '@jest/globals'

import { Store, StoreConfig } from '../store'

interface TestItem {
  root: string
  owner: string
}

describe('Store', () => {
  it('allows subclassing', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        super({ dynamo, type: '_TESTITEM_', idKey: 'root', sortKey: 'owner' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad idKey', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'name' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad sortKey', () => {
    class TestStore extends Store<TestItem> {
      constructor({ dynamo }: StoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'root', sortKey: 'name' })
      }
    }
    expect(TestStore).toBeDefined()
  })
})

describe('Store', () => {
  it('typeKey joins type', () => {
    const dynamo = testClient()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    expect(store.typeKey('1')).toBe('test:1')
  })

  it('getTableName returns tableName', () => {
    const dynamo = testClient()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    expect(store.getTableName()).toBe('test-table')
  })

  it('asKey returns key object', () => {
    const dynamo = testClient()
    let store = new Store({ dynamo, type: 'test', idKey: 'id' })
    expect(store.asKey('1')).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.asKey('1', '2')).toEqual({ id: 'test:1', sort_key: '2' })

    store = new Store({
      dynamo: testClient({ hasSortField: false }),
      type: 'test',
      idKey: 'id',
    })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('getKey returns key object', () => {
    const dynamo = testClient()
    let store = new Store({ dynamo, type: 'test', idKey: 'id' })
    expect(store.getKey({ id: '1' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', sort_key: '2' })).toEqual({ id: 'test:1', sort_key: '_' })

    store = new Store({
      dynamo: testClient({ hasSortField: false }),
      type: 'test',
      idKey: 'id',
    })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('getKey returns key object with custom sort', () => {
    const dynamo = testClient()
    let store = new Store({ dynamo, type: 'test', sortKey: 'name', idKey: 'id' })
    expect(store.getKey({ id: '1' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', name: '2' })).toEqual({ id: 'test:1', sort_key: '2' })

    store = new Store({
      dynamo: testClient({ hasSortField: false }),
      type: 'test',
      idKey: 'id',
    })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('Store fromDb handles empty item', () => {
    const dynamo = testClient()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    expect(store.fromDb()).toBe(null)
    expect(store.fromDb(null)).toBe(null)
    expect(store.fromDb({})).toBe(null)
    expect(store.fromDb({ data: null })).toBe(null)
  })

  it('Store fromDb unwraps data', () => {
    const dynamo = testClient()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const thing = {}
    expect(store.fromDb({ data: thing })).toBe(thing)
  })

  it('Store toDb wraps input', () => {
    const dynamo = testClient()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const item = {
      id: 'id',
      name: 'test',
    }
    expect(
      // Don't try to compare datetimes
      { ...store.toDb(item), updatedOn: undefined }
    ).toEqual({
      id: 'test:id',
      sort_key: '_',
      type: 'test',
      typeId: 'id',
      createdOn: undefined,
      updatedOn: undefined,
      data: item,
    })
  })

  it('Store calls dynamo for get', async () => {
    const dynamo = testClient()
    dynamo.get = stub()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    dynamo.get.resolves({})
    await store.get('id')
    expect(dynamo.get.called).toBeTruthy()
    expect(dynamo.get.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: 'test:id', sort_key: '_' },
    })
  })

  it('Store calls dynamo for put', async () => {
    const dynamo = testClient()
    dynamo.put = stub()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    dynamo.put.resolves({})
    await store.put({ id: 'id', name: 'test' })
    expect(dynamo.put.called).toBeTruthy()
    expect(dynamo.put.firstCall.args[0].Item.id).toBe('test:id')
    expect(dynamo.put.firstCall.args[0].Item.data.name).toBe('test')
  })

  it('Store calls dynamo for delete', async () => {
    const dynamo = testClient()
    dynamo.delete = stub()
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    dynamo.delete.resolves({})
    await store.delete('id')
    expect(dynamo.delete.called).toBeTruthy()
    expect(dynamo.delete.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: 'test:id', sort_key: '_' },
    })
  })

  it('query calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.query = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
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
    dynamo.scan = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
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
    dynamo.batchGet = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const item = store.toDb({ id: '1' })
    await store.batchGet([store.asKey(item)])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: {
          Keys: [store.asKey(item)],
        },
      },
    }
    expect(dynamo.batchGet.called).toBeTruthy()
    expect(dynamo.batchGet.firstCall.args[0]).toEqual(expected)
  })

  it('batchWrite calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchWrite = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const item = store.toDb({ id: '1' })
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
    dynamo.queryAll = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
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
    dynamo.scanAll = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
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
    dynamo.batchGetAll = stub().resolves({ Responses: { [dynamo.getTableName()]: [] } })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const item = store.toDb({ id: '1' })
    await store.batchGetAll([store.asKey(item)])
    const expected = {
      RequestItems: {
        [dynamo.getTableName()]: {
          Keys: [store.asKey(item)],
        },
      },
    }
    expect(dynamo.batchGetAll.called).toBeTruthy()
    expect(dynamo.batchGetAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchGetAll returns early when given empty array', async () => {
    const dynamo = testClient()
    dynamo.batchGetAll = stub().rejects(new Error('should have avoided call'))
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const result = await store.batchGetAll([])
    expect(result).toEqual([])
    expect(dynamo.batchGetAll.called).toBeFalsy()
  })

  it('batchWriteAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const item = store.toDb({ id: '1' })
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
    dynamo.batchWriteAll = stub().rejects(new Error('should have avoided call'))
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    const result = await store.batchWriteAll([])
    expect(result).toEqual(undefined)
    expect(dynamo.batchWriteAll.called).toBeFalsy()
  })

  it('getAll calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.queryAll = stub().resolves({ Items: [] })
    const store = new Store({ dynamo, type: 'test', idKey: 'id' })
    await store.getAll()
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

  it('forEachPage calls dynamo', async () => {
    const dynamo = testClient()
    dynamo.query = stub().resolves({ Items: [] })

    const store = new Store({ dynamo, type: 'test', idKey: 'id' })

    await store.forEachPage(stub())

    expect(dynamo.query.called).toBeTruthy()

    const expected = {
      TableName: 'test-table',
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
      Limit: 100,
      ExclusiveStartKey: undefined,
    }

    expect(dynamo.query.firstCall.args[0]).toEqual(expected)
  })
})
