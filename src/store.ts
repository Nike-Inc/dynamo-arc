import {
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  BatchGetCommandOutput,
  BatchWriteCommandOutput,
} from '@aws-sdk/lib-dynamodb'
import { HttpHandlerOptions } from '@aws-sdk/types'

import {
  ArcDynamoClient,
  QueryAllInput,
  ScanAllInput,
  OptionalTableName,
  _typeIndex,
  _idField,
  _sortField,
} from './dynamo'
import { Logger, wrapper } from './logger'

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

export interface StoreConfig {
  logger?: unknown
  dynamo: ArcDynamoClient
}

export interface BaseStoreConfig<T> {
  logger?: unknown
  dynamo: ArcDynamoClient
  /** The type of the item, will be prefixed into the id */
  type: string
  idKey?: keyof T & string
  sortKey?: (keyof T & string) | undefined
  /** Delimits the type and the id, as well as any supplemental id segments */
  delimiter?: string
}

export interface TableKey {
  [key: string]: string
}

export interface DbItem<T> {
  data?: T
  createdOn?: Date | number
  [key: string]: unknown
}

interface BatchChange {
  PutRequest?: {
    Item:
      | {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any
        }
      | undefined
  }
  DeleteRequest?: {
    Key:
      | {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [key: string]: any
        }
      | undefined
  }
}

export abstract class Store<T> {
  public [_type]: string
  public [_dynamo]: ArcDynamoClient
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
  getKey(item: Partial<T>): TableKey {
    const idKey = item[this[_idKey]]
    if (typeof idKey !== 'string') throw new Error('Item has invalid idKey')

    return asKey(
      this[_dynamo],
      this.typeKey(idKey),
      this[_sortKey] ? ((item[this[_sortKey] as keyof T] as unknown) as string) : undefined
    )
  }

  /** Convert the DynamoDB record back into the originally stored JS object */
  fromDb(item?: DbItem<T>): T | null {
    if (!item || !item.data) return null
    const result = item.data as T
    return result
  }

  /** Convert a plain JS object into a DynamoDB record */
  toDb(item: T): DbItem<T> {
    const id = (item[this[_idKey]] as unknown) as string
    const data = { ...item }

    const dbItem = {
      ...this.getKey(item),
      type: this[_type],
      // This is to make it easier to find in the dynamo console
      typeId: id,
      createdOn: ((item as unknown) as DbItem<T>).createdOn,
      updatedOn: Date.now(),
      data,
    }

    return dbItem
  }

  /** Get a keyed item from Dynamo */
  async get(id: string, sortKey?: string, options?: HttpHandlerOptions): Promise<T | null> {
    const response = await this[_dynamo].get(
      {
        TableName: this.getTableName(),
        Key: this.asKey(id, sortKey),
      },
      options
    )
    return this.fromDb(response.Item)
  }

  /** Create or Update the item in Dynamo */
  async put(item: T, options?: HttpHandlerOptions): Promise<T> {
    await this[_dynamo].put(
      {
        TableName: this.getTableName(),
        Item: this.toDb(item),
      },
      options
    )
    return item
  }

  /** Put all items */
  async putAll(items: T[], options?: HttpHandlerOptions): Promise<void> {
    await this.batchWriteAll(
      items.map((item) => ({
        PutRequest: { Item: this.toDb(item) },
      })),
      options
    )
  }

  /** Delete the item from Dynamo matching the provided key */
  async delete(id: string, sortKey?: string, options?: HttpHandlerOptions): Promise<void> {
    await this[_dynamo].delete(
      {
        TableName: this.getTableName(),
        Key: this.asKey(id, sortKey),
      },
      options
    )
  }

  /** Delete all items */
  async deleteAll(items: T[], options?: HttpHandlerOptions): Promise<void> {
    await this.batchWriteAll(
      items.map((item) => ({
        DeleteRequest: { Key: this.getKey(item) },
      })),
      options
    )
  }

  /** Execute a query against the configured Dynamo table */
  async query(
    params: OptionalTableName<QueryCommandInput>,
    options?: HttpHandlerOptions
  ): Promise<T[]> {
    const response = await this[_dynamo].query(
      {
        TableName: this.getTableName(),
        ...params,
      },
      options
    )

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a query against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient query, minus TableName
   */
  async queryAll(params: QueryAllInput, options?: HttpHandlerOptions): Promise<T[]> {
    const response = await this[_dynamo].queryAll(
      {
        TableName: this.getTableName(),
        ...params,
      },
      options
    )

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute an automatically paged query by processing one page at a time
   */
  async queryByPage(
    params: QueryAllInput,
    /** Async function that receives an array of items from the current page. If it resolves `false` paging will stop  */
    pageFn: (page: T[]) => Promise<void | boolean>,
    options?: HttpHandlerOptions
  ): Promise<void> {
    let lastKey

    do {
      const dbResult: QueryCommandOutput = await this[_dynamo].query(
        {
          TableName: this.getTableName(),
          ...params,
          ExclusiveStartKey: lastKey,
        },
        options
      )

      if (!dbResult.Items) break
      const result = await pageFn(dbResult.Items.map(this.fromDb) as T[])
      if (result === false) break

      lastKey = dbResult.LastEvaluatedKey
    } while (lastKey)
  }

  /**
   * Execute a scan against the configured Dynamo table
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*} DynamoDB.DocumentClient scan response
   */
  async scan(
    params: OptionalTableName<ScanCommandInput>,
    options?: HttpHandlerOptions
  ): Promise<T[]> {
    const response = await this[_dynamo].scan(
      {
        TableName: this.getTableName(),
        ...params,
      },
      options
    )

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a scan against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*} params DynamoDB.DocumentClient scan, minus TableName
   * @return {*[]} Item Record Array
   */
  async scanAll(params: ScanAllInput, options?: HttpHandlerOptions): Promise<T[]> {
    const response = await this[_dynamo].scanAll(
      {
        TableName: this.getTableName(),
        ...params,
      },
      options
    )

    if (!response?.Items?.length) return []

    return response.Items.map(this.fromDb) as T[]
  }

  /**
   * Execute a batchGet against the configured Dynamo table
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with Store.asKey()
   * @return {*} DynamoDB.DocumentClient BatchGet response
   */
  async batchGet(keys: TableKey[], options?: HttpHandlerOptions): Promise<BatchGetCommandOutput> {
    if (!keys || !Array.isArray(keys)) throw new Error('"keys" parameter must be an array')
    if (!keys.length)
      return {
        $metadata: {},
        Responses: { [this.getTableName()]: [] },
      }
    return this[_dynamo].batchGet(
      {
        RequestItems: {
          [this.getTableName()]: {
            Keys: keys,
          },
        },
      },
      options
    )
  }

  /**
   * Execute a batchGet against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with Store.asKey()
   */
  async batchGetAll(keys: TableKey[], options?: HttpHandlerOptions): Promise<T[]> {
    if (!keys || !Array.isArray(keys)) throw new Error('"keys" parameter must be an array')
    if (!keys.length) return []
    const response = await this[_dynamo].batchGetAll(
      {
        RequestItems: {
          [this.getTableName()]: {
            Keys: keys,
          },
        },
      },
      options
    )

    if (!response?.Responses?.[this.getTableName()]?.length) return []

    return response.Responses[this.getTableName()].map(this.fromDb) as T[]
  }

  /**
   * Execute a batchWrite against the configured Dynamo table
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with Store.asKey() for DeleteRequest or Store.toDb() for PutRequest
   */
  async batchWrite(
    changes: BatchChange[],
    options?: HttpHandlerOptions
  ): Promise<BatchWriteCommandOutput> {
    if (!changes || !Array.isArray(changes)) throw new Error('"changes" parameter must be an array')
    if (!changes.length) return { $metadata: {} }
    return this[_dynamo].batchWrite(
      {
        RequestItems: {
          [this.getTableName()]: changes,
        },
      },
      options
    )
  }

  /**
   * Execute a batchWrite against the configured Dynamo table with automatic paging, mapped through fromDb()
   * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with Store.asKey() for DeleteRequest or Store.toDb() for PutRequest
   */
  async batchWriteAll(
    changes: BatchChange[],
    options?: HttpHandlerOptions
  ): Promise<BatchWriteCommandOutput> {
    if (!changes || !Array.isArray(changes)) throw new Error('"changes" parameter must be an array')
    if (!changes.length) return { $metadata: {} }
    return this[_dynamo].batchWriteAll(
      {
        RequestItems: {
          [this.getTableName()]: changes,
        },
      },
      options
    )
  }

  /**
   * Execute an automatically paged query against the typeIndex for the type configured on this store
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
}

export function asKey(
  dynamo: ArcDynamoClient,
  id: string,
  sortKey?: string
): { [key: string]: string } {
  const idField = dynamo[_idField]
  const sortField = dynamo[_sortField]

  const key = { [idField]: id }
  if (sortField) key[sortField] = sortKey ?? '_'

  return key
}
