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

  /**
   * Get the name of the table configured on the dynamo client
   * @return {string} The name of the underlying table
   * @memberof BaseStore
   */
  getTableName() {
    return this[_dynamo].getTableName()
  }

  /**
   * Join id segments together with the configured delimiter
   * @param {string[]} idParts N-ary id segments
   * @return {string} concatenated ID
   * @memberof BaseStore
   */
  join(...idParts) {
    return idParts.join(this[_delimiter])
  }

  /**
   * Create the ID field of this type
   * @param {string[]} ids N-ary id segments to convert into an ID key
   * @return {*}
   * @memberof BaseStore
   */
  typeKey(...id) {
    return this.join(this[_type], ...id)
  }

  /**
   * Creates the Key object used by dynamo. Includes a sort key if configured on this store
   * @param {string} id primary key value
   * @param {string} sortKey sort key value
   * @return {*} Key object with properties matching the idKey and sortKey confiuration
   * @memberof BaseStore
   */
  asKey(id, sortKey) {
    return asKey(this[_dynamo], this.typeKey(id), sortKey)
  }

  /**
   * Convert the DynamoDB record back into the originally stored JS object
   * @param {*} item the complete DynamoDB record
   * @return {*} the original JS object
   * @memberof BaseStore
   */
  fromDb(item) {
    if (!item || !item.data) return null
    item = item.data
    return item
  }

  /**
   * Convert a plain JS object into a DynamoDB record
   * @param {*} item original plan JS object
   * @return {*} DynamoDb record
   * @memberof BaseStore
   */
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

  /**
   * Get a keyed item from Dynamo
   * @param {string} id id value
   * @param {*} sortKey sort key value
   * @return {*} Item record
   * @memberof BaseStore
   */
  async get(id, sortKey) {
    let response = await this[_dynamo].get({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
    return this.fromDb(response.Item)
  }

  /**
   * Delete the item from Dynamo matching the provided key
   * @param {*} id id value
   * @param {*} sortKey sort key value
   * @return {*} Delete response
   * @memberof BaseStore
   */
  async delete(id, sortKey) {
    return this[_dynamo].delete({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
  }

  /**
   * Create or Update the item in Dynamo
   * @param {*} item Item Record
   * @return {*} Item Record (same object passed in)
   * @memberof BaseStore
   */
  async put(item) {
    await this[_dynamo].put({
      TableName: this.getTableName(),
      Item: this.toDb(item),
    })
    return item
  }

  /**
   * Execute a query against the configured Dynamo table
   * @param {*} params DynamoDB.DocumentClient query, minus TableName
   * @return {*} DynamoDB.DocumentClient query response
   * @memberof BaseStore
   */
  async query(params) {
    return this[_dynamo].query({
      TableName: this.getTableName(),
      ...params,
    })
  }

  /**
   * Execute a scan against the configured Dynamo table
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*} DynamoDB.DocumentClient scan response
   * @memberof BaseStore
   */
  async scan(params) {
    return this[_dynamo].scan({
      TableName: this.getTableName(),
      ...params,
    })
  }

  /**
   * Execute a batchGet against the configured Dynamo table
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
   * @return {*} DynamoDB.DocumentClient BatchGet response
   * @memberof BaseStore
   */
  async batchGet(keys) {
    return this[_dynamo].batchGet({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys,
        },
      },
    })
  }

  /**
   * Execute a batchWrite against the configured Dynamo table
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
   * @return {*} DynamoDB.DocumentClient BatchWrite response
   * @memberof BaseStore
   */
  async batchWrite(changes) {
    return this[_dynamo].batchWrite({
      RequestItems: {
        [this.getTableName()]: changes,
      },
    })
  }

  //
  // Enhanced Paging Methods
  //

  /**
   * Execute a query against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient query, minus TableName
   * @return {*[]} Item Record Array
   * @memberof BaseStore
   */
  async queryAll(params) {
    let response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      ...params,
    })

    return response.Items.map(this.fromDb)
  }

  /**
   * Execute a scan against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*[]} Item Record Array
   * @memberof BaseStore
   */
  async scanAll(params) {
    let response = await this[_dynamo].scanAll({
      TableName: this.getTableName(),
      ...params,
    })

    return response.Items.map(this.fromDb)
  }

  /**
   * Execute a batchGet against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
   * @return {*[]} Item Record Array
   * @memberof BaseStore
   */
  async batchGetAll(keys) {
    const response = await this[_dynamo].batchGetAll({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys,
        },
      },
    })

    return response.Responses[this.getTableName()].map(this.fromDb)
  }

  /**
   * Execute a batchWrite against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
   * @return {*} DynamoDB.DocumentClient BatchWrite response
   * @memberof BaseStore
   */
  async batchWriteAll(changes) {
    return this[_dynamo].batchWriteAll({
      RequestItems: {
        [this.getTableName()]: changes,
      },
    })
  }

  /**
   * Execute an automatically paged query against the typeIndex for the type configured on this store
   * @return {*[]} Item Record Array
   * @memberof BaseStore
   */
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

  /**
   * @callback pageFn
   * @param {*[]} pageItems Array of Item Records for the current page
   * @return {Promise.<*>}
   */

  /**
   * Execute an automatically paged query against the typeIndex for the type configured on this store
   * @param {pageFn} pageFn Paging function that receives each page. If async it will be awaited before the next page is fetched
   * @return {*[]} Item Record Array
   * @memberof BaseStore
   */
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
  _dynamo,
  _ttlField,
  clientSymbols: {
    _tableName,
    _typeIndex,
    _idField,
    _sortField,
    _ttlField,
  },
  storeSymbols: {
    _type,
    _dynamo,
    _logger,
    _idKey,
    _sortKey,
    _delimiter,
  },
}
