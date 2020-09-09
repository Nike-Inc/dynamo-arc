'use strict'

const loggerWrapper = require('./loggerWrapper')
const Butter = require('dynamo-butter')

// Client Fields
const _tableName = Symbol('_tableName')
const _typeIndex = Symbol('_typeIndex')
const _idField = Symbol('_idField')
const _sortField = Symbol('_sortField')
const _ttlField = Symbol('_ttlField')

// Store Fields
const _type = Symbol('_type')
const _dynamo = Symbol('_dynamo')
const _logger = Symbol('_logger')
const _idKey = Symbol('_idKey')
const _sortKey = Symbol('_sortKey')
const _delimiter = Symbol('_delimiter')

function makeClient({
  dynamoConfig: config,
  butterConfig,
  tableConfig: {
    tableName,
    idField = 'id',
    sortField = 'sort_key',
    typeIndex = 'type-index',
    ttlField = 'ttl',
    hasTtlField = true,
    hasSortField = true,
  },
}) {
  if (!config) throw new Error('"dynamoConfig" is required')
  if (!config.region) throw new Error('"dynamoConfig.region" is required')
  if (!tableName) throw new Error('"tableConfig.tableName" is required')

  const client = Butter.up(
    {
      removeEmptyValues: true,
      ...config,
    },
    butterConfig
  )
  client[_tableName] = tableName
  client[_typeIndex] = typeIndex
  client[_idField] = idField
  client[_sortField] = hasSortField ? sortField : undefined
  client[_ttlField] = hasTtlField ? ttlField : undefined
  client.getTableName = () => client[_tableName]
  return client
}

class BaseStore {
  constructor({ logger, dynamo, type, sortKey, idKey = 'id', delimiter = ':' }) {
    this[_type] = type
    this[_dynamo] = dynamo
    this[_logger] = loggerWrapper(logger)
    this[_idKey] = idKey
    this[_sortKey] = sortKey
    this[_delimiter] = delimiter
  }

  getTableName() {
    return this[_dynamo].getTableName()
  }

  typeKey(...id) {
    return [this[_type], ...id].join(this[_delimiter])
  }

  asKey(id, sortKey) {
    return asKey(this[_dynamo], this.typeKey(id), sortKey)
  }

  fromDb(item) {
    if (!item || !item.data) return null
    item = item.data
    return item
  }

  toDb(item) {
    let id = item[this[_idKey]]
    let data = { ...item }

    const dbItem = {
      ...this.asKey(id, item[this[_sortKey]]),
      type: this[_type],
      // This is to make it easier to find in the dynamo console
      typeId: id,
      createdOn: item.createdOn,
      updatedOn: Date.now(),
      data,
    }

    return dbItem
  }

  async get(id, sortKey) {
    let response = await this[_dynamo].get({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
    return this.fromDb(response.Item)
  }

  async delete(id, sortKey) {
    return this[_dynamo].delete({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
  }

  async put(item) {
    await this[_dynamo].put({
      TableName: this.getTableName(),
      Item: this.toDb(item),
    })
    return item
  }

  async getAll() {
    const typeIndex = this[_dynamo][_typeIndex]
    let response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      IndexName: typeIndex,
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': this[_type] },
    })

    return response.Items.map(this.fromDb)
  }

  async forEachPage(pageFn, pageSize = 100) {
    const typeIndex = this[_dynamo][_typeIndex]
    let lastKey

    do {
      let dbResult = await this[_dynamo].query({
        TableName: this.getTableName(),
        IndexName: typeIndex,
        KeyConditionExpression: '#type = :type',
        ExpressionAttributeNames: { '#type': 'type' },
        ExpressionAttributeValues: { ':type': this[_type] },
        Limit: pageSize,
        ExclusiveStartKey: lastKey,
      })

      await pageFn(dbResult.Items.map(this.fromDb))

      lastKey = dbResult.LastEvaluatedKey
    } while (lastKey)
  }
}

function asKey(dynamo, id, sortKey = '_') {
  const idField = dynamo[_idField]
  const sortField = dynamo[_sortField]

  const key = { [idField]: id }
  if (sortField) key[sortField] = sortKey

  return key
}

module.exports = {
  makeClient,
  BaseStore,
  asKey,
  _ttlField,
}
