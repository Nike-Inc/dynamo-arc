/* eslint-disable @typescript-eslint/no-var-requires */
'use strict'

const { describe, expect, it } = require('@jest/globals')

const sinon = require('sinon')
const { stub } = sinon
const { makeClient, BaseStore } = require('../dynamo')

const testClient = (config) =>
  makeClient({
    dynamoConfig: { region: 'us-west-2' },
    tableConfig: { tableName: 'test-table', ...config },
  })

describe('makeClient', () => {
  it('requires valid config', () => {
    expect(() => makeClient()).toThrowError(/destructure.+?dynamoConfig/)
    expect(() => makeClient({ tableConfig: {} })).toThrowError(/dynamoConfig.+?required/)
    expect(() => makeClient({ dynamoConfig: {}, tableConfig: {} })).toThrowError(
      /region.+?required/
    )
    expect(() =>
      makeClient({ dynamoConfig: { region: 'us-west-2' }, tableConfig: {} })
    ).toThrowError(/tableConfig\.tableName.+?required/)
  })

  it('returns valid client', () => {
    const client = testClient()
    expect(client.getTableName()).toBe('test-table')
  })
})

describe('BaseStore', () => {
  it('typeKey joins type', () => {
    const dynamo = testClient()
    const store = new BaseStore({ dynamo, type: 'test' })
    expect(store.typeKey('1')).toBe('test:1')
  })

  it('getTableName returns tableName', () => {
    const dynamo = testClient()
    const store = new BaseStore({ dynamo, type: 'test' })
    expect(store.getTableName()).toBe('test-table')
  })

  it('asKey returns key object', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test' })
    expect(store.asKey('1')).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.asKey('1', '2')).toEqual({ id: 'test:1', sort_key: '2' })

    store = new BaseStore({ dynamo: testClient({ hasSortField: false }), type: 'test' })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('getKey returns key object', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test' })
    expect(store.getKey({ id: '1' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', sort_key: '2' })).toEqual({ id: 'test:1', sort_key: '_' })

    store = new BaseStore({ dynamo: testClient({ hasSortField: false }), type: 'test' })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('getKey returns key object with custom sort', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test', sortKey: 'name' })
    expect(store.getKey({ id: '1' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', extra: 'removed' })).toEqual({ id: 'test:1', sort_key: '_' })
    expect(store.getKey({ id: '1', name: '2' })).toEqual({ id: 'test:1', sort_key: '2' })

    store = new BaseStore({ dynamo: testClient({ hasSortField: false }), type: 'test' })
    expect(store.asKey('1')).toEqual({ id: 'test:1' })
  })

  it('BaseStore fromDb handles empty item', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test' })
    expect(store.fromDb()).toBe(null)
    expect(store.fromDb(null)).toBe(null)
    expect(store.fromDb({})).toBe(null)
    expect(store.fromDb({ data: null })).toBe(null)
  })

  it('BaseStore fromDb unwraps data', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test' })
    let thing = {}
    expect(store.fromDb({ data: thing })).toBe(thing)
  })

  it('BaseStore toDb wraps input', () => {
    let dynamo = testClient()
    let store = new BaseStore({ dynamo, type: 'test' })
    let item = {
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

  it('BaseStore calls dynamo for get', async () => {
    let dynamo = testClient()
    dynamo.get = stub()
    let store = new BaseStore({ dynamo, type: 'test' })
    dynamo.get.resolves({})
    await store.get('id')
    expect(dynamo.get.called).toBeTruthy()
    expect(dynamo.get.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: 'test:id', sort_key: '_' },
    })
  })

  it('BaseStore calls dynamo for put', async () => {
    let dynamo = testClient()
    dynamo.put = stub()
    let store = new BaseStore({ dynamo, type: 'test' })
    dynamo.put.resolves({})
    await store.put({ id: 'id', name: 'test' })
    expect(dynamo.put.called).toBeTruthy()
    expect(dynamo.put.firstCall.args[0].Item.id).toBe('test:id')
    expect(dynamo.put.firstCall.args[0].Item.data.name).toBe('test')
  })

  it('BaseStore calls dynamo for delete', async () => {
    let dynamo = testClient()
    dynamo.delete = stub()
    let store = new BaseStore({ dynamo, type: 'test' })
    dynamo.delete.resolves({})
    await store.delete('id')
    expect(dynamo.delete.called).toBeTruthy()
    expect(dynamo.delete.firstCall.args[0]).toEqual({
      TableName: 'test-table',
      Key: { id: 'test:id', sort_key: '_' },
    })
  })

  it('query calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.query = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    await store.query({
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    })
    let expected = {
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
    let dynamo = testClient()
    dynamo.scan = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    let username = 'tester'
    await store.scan({
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    })
    let expected = {
      TableName: 'test-table',
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    }
    expect(dynamo.scan.called).toBeTruthy()
    expect(dynamo.scan.firstCall.args[0]).toEqual(expected)
  })

  it('batchGet calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.batchGet = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    let item = store.toDb({ id: '1' })
    await store.batchGet([store.asKey(item)])
    let expected = {
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
    let dynamo = testClient()
    dynamo.batchWrite = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    let item = store.toDb({ id: '1' })
    await store.batchWrite([{ PutRequest: { Item: item } }])
    let expected = {
      RequestItems: {
        [dynamo.getTableName()]: [{ PutRequest: { Item: item } }],
      },
    }
    expect(dynamo.batchWrite.called).toBeTruthy()
    expect(dynamo.batchWrite.firstCall.args[0]).toEqual(expected)
  })

  it('queryAll calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.queryAll = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    await store.queryAll({
      IndexName: 'type-index',
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': 'test' },
    })
    let expected = {
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
    let dynamo = testClient()
    dynamo.scanAll = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    let username = 'tester'
    await store.scanAll({
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    })
    let expected = {
      TableName: 'test-table',
      FilterExpression: 'contains(#username, :username)',
      ExpressionAttributeNames: { '#username': 'username' },
      ExpressionAttributeValues: { ':username': username.toLowerCase() },
    }
    expect(dynamo.scanAll.called).toBeTruthy()
    expect(dynamo.scanAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchGetAll calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.batchGetAll = stub().resolves({ Responses: { [dynamo.getTableName()]: [] } })
    let store = new BaseStore({ dynamo, type: 'test' })
    let item = store.toDb({ id: '1' })
    await store.batchGetAll([store.asKey(item)])
    let expected = {
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
    let dynamo = testClient()
    dynamo.batchGetAll = stub().rejects(new Error('should have avoided call'))
    let store = new BaseStore({ dynamo, type: 'test' })
    let result = await store.batchGetAll([])
    expect(result).toEqual([])
    expect(dynamo.batchGetAll.called).toBeFalsy()
  })

  it('batchWriteAll calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.batchWriteAll = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    let item = store.toDb({ id: '1' })
    await store.batchWriteAll([{ PutRequest: { Item: item } }])
    let expected = {
      RequestItems: {
        [dynamo.getTableName()]: [{ PutRequest: { Item: item } }],
      },
    }
    expect(dynamo.batchWriteAll.called).toBeTruthy()
    expect(dynamo.batchWriteAll.firstCall.args[0]).toEqual(expected)
  })

  it('batchWriteAll returns early when given empty array', async () => {
    let dynamo = testClient()
    dynamo.batchWriteAll = stub().rejects(new Error('should have avoided call'))
    let store = new BaseStore({ dynamo, type: 'test' })
    let result = await store.batchWriteAll([])
    expect(result).toEqual(undefined)
    expect(dynamo.batchWriteAll.called).toBeFalsy()
  })

  it('getAll calls dynamo', async () => {
    let dynamo = testClient()
    dynamo.queryAll = stub().resolves({ Items: [] })
    let store = new BaseStore({ dynamo, type: 'test' })
    await store.getAll()
    let expected = {
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
    let dynamo = testClient()
    dynamo.query = stub().resolves({ Items: [] })

    let store = new BaseStore({ dynamo, type: 'test' })

    await store.forEachPage(stub())

    expect(dynamo.query.called).toBeTruthy()

    let expected = {
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
