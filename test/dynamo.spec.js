'use strict'

const test = require('ava')
const sinon = require('sinon')
const { stub } = sinon
const { makeClient, BaseStore } = require('../src/dynamo')

const testClient = (config) =>
  makeClient({
    dynamoConfig: { region: 'us-west-2' },
    tableConfig: { tableName: 'test-table', ...config },
  })

test('makeClient requires valid config', (t) => {
  t.throws(() => makeClient(), { message: /destructure.+?dynamoConfig/ }, 'requires config')
  t.throws(
    () => makeClient({ tableConfig: {} }),
    { message: /dynamoConfig.+?required/ },
    'requires dynamoConfig'
  )
  t.throws(
    () => makeClient({ dynamoConfig: {}, tableConfig: {} }),
    { message: /region.+?required/ },
    'requires region'
  )
  t.throws(
    () => makeClient({ dynamoConfig: { region: 'us-west-2' }, tableConfig: {} }),
    { message: /tableConfig\.tableName.+?required/ },
    'requires tableName'
  )
})

test('makeClient returns valid client', (t) => {
  const client = testClient()
  t.is(client.getTableName(), 'test-table', 'tableName')
})

test('BaseStore.typeKey joins type', (t) => {
  const dynamo = testClient()
  const store = new BaseStore({ dynamo, type: 'test' })
  t.is(store.typeKey('1'), 'test:1', 'hash')
})

test('BaseStore.getTableName returns tableName', (t) => {
  const dynamo = testClient()
  const store = new BaseStore({ dynamo, type: 'test' })
  t.is(store.getTableName(), 'test-table', 'tableName')
})

test('BaseStore.asKey returns key object', (t) => {
  let dynamo = testClient()
  let store = new BaseStore({ dynamo, type: 'test' })
  t.deepEqual(store.asKey('1'), { id: 'test:1', sort_key: '_' }, 'key with sort')
  t.deepEqual(store.asKey('1', '2'), { id: 'test:1', sort_key: '2' }, 'key with custom sort')

  store = new BaseStore({ dynamo: testClient({ hasSortField: false }), type: 'test' })
  t.deepEqual(store.asKey('1'), { id: 'test:1' }, 'key without sort')
})

test('BaseStore fromDb handles empty item', (t) => {
  let dynamo = testClient()
  let store = new BaseStore({ dynamo, type: 'test' })
  t.is(store.fromDb(), null, 'missing')
  t.is(store.fromDb(null), null, 'null')
  t.is(store.fromDb({}), null, 'empty')
  t.is(store.fromDb({ data: null }), null, 'data empty')
})

test('BaseStore fromDb unwraps data', (t) => {
  let dynamo = testClient()
  let store = new BaseStore({ dynamo, type: 'test' })
  let thing = {}
  t.is(store.fromDb({ data: thing }), thing, 'unwrapped')
})

test('BaseStore toDb wraps input', (t) => {
  let dynamo = testClient()
  let store = new BaseStore({ dynamo, type: 'test' })
  let item = {
    id: 'id',
    name: 'test',
  }
  t.deepEqual(
    // Don't try to compare datetimes
    { ...store.toDb(item), updatedOn: undefined },
    {
      id: 'test:id',
      sort_key: '_',
      type: 'test',
      typeId: 'id',
      createdOn: undefined,
      updatedOn: undefined,
      data: item,
    },
    'wrapped'
  )
})

test('BaseStore calls dynamo for get', async (t) => {
  let dynamo = testClient()
  dynamo.get = stub()
  let store = new BaseStore({ dynamo, type: 'test' })
  dynamo.get.resolves({})
  await store.get('id')
  t.truthy(dynamo.get.called, 'called')
  t.deepEqual(
    dynamo.get.firstCall.args[0],
    { TableName: 'test-table', Key: { id: 'test:id', sort_key: '_' } },
    'params'
  )
})

test('BaseStore calls dynamo for put', async (t) => {
  let dynamo = testClient()
  dynamo.put = stub()
  let store = new BaseStore({ dynamo, type: 'test' })
  dynamo.put.resolves({})
  await store.put({ id: 'id', name: 'test' })
  t.truthy(dynamo.put.called, 'called')
  t.is(dynamo.put.firstCall.args[0].Item.id, 'test:id', 'params')
  t.is(dynamo.put.firstCall.args[0].Item.data.name, 'test', 'params')
})

test('BaseStore calls dynamo for delete', async (t) => {
  let dynamo = testClient()
  dynamo.delete = stub()
  let store = new BaseStore({ dynamo, type: 'test' })
  dynamo.delete.resolves({})
  await store.delete('id')
  t.truthy(dynamo.delete.called, 'called')
  t.deepEqual(
    dynamo.delete.firstCall.args[0],
    { TableName: 'test-table', Key: { id: 'test:id', sort_key: '_' } },
    'params'
  )
})

test('BaseStore.getAll calls dynamo', async (t) => {
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
  t.truthy(dynamo.queryAll.called, 'called')
  t.deepEqual(dynamo.queryAll.firstCall.args[0], expected, 'params')
})

test('BaseStore.forEachPage calls dynamo', async (t) => {
  let dynamo = testClient()
  dynamo.query = stub().resolves({ Items: [] })

  let store = new BaseStore({ dynamo, type: 'test' })

  await store.forEachPage(stub())

  t.truthy(dynamo.query.called, 'called')

  let expected = {
    TableName: 'test-table',
    IndexName: 'type-index',
    KeyConditionExpression: '#type = :type',
    ExpressionAttributeNames: { '#type': 'type' },
    ExpressionAttributeValues: { ':type': 'test' },
    Limit: 100,
    ExclusiveStartKey: undefined,
  }

  t.deepEqual(dynamo.query.firstCall.args[0], expected, 'params')
})
