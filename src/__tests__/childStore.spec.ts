/* eslint-disable @typescript-eslint/no-unused-vars */
// import { describe, it, expect } from '@jest/globals'

import { ChildStore, ChildStoreSubConfig, _idKeyForChildRecord } from '../childStore'
import { _ttlField, _idField, _sortField, _typeIndex, ArcDynamoClient } from '../dynamo'

import type { QueryCommandOutput } from '@aws-sdk/lib-dynamodb'

import { testClient } from './util'

interface Order {
  id: string
  items: Item[]
}

interface Item {
  id: string
}

describe('ChildStore subclassing', () => {
  it('allows subclassing', () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          parentIdKey: 'id',
          childIdKey: 'id',
          parentChildKey: 'items',
        })
      }
    }
    expect(OrderItemStore).toBeDefined()
  })
  it('throws if subclass has bad parentIdKey', () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          // @ts-expect-error Type '"parentIdKey"' is not assignable to type '"id" | "children"'
          parentIdKey: 'other',
          childIdKey: 'id',
          parentChildKey: 'items',
        })
      }
    }
    expect(OrderItemStore).toBeDefined()
  })
  it('throws if subclass has bad parentChildKey', () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          parentIdKey: 'id',
          // @ts-expect-error Type '"parentIdKey"' is not assignable to type '"id" | "children"'
          parentChildKey: 'other',
          childIdKey: 'id',
          childParentIdKey: 'parentId',
        })
      }
    }
    expect(OrderItemStore).toBeDefined()
  })
  it('throws if subclass has bad parentIdKey', () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          parentIdKey: 'id',
          parentChildKey: 'items',
          // @ts-expect-error Type '"childIdKey"' is not assignable to type '"id"
          childIdKey: 'other',
          childParentIdKey: 'parentId',
        })
      }
    }
    expect(OrderItemStore).toBeDefined()
  })
})

describe('ChildStore', () => {
  it('syncEdgesByParent with parent batchWrites changes', async () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          parentIdKey: 'id',
          childIdKey: 'id',
          parentChildKey: 'items',
        })
      }

      async syncByOrder(order: Order): Promise<[Item[], Item[]]>
      async syncByOrder(orderId: string, items: Item[]): Promise<[Item[], Item[]]>
      async syncByOrder(orderOrOrderId: Order | string, items?: Item[]): Promise<[Item[], Item[]]> {
        return this.syncEdgesByParent(orderOrOrderId, items)
      }
    }

    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new OrderItemStore({ dynamo: (dynamo as unknown) as ArcDynamoClient })

    const dbItems = [{ id: 'keep' }, { id: 'remove' }]
    const items = [{ id: 'keep' }, { id: 'add' }]
    const order = {
      id: 'a',
      items,
    }
    dynamo.queryAll.resolves(({
      Items: dbItems.map((e) => store.toDb({ ...e, [_idKeyForChildRecord]: order.id })),
    } as unknown) as QueryCommandOutput)

    const [added, removed] = await store.syncByOrder(order)

    expect(dynamo.queryAll.firstCall.args[0]).toEqual(
      expect.objectContaining({
        TableName: 'test-table',
        ExpressionAttributeValues: { ':id': '_ORDER_ITEM_:a' },
      })
    )

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_ORDER_ITEM_:a', sort_key: 'remove' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_ORDER_ITEM_:a',
              sort_key: 'add',
              data: { id: 'add' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([expect.objectContaining({ id: 'add' })])
    expect(removed).toEqual([expect.objectContaining({ id: 'remove' })])
  })

  it('syncEdgesByParent with parentId batchWrites changes', async () => {
    class OrderItemStore extends ChildStore<Order, Item> {
      constructor({ dynamo }: ChildStoreSubConfig<Order, Item>) {
        super({
          dynamo,
          type: '_ORDER_ITEM_',
          parentIdKey: 'id',
          childIdKey: 'id',
        })
      }

      async syncByOrder(order: Order): Promise<[Item[], Item[]]>
      async syncByOrder(orderId: string, items: Item[]): Promise<[Item[], Item[]]>
      async syncByOrder(orderOrOrderId: Order | string, items?: Item[]): Promise<[Item[], Item[]]> {
        return this.syncEdgesByParent(orderOrOrderId, items)
      }
    }

    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new OrderItemStore({ dynamo: (dynamo as unknown) as ArcDynamoClient })

    const dbItems = [{ id: 'keep' }, { id: 'remove' }]
    const items = [{ id: 'keep' }, { id: 'add' }]
    const order = {
      id: 'a',
      items,
    }
    dynamo.queryAll.resolves(({
      Items: dbItems.map((e) => store.toDb({ ...e, [_idKeyForChildRecord]: order.id })),
    } as unknown) as QueryCommandOutput)

    const [added, removed] = await store.syncByOrder(order.id, items)

    expect(dynamo.queryAll.firstCall.args[0]).toEqual(
      expect.objectContaining({
        TableName: 'test-table',
        ExpressionAttributeValues: { ':id': '_ORDER_ITEM_:a' },
      })
    )

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_ORDER_ITEM_:a', sort_key: 'remove' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_ORDER_ITEM_:a',
              sort_key: 'add',
              data: { id: 'add' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([expect.objectContaining({ id: 'add' })])
    expect(removed).toEqual([expect.objectContaining({ id: 'remove' })])
  })
})
