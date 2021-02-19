import {
  _type,
  _dynamo,
  _logger,
  _idKey,
  _sortKey,
  _delimiter,
  _tableName,
  _typeIndex,
  _idField,
  _sortField,
  _ttlField,
} from './dynamo'

export { makeClient, BaseStore, asKey, QueryInput, ScanInput, BatchGetItemOutputNative, BatchWriteItemOutputNative, WriteRequestNative } from './dynamo'
export { Cache, defaultCacheTtl } from './cache'

export { ClientConfig, ArcClient, DbItem, BaseStoreConfig } from './dynamo'
export { CacheOptions, CacheConfig, CacheMetrics, BatchGetKeys } from './cache'

// Symbols need to be exported in both manners
// The first supports typescript's need to have `unique symbol` not wrapped in an object
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
