// First import symbols, which must be exported in two different ways
import { _type, _dynamo, _logger, _idKey, _sortKey, _delimiter } from './store'
import { _tableName, _typeIndex, _idField, _sortField, _ttlField } from './dynamo'

export { Store, StoreConfig, TableKey, DbItem, asKey } from './store'
export {
  makeClient,
  ArcConfig,
  ArcDynamoClient,
  QueryAllInput,
  ScanAllInput,
  BatchGetItemAllInput,
  BatchWriteItemAllInput,
} from './dynamo'

export {
  Cache,
  defaultCacheTtl,
  CacheOptions,
  CacheConfig,
  CacheMetrics,
  BatchGetKeys,
} from './cache'

// Symbols need to be exported in both manners
// The first supports typescript's need to have `unique symbol` not wrapped in an object
// see: https://github.com/microsoft/TypeScript/issues/4283 and https://github.com/microsoft/TypeScript/issues/35562
// The second supports the v1 interface for symbols, as well as informs their proper usage

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

export const clientSymbols = {
  _tableName,
  _typeIndex,
  _idField,
  _sortField,
  _ttlField,
}

export const storeSymbols = {
  _type,
  _dynamo,
  _logger,
  _idKey,
  _sortKey,
  _delimiter,
}
