import { BatchGetItemOutputNative, BatchWriteItemOutputNative, up } from 'dynamo-butter'
import type {
  DynamoButterClient,
  DynamoDBClientConfig,
  ButterClientOptions,
  QueryInputNative,
  QueryOutputNative,
  ScanInputNative,
  WriteRequestNative,
} from 'dynamo-butter'

import { Logger, wrapper } from './logger'

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

// Store Symbols
export { _type }
export { _dynamo }
export { _logger }
export { _idKey }
export { _sortKey }
export { _delimiter }

// Client Symbols
export { _tableName }
export { _typeIndex }
export { _idField }
export { _sortField }
export { _ttlField }

export interface ClientConfig {
  dynamoConfig: DynamoDBClientConfig
  butterConfig: ButterClientOptions
  tableConfig: {
    tableName: string
    idField?: string
    sortField?: string
    typeIndex?: string
    ttlField?: string
    hasTtlField?: boolean
    hasSortField?: boolean
  }
}

export interface ArcClient extends DynamoButterClient {
  [_tableName]: string
  [_tableName]: string
  [_typeIndex]: string
  [_idField]: string
  [_sortField]?: string
  [_ttlField]?: string
  getTableName: () => string
}

export function makeClient({
  dynamoConfig,
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
}: ClientConfig): ArcClient {
  if (!dynamoConfig) throw new Error('"dynamoConfig" is required')
  if (!dynamoConfig.region) throw new Error('"dynamoConfig.region" is required')
  if (!tableName) throw new Error('"tableConfig.tableName" is required')

  const client = up(dynamoConfig, butterConfig) as ArcClient
  client[_tableName] = tableName
  client[_typeIndex] = typeIndex
  client[_idField] = idField
  client[_sortField] = hasSortField ? sortField : undefined
  client[_ttlField] = hasTtlField ? ttlField : undefined
  client.getTableName = () => client[_tableName]
  return client
}
export interface BaseStoreConfig<T> {
  logger?: unknown
  dynamo: ArcClient
  type: string
  idKey?: keyof T & string
  sortKey?: (keyof T & string) | undefined
  delimiter?: string
}

export class BaseStore<T> {
  public [_type]: string
  public [_dynamo]: ArcClient
  public [_logger]: Logger
  public [_idKey]: keyof T & string
  public [_sortKey]?: (keyof T & string) | undefined
  public [_delimiter]: string

  constructor({ logger, dynamo, type, sortKey, idKey, delimiter = ':' }: BaseStoreConfig<T>) {
    if (!idKey) {
      throw new Error('"idKey" is required')
    }

    this[_type] = type
    this[_dynamo] = dynamo
    this[_logger] = wrapper(logger)
    this[_idKey] = idKey
    this[_sortKey] = sortKey
    this[_delimiter] = delimiter
  }

  /** Get the name of the table configured on the dynamo client */
  getTableName(): string {
    return this[_dynamo].getTableName()
  }

  /**
   * Join id segments together with the configured delimiter
   * @param {string[]} idParts N-arity id segments
   */
  join(...idParts: string[]): string {
    return idParts.join(this[_delimiter])
  }

  /**
   * Create the ID field of this type by joining it to the store's configured TYPE
   * @param {string[]} ids N-ary id segments to convert into an ID key
   */
  typeKey(...id: string[]): string {
    return this.join(this[_type], ...id)
  }

  /** Creates the Key object used by dynamo. Includes a sort key if configured on this store */
  asKey(id: string, sortKey?: string): TableKey {
    return asKey(this[_dynamo], this.typeKey(id), sortKey)
  }

  /** Returns the Key object used by dynamo by extracting it from a the JS item object. Useful for building batch lists */
  getKey(item: T): TableKey {
    // The "as unknown as string" hack allows us to pull the keys out of the object
    // Typescript cannot see it, but we've already verified that these properties exist
    // In the generic types "keyof" constraints
    // This is verified in the baseStore.types.ts test
    // This should be replaced as soon as a type-safe constraint solution can be found
    return asKey(
      this[_dynamo],
      this.typeKey((item[this[_idKey]] as unknown) as string),
      this[_sortKey] ? ((item[this[_sortKey] as keyof T] as unknown) as string) : undefined
    )
  }

  /** Convert the DynamoDB record back into the originally stored JS object */
  fromDb(item?: DbItem): T | null {
    if (!item || !item.data) return null
    const result = item.data as T
    return result
  }

  /** Convert a plain JS object into a DynamoDB record */
  toDb(item: T): DbItem {
    const id = (item[this[_idKey]] as unknown) as string
    const data = { ...item }

    const dbItem = {
      ...this.getKey(item),
      type: this[_type],
      // This is to make it easier to find in the dynamo console
      typeId: id,
      createdOn: (item as DbItem).createdOn,
      updatedOn: Date.now(),
      data,
    }

    return dbItem
  }

  /** Get a keyed item from Dynamo */
  async get(id: string, sortKey?: string): Promise<T | null> {
    const response = await this[_dynamo].get({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
    return this.fromDb(response.Item)
  }

  /** Create or Update the item in Dynamo */
  async put(item: T): Promise<T> {
    await this[_dynamo].put({
      TableName: this.getTableName(),
      Item: this.toDb(item),
    })
    return item
  }

  /** Put all items */
  async putAll(items: T[]): Promise<void> {
    await this.batchWriteAll(
      items.map((item) => ({
        PutRequest: { Item: this.toDb(item) },
      }))
    )
  }

  /** Delete the item from Dynamo matching the provided key */
  async delete(id: string, sortKey?: string): Promise<void> {
    await this[_dynamo].delete({
      TableName: this.getTableName(),
      Key: this.asKey(id, sortKey),
    })
  }

  /** Delete all items */
  async deleteAll(items: T[]): Promise<void> {
    await this.batchWriteAll(
      items.map((item) => ({
        DeleteRequest: { Key: this.getKey(item) },
      }))
    )
  }

  /** Execute a query against the configured Dynamo table */
  async query(params: QueryInput): Promise<T[]> {
    const response = await this[_dynamo].query({
      TableName: this.getTableName(),
      ...params,
    })

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a query against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient query, minus TableName
   */
  async queryAll(params: QueryInput): Promise<T[]> {
    const response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      ...params,
    })

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a scan against the configured Dynamo table
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*} DynamoDB.DocumentClient scan response
   */
  async scan(params: ScanInput): Promise<T[]> {
    const response = await this[_dynamo].scan({
      TableName: this.getTableName(),
      ...params,
    })

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a scan against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*[]} Item Record Array
   */
  async scanAll(params: ScanInput): Promise<T[]> {
    const response = await this[_dynamo].scanAll({
      TableName: this.getTableName(),
      ...params,
    })

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a batchGet against the configured Dynamo table
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
   * @return {*} DynamoDB.DocumentClient BatchGet response
   */
  async batchGet(keys: TableKey[]): Promise<BatchGetItemOutputNative> {
    if (!keys || !Array.isArray(keys)) throw new Error('"keys" parameter must be an array')
    if (!keys.length)
      return {
        Responses: { [this.getTableName()]: [] },
      }
    return this[_dynamo].batchGet({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys,
        },
      },
    })
  }

  /**
   * Execute a batchGet against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
   * @return {*[]} Item Record Array
   */
  async batchGetAll(keys: TableKey[]): Promise<T[]> {
    if (!keys || !Array.isArray(keys)) throw new Error('"keys" parameter must be an array')
    if (!keys.length) return []
    const response = await this[_dynamo].batchGetAll({
      RequestItems: {
        [this.getTableName()]: {
          Keys: keys,
        },
      },
    })

    if (!response?.Responses?.[this.getTableName()]?.length) return []

    return response.Responses[this.getTableName()].map(this.fromDb) as T[]
  }

  /**
   * Execute a batchWrite against the configured Dynamo table
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
   * @return {*} DynamoDB.DocumentClient BatchWrite response
   */
  async batchWrite(changes: WriteRequestNative[]): Promise<BatchWriteItemOutputNative> {
    if (!changes || !Array.isArray(changes)) throw new Error('"changes" parameter must be an array')
    if (!changes.length) return {}
    return this[_dynamo].batchWrite({
      RequestItems: {
        [this.getTableName()]: changes,
      },
    })
  }

  /**
   * Execute a batchWrite against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
   * @return {*} DynamoDB.DocumentClient BatchWrite response
   */
  async batchWriteAll(changes: WriteRequestNative[]): Promise<void> {
    if (!changes || !Array.isArray(changes)) throw new Error('"changes" parameter must be an array')
    if (!changes.length) return
    return this[_dynamo].batchWriteAll({
      RequestItems: {
        [this.getTableName()]: changes,
      },
    })
  }

  /**
   * Execute an automatically paged query against the typeIndex for the type configured on this store
   * @return {*[]} Item Record Array
   */
  async getAll(): Promise<T[]> {
    const typeIndex = this[_dynamo][_typeIndex]
    const response = await this[_dynamo].queryAll({
      TableName: this.getTableName(),
      IndexName: typeIndex,
      KeyConditionExpression: '#type = :type',
      ExpressionAttributeNames: { '#type': 'type' },
      ExpressionAttributeValues: { ':type': this[_type] },
    })

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
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
   */
  async forEachPage(pageFn: (items: T[]) => Promise<void>, pageSize = 100): Promise<void> {
    const typeIndex = this[_dynamo][_typeIndex]
    let lastKey

    do {
      const dbResult: QueryOutputNative = await this[_dynamo].query({
        TableName: this.getTableName(),
        IndexName: typeIndex,
        KeyConditionExpression: '#type = :type',
        ExpressionAttributeNames: { '#type': 'type' },
        ExpressionAttributeValues: { ':type': this[_type] },
        Limit: pageSize,
        ExclusiveStartKey: lastKey,
      })

      if (dbResult?.Items?.length) {
        await pageFn(dbResult.Items.map(this.fromDb) as T[])
      }

      lastKey = dbResult.LastEvaluatedKey
    } while (lastKey)
  }
}

export function asKey(dynamo: ArcClient, id: string, sortKey?: string): { [key: string]: string } {
  const idField = dynamo[_idField]
  const sortField = dynamo[_sortField]

  const key = { [idField]: id }
  if (sortField) key[sortField] = sortKey ?? '_'

  return key
}

export interface TableKey {
  [key: string]: string
}

export interface DbItem {
  data?: unknown
  createdOn?: Date | number
}

export { BatchGetItemOutputNative }
export { BatchWriteItemOutputNative }
export { WriteRequestNative }

export type QueryInput = Pick<QueryInputNative, 'TableName'>
export type ScanInput = Pick<ScanInputNative, 'TableName'>
