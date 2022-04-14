/* eslint-disable @typescript-eslint/no-unused-vars */
// import { describe, it, expect } from '@jest/globals'

import { StoreConfig } from '../store'
import { BaseEdgeStore, EdgeStore, EdgeStoreSubConfig } from '../edgeStore'
import { _ttlField, _idField, _sortField, _typeIndex, ArcDynamoClient } from '../dynamo'

import type { QueryCommandOutput } from '@aws-sdk/lib-dynamodb'

import { testClient } from './util'

interface TestEdge {
  leftId: string
  rightId: string
  name?: string
}

class TestBaseStore extends BaseEdgeStore<TestEdge> {
  constructor({ dynamo }: Omit<StoreConfig<TestEdge>, 'idKey' | 'type'>) {
    super({ dynamo, type: '_EGDE_', idKey: 'leftId', sortKey: 'rightId' })
  }
}

describe('BaseEdgeStore subclassing', () => {
  it('allows subclassing', () => {
    class TestBaseStore extends BaseEdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        super({ dynamo, type: '_EGDE_', idKey: 'leftId', sortKey: 'rightId' })
      }
    }
    expect(TestBaseStore).toBeDefined()
  })
  it('throws if subclass has bad idKey', () => {
    class TestBaseStore extends BaseEdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_EGDE_', idKey: 'other' })
      }
    }
    expect(TestBaseStore).toBeDefined()
  })
  it('throws if subclass has bad sortKey', () => {
    class TestBaseStore extends BaseEdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_EGDE_', idKey: 'leftId', sortKey: 'bad' })
      }
    }
    expect(TestBaseStore).toBeDefined()
  })
})

describe('BaseEdgeStore', () => {
  it('syncEdges batchWrites changes', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new TestBaseStore({ dynamo: dynamo as unknown as ArcDynamoClient })

    const dbEdges = [
      { leftId: 'a', rightId: 'keep' },
      { leftId: 'a', rightId: 'remove' },
    ]
    const edges = [
      { leftId: 'a', rightId: 'keep' },
      { leftId: 'a', rightId: 'add' },
    ]

    const [added, removed] = await store.syncEdges(dbEdges, edges)

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_EGDE_:a', sort_key: 'remove' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_EGDE_:a',
              sort_key: 'add',
              data: { leftId: 'a', rightId: 'add' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([{ leftId: 'a', rightId: 'add' }])
    expect(removed).toEqual([{ leftId: 'a', rightId: 'remove' }])
  })
})

class TestEdgeStore extends EdgeStore<TestEdge> {
  constructor({ dynamo }: EdgeStoreSubConfig<TestEdge>) {
    super({
      dynamo,
      type: '_EGDE_',
      idKey: 'leftId',
      sortKey: 'rightId',
      secondaryIndex: 'gsi1-index',
    })
  }

  async syncLeft(leftId: string, edges: TestEdge[]): Promise<[TestEdge[], TestEdge[]]> {
    return this.syncEdgesByPrimary(leftId, edges)
  }

  async syncRight(rightId: string, edges: TestEdge[]): Promise<[TestEdge[], TestEdge[]]> {
    return this.syncEdgesBySecondary(rightId, edges)
  }
}

describe('EdgeStore subclassing', () => {
  it('allows subclassing', () => {
    class TestEdgeStore extends EdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        super({
          dynamo,
          type: '_EGDE_',
          idKey: 'leftId',
          sortKey: 'rightId',
          secondaryIndex: 'gsi1-index',
        })
      }
    }
    expect(TestEdgeStore).toBeDefined()
  })
  it('throws if subclass has bad idKey', () => {
    class TestEdgeStore extends EdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_EGDE_', idKey: 'other' })
      }
    }
    expect(TestEdgeStore).toBeDefined()
  })
  it('throws if subclass has bad sortKey', () => {
    class TestEdgeStore extends EdgeStore<TestEdge> {
      constructor({ dynamo }: StoreConfig<TestEdge>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_EGDE_', idKey: 'leftId', sortKey: 'bad' })
      }
    }
    expect(TestEdgeStore).toBeDefined()
  })
})

describe('EdgeStore', () => {
  it('syncEdgesByPrimary batchWrites changes', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new TestEdgeStore({ dynamo: dynamo as unknown as ArcDynamoClient })

    const dbEdges = [
      { leftId: 'a', rightId: 'keep' },
      { leftId: 'a', rightId: 'remove' },
    ]
    const edges = [
      { leftId: 'a', rightId: 'keep' },
      { leftId: 'a', rightId: 'add' },
    ]
    dynamo.queryAll.resolves({
      Items: dbEdges.map((e) => store.toDb(e)),
    } as unknown as QueryCommandOutput)

    const [added, removed] = await store.syncLeft('a', edges)

    // log(dynamo.batchWriteAll.firstCall.args[0])

    expect(dynamo.queryAll.firstCall.args[0]).toEqual(
      expect.objectContaining({
        TableName: 'test-table',
        ExpressionAttributeValues: { ':id': '_EGDE_:a' },
      })
    )

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_EGDE_:a', sort_key: 'remove' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_EGDE_:a',
              sort_key: 'add',
              data: { leftId: 'a', rightId: 'add' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([{ leftId: 'a', rightId: 'add' }])
    expect(removed).toEqual([{ leftId: 'a', rightId: 'remove' }])
  })

  it('syncEdgesBySecondary batchWrites changes', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new TestEdgeStore({ dynamo: dynamo as unknown as ArcDynamoClient })

    const dbEdges = [
      { leftId: 'keep', rightId: 'b' },
      { leftId: 'remove', rightId: 'b' },
    ]
    const edges = [
      { leftId: 'keep', rightId: 'b' },
      { leftId: 'add', rightId: 'b' },
    ]
    dynamo.queryAll.resolves({
      Items: dbEdges.map((e) => store.toDb(e)),
    } as unknown as QueryCommandOutput)

    const [added, removed] = await store.syncRight('b', edges)

    expect(dynamo.queryAll.firstCall.args[0]).toEqual(
      expect.objectContaining({
        TableName: 'test-table',
        ExpressionAttributeNames: { '#id': 'gsi1-key' },
        ExpressionAttributeValues: { ':id': '_EGDE_:b' },
      })
    )

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_EGDE_:remove', sort_key: 'b' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_EGDE_:add',
              sort_key: 'b',
              data: { leftId: 'add', rightId: 'b' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([{ leftId: 'add', rightId: 'b' }])
    expect(removed).toEqual([{ leftId: 'remove', rightId: 'b' }])
  })
})
