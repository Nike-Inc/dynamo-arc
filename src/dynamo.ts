import { DynamoDBClient, DynamoDBClientConfig, KeysAndAttributes } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocument,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  ScanCommandOutput,
  BatchGetCommandInput,
  BatchGetCommandOutput,
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  TranslateConfig,
} from '@aws-sdk/lib-dynamodb'
import { HttpHandlerOptions, MetadataBearer } from '@aws-sdk/types'

import { ArcDefaults } from './marshalling'

export type OptionalTableName<T> = Omit<T, 'TableName'> & { TableName?: string | undefined }

export interface QueryAllInput extends OptionalTableName<QueryCommandInput> {
  QueryLimit?: number
  ItemLimit?: number
}

export interface ScanAllInput extends OptionalTableName<ScanCommandInput> {
  ScanLimit?: number
  ItemLimit?: number
}

export interface BatchGetItemAllInput extends BatchGetCommandInput {
  PageSize?: number
}

export interface BatchWriteItemAllInput extends BatchWriteCommandInput {
  PageSize?: number
}

// Client Fields
const _tableName = Symbol('_tableName')
const _typeIndex = Symbol('_typeIndex')
const _idField = Symbol('_idField')
const _sortField = Symbol('_sortField')
const _ttlField = Symbol('_ttlField')

// Client Symbols
export { _tableName }
export { _typeIndex }
export { _idField }
export { _sortField }
export { _ttlField }

export interface ArcDynamoClient extends DynamoDBDocument {
  queryAll(params: QueryAllInput, options?: HttpHandlerOptions): Promise<QueryCommandOutput>
  scanAll(params: ScanAllInput, options?: HttpHandlerOptions): Promise<ScanCommandOutput>
  batchGetAll(
    params: BatchGetItemAllInput,
    options?: HttpHandlerOptions
  ): Promise<BatchGetCommandOutput>
  batchWriteAll(
    params: BatchWriteItemAllInput,
    options?: HttpHandlerOptions
  ): Promise<BatchWriteCommandOutput>
  getTableName: () => string
  [_tableName]: string
  [_typeIndex]: string
  [_idField]: string
  [_sortField]: string | undefined
  [_ttlField]: string | undefined
  // queryByPage<T>(
  //   args: QueryAllInput,
  //   pageFn: (page: T[]) => Promise<void | boolean>,
  //   options?: HttpHandlerOptions
  // ): Promise<void>
}

export interface ArcConfig {
  tableName: string
  idField?: string
  sortField?: string
  typeIndex?: string
  ttlField?: string
  hasTtlField?: boolean
  hasSortField?: boolean
  clientConfig?: DynamoDBClientConfig
  translateConfig?: TranslateConfig
}

export function makeClient(
  {
    tableName,
    idField = 'id',
    sortField = 'sort_key',
    typeIndex = 'type-index',
    ttlField = 'ttl',
    hasTtlField = true,
    hasSortField = true,
    clientConfig,
    translateConfig = ArcDefaults,
  }: ArcConfig,
  client?: DynamoDBClient
): ArcDynamoClient {
  if (!tableName) throw new Error('"config.tableName" is required')
  if (!client && !clientConfig?.region) {
    throw new Error(
      'Must provide either a client parameter or "config.clientConfig" with at least a "region"'
    )
  }

  const dynamo: ArcDynamoClient = client
    ? (client as ArcDynamoClient)
    : // (this check is made above)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (DynamoDBDocument.from(new DynamoDBClient(clientConfig!), translateConfig) as ArcDynamoClient)

  dynamo.queryAll = queryAll
  dynamo.scanAll = scanAll
  dynamo.batchGetAll = batchGetAll
  dynamo.batchWriteAll = batchWriteAll

  dynamo[_tableName] = tableName
  dynamo[_typeIndex] = typeIndex
  dynamo[_idField] = idField
  dynamo[_sortField] = hasSortField ? sortField : undefined
  dynamo[_ttlField] = hasTtlField ? ttlField : undefined
  dynamo.getTableName = () => dynamo[_tableName]

  return dynamo as ArcDynamoClient
}

async function queryAll(
  this: ArcDynamoClient,
  params: QueryAllInput,
  options?: HttpHandlerOptions
): Promise<QueryCommandOutput> {
  params = { ...params }
  let result: QueryCommandOutput | undefined = undefined
  const queryLimit = params.QueryLimit
  const itemLimit = params.ItemLimit
  delete params.QueryLimit
  delete params.ItemLimit

  // The double cast is to satisfy ts here, so it can be used in loop before its first declaration
  let response: QueryCommandOutput = ({} as unknown) as QueryCommandOutput
  let workRemaining
  do {
    response = await this.query(
      {
        TableName: this.getTableName(),
        ...params,
        ExclusiveStartKey: response?.LastEvaluatedKey,
      },
      options
    )
    // First run
    if (result === undefined) {
      result = response
    } else {
      result.Count = optionalAdd(result.Count, response.Count)
      result.ScannedCount = optionalAdd(result.ScannedCount, response.ScannedCount)
      result.Items = (result?.Items || []).concat(response?.Items || [])
      result.LastEvaluatedKey = response.LastEvaluatedKey
    }
    workRemaining =
      response.LastEvaluatedKey &&
      (queryLimit === undefined || result?.ScannedCount || 0 < queryLimit) &&
      (itemLimit === undefined || result?.Count || 0 < itemLimit)
  } while (workRemaining)

  return result
}

async function scanAll(
  this: ArcDynamoClient,
  params: ScanAllInput,
  options?: HttpHandlerOptions
): Promise<ScanCommandOutput> {
  params = { ...params }
  let result: ScanCommandOutput | undefined = undefined
  const scanLimit = params.ScanLimit
  const itemLimit = params.ItemLimit
  delete params.ScanLimit
  delete params.ItemLimit

  // The double cast is to satisfy ts here, so it can be used in loop before its first declaration
  let response: ScanCommandOutput = ({} as unknown) as ScanCommandOutput
  let workRemaining
  do {
    response = await this.scan(
      {
        TableName: this.getTableName(),
        ...params,
        ExclusiveStartKey: response.LastEvaluatedKey,
      },
      options
    )
    // First run
    if (result === undefined) {
      result = response
    } else {
      result.Count = optionalAdd(result.Count, response.Count)
      result.ScannedCount = optionalAdd(result.ScannedCount, response.ScannedCount)
      result.Items = (result?.Items || []).concat(response?.Items || [])
      result.LastEvaluatedKey = response.LastEvaluatedKey
    }
    workRemaining =
      response.LastEvaluatedKey &&
      (scanLimit === undefined || result?.ScannedCount || 0 < scanLimit) &&
      (itemLimit === undefined || result?.Count || 0 < itemLimit)
  } while (workRemaining)

  return result
}

async function batchGetAll(
  this: ArcDynamoClient,
  params: BatchGetItemAllInput,
  options?: HttpHandlerOptions
): Promise<BatchGetCommandOutput> {
  let metadata: MetadataBearer['$metadata'] = {}
  const requestPool: BatchGetItemAllInput['RequestItems'] = {
    ...params.RequestItems,
  }

  const pageSize = params.PageSize
  delete params.PageSize
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const responses: { [key: string]: any[] } = {}

  while (true) {
    const batch = sliceGetBatch(requestPool, pageSize)
    if (batch === undefined || Object.keys(batch).length === 0) break
    const response = await this.batchGet(
      {
        ...params,
        RequestItems: batch,
      },
      options
    )
    metadata = response.$metadata
    if (response.Responses) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eachObj(response.Responses, (table: string, items: any[]) => {
        if (!responses[table]) responses[table] = []
        responses[table] = responses[table].concat(items)
      })
    }
    const unprocessed =
      response.UnprocessedKeys && Object.keys(response.UnprocessedKeys).length !== 0
        ? response.UnprocessedKeys
        : null
    if (!unprocessed) continue
    eachObj(unprocessed, (table: string, items: KeysAndAttributes) => {
      if (!items.Keys) return
      requestPool?.[table].Keys?.push(...items.Keys)
    })
  }

  return { Responses: responses, $metadata: metadata }
}

async function batchWriteAll(
  this: ArcDynamoClient,
  params: BatchWriteItemAllInput,
  options?: HttpHandlerOptions
): Promise<BatchWriteCommandOutput> {
  const requestPool = Object.assign({}, params.RequestItems)
  const pageSize = params.PageSize
  delete params.PageSize

  while (true) {
    const batch = sliceWriteBatch(requestPool, pageSize)
    if (batch === undefined || Object.keys(batch).length === 0) return { $metadata: {} }
    const response = await this.batchWrite(
      {
        ...params,
        RequestItems: batch,
      },
      options
    )
    const unprocessed =
      response.UnprocessedItems && Object.keys(response.UnprocessedItems).length !== 0
        ? response.UnprocessedItems
        : null
    if (!unprocessed) continue
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    eachObj(unprocessed, (table: string, items: any[]) => {
      requestPool[table] = requestPool[table].concat(items)
    })
  }
}

function sliceGetBatch(pool: BatchGetCommandInput['RequestItems'], pageSize = 25) {
  if (!pool) return
  let requestCount = 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const batch: { [key: string]: any } = {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  const tables = Object.keys(pool as {})
  if (tables.length === 0) return
  tables.forEach((tableName) => {
    const table = pool[tableName]
    if (!table?.Keys?.length || requestCount === pageSize) return
    const keys = table.Keys.splice(0, pageSize - requestCount)
    if (keys.length === 0) return
    requestCount += keys.length
    if (!batch[tableName]) batch[tableName] = Object.assign({}, table, { Keys: [] })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    batch[tableName].Keys = batch![tableName].Keys!.concat(keys)
  })
  return batch
}

function sliceWriteBatch(pool: BatchWriteItemAllInput['RequestItems'], pageSize = 25) {
  if (!pool) return
  let requestCount = 0
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const batch: { [key: string]: any[] } = {}
  // eslint-disable-next-line @typescript-eslint/ban-types
  const tables = Object.keys(pool as {})
  if (tables.length === 0) return
  tables.forEach((tableName) => {
    const table = pool[tableName]
    if (requestCount === pageSize || !table.length) return
    const items = table.splice(0, pageSize - requestCount)
    if (items.length === 0) return
    requestCount += items.length
    batch[tableName] = batch[tableName] !== undefined ? batch[tableName].concat(items) : items
  })
  return batch
}

function eachObj<T extends { [key: string]: K }, K>(obj: T, func: (key: string, val: K) => void) {
  Object.entries(obj).forEach(([key, val]) => func(key, val))
}

function optionalAdd(...args: (number | undefined)[]): number {
  return args.reduce((sum: number, arg: number | undefined) => (sum += arg || 0), 0)
}
