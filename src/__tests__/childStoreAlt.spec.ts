/* eslint-disable @typescript-eslint/no-unused-vars */
// import { describe, it, expect } from '@jest/globals'

import { ChildStore, ChildStoreSubConfig } from '../childStoreAlt'
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

// describe('ChildStore subclassing', () => {
//   it('allows subclassing', () => {
//     class OrderItemStore extends ChildStore<Parent, Child> {
//       constructor({ dynamo }: ChildStoreSubConfig<Parent, Child>) {
//         super({
//           dynamo,
//           type: '_PARENTCHILD_',
//           parentIdKey: 'id',
//           parentChildKey: 'children',
//           childIdKey: 'id',
//           childParentIdKey: 'parentId',
//         })
//       }
//     }
//     expect(OrderItemStore).toBeDefined()
//   })
//   it('throws if subclass has bad parentIdKey', () => {
//     class OrderItemStore extends ChildStore<Parent, Child> {
//       constructor({ dynamo }: ChildStoreSubConfig<Parent, Child>) {
//         super({
//           dynamo,
//           type: '_PARENTCHILD_',
//           // @ts-expect-error Type '"parentIdKey"' is not assignable to type '"id" | "children"'
//           parentIdKey: 'other',
//           parentChildKey: 'children',
//           childIdKey: 'id',
//           childParentIdKey: 'parentId',
//         })
//       }
//     }
//     expect(OrderItemStore).toBeDefined()
//   })
//   it('throws if subclass has bad parentChildKey', () => {
//     class OrderItemStore extends ChildStore<Parent, Child> {
//       constructor({ dynamo }: ChildStoreSubConfig<Parent, Child>) {
//         super({
//           dynamo,
//           type: '_PARENTCHILD_',
//           parentIdKey: 'id',
//           // @ts-expect-error Type '"parentIdKey"' is not assignable to type '"id" | "children"'
//           parentChildKey: 'other',
//           childIdKey: 'id',
//           childParentIdKey: 'parentId',
//         })
//       }
//     }
//     expect(OrderItemStore).toBeDefined()
//   })
//   it('throws if subclass has bad parentIdKey', () => {
//     class OrderItemStore extends ChildStore<Parent, Child> {
//       constructor({ dynamo }: ChildStoreSubConfig<Parent, Child>) {
//         super({
//           dynamo,
//           type: '_PARENTCHILD_',
//           parentIdKey: 'id',
//           parentChildKey: 'children',
//           // @ts-expect-error Type '"childIdKey"' is not assignable to type '"id"
//           childIdKey: 'other',
//           childParentIdKey: 'parentId',
//         })
//       }
//     }
//     expect(OrderItemStore).toBeDefined()
//   })
// })

describe('ChildStore', () => {
  it('syncEdgesByParent with parent batchWrites changes', async () => {
    const dynamo = testClient()
    dynamo.batchWriteAll.resolves()
    const store = new OrderItemStore({ dynamo: (dynamo as unknown) as ArcDynamoClient })

    const dbItems = [{ id: 'keep' }, { id: 'remove' }]
    const items = [{ id: 'keep' }, { id: 'add' }]
    const parent = {
      id: 'a',
      items,
    }
    dynamo.queryAll.resolves(({
      Items: dbItems.map((e) => store.toDb(e)),
    } as unknown) as QueryCommandOutput)

    const [added, removed] = await store.syncEdgesByParent(parent)

    expect(dynamo.queryAll.firstCall.args[0]).toEqual(
      expect.objectContaining({
        TableName: 'test-table',
        ExpressionAttributeValues: { ':id': '_PARENTCHILD_:a' },
      })
    )

    expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          DeleteRequest: { Key: { id: '_PARENTCHILD_:a', sort_key: 'remove' } },
        }),
        expect.objectContaining({
          PutRequest: {
            Item: expect.objectContaining({
              id: '_PARENTCHILD_:a',
              sort_key: 'add',
              data: { parentId: 'a', id: 'add' },
            }),
          },
        }),
      ])
    )

    expect(added).toEqual([{ id: 'add', parentId: 'a' }])
    expect(removed).toEqual([{ id: 'remove', parentId: 'a' }])
  })

  // it('syncEdgesByParent with parentId batchWrites changes', async () => {
  //   const dynamo = testClient()
  //   dynamo.batchWriteAll.resolves()
  //   const store = new OrderItemStore({ dynamo: (dynamo as unknown) as ArcDynamoClient })

  //   const dbChildren = [
  //     { id: 'keep', parentId: 'a' },
  //     { id: 'remove', parentId: 'a' },
  //   ]
  //   const children = [
  //     { id: 'keep', parentId: 'a' },
  //     { id: 'add', parentId: 'a' },
  //   ]
  //   dynamo.queryAll.resolves(({
  //     Items: dbChildren.map((e) => store.toDb(e)),
  //   } as unknown) as QueryCommandOutput)

  //   const [added, removed] = await store.syncEdgesByParent('a', children)

  //   expect(dynamo.queryAll.firstCall.args[0]).toEqual(
  //     expect.objectContaining({
  //       TableName: 'test-table',
  //       ExpressionAttributeValues: { ':id': '_PARENTCHILD_:a' },
  //     })
  //   )

  //   expect(dynamo.batchWriteAll.firstCall.args[0]?.RequestItems?.['test-table']).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         DeleteRequest: { Key: { id: '_PARENTCHILD_:a', sort_key: 'remove' } },
  //       }),
  //       expect.objectContaining({
  //         PutRequest: {
  //           Item: expect.objectContaining({
  //             id: '_PARENTCHILD_:a',
  //             sort_key: 'add',
  //             data: { parentId: 'a', id: 'add' },
  //           }),
  //         },
  //       }),
  //     ])
  //   )

  //   expect(added).toEqual([{ id: 'add', parentId: 'a' }])
  //   expect(removed).toEqual([{ id: 'remove', parentId: 'a' }])
  // })
})
