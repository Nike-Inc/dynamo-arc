/* eslint-disable @typescript-eslint/no-unused-vars */
import { stub, SinonStubbedInstance } from 'sinon'
import util from 'util'

import {
  _tableName,
  _ttlField,
  _idField,
  _sortField,
  _typeIndex,
  _indexes,
  ArcDynamoClient,
  ArcConfig,
} from '../dynamo'

export const testClient = ({
  hasSortField = true,
  sortField = 'sort_key',
}: Partial<ArcConfig> = {}): SinonStubbedInstance<ArcDynamoClient> =>
  ({
    [_typeIndex]: 'type-index',
    [_indexes]: {
      'gsi1-index': { name: 'gsi1-index', idField: 'gsi1-key', sortField: 'gsi1-sort' },
    },
    [_tableName]: 'test-table',
    getTableName: () => 'test-table',
    [_idField]: 'id',
    [_ttlField]: 'ttl',
    [_sortField]: hasSortField ? sortField : undefined,
    get: stub(),
    put: stub(),
    delete: stub(),
    query: stub(),
    scan: stub(),
    batchGet: stub(),
    batchWrite: stub(),
    queryAll: stub(),
    scanAll: stub(),
    batchGetAll: stub(),
    batchWriteAll: stub(),
  }) as unknown as SinonStubbedInstance<ArcDynamoClient>

export function log(...args: unknown[]): void {
  console.log(...args.map((a) => util.inspect(a, false, null, true /* enable colors */)))
}
