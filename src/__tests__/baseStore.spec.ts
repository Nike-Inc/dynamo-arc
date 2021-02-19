/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from '@jest/globals'

import { BaseStore, BaseStoreConfig } from '../dynamo'

interface TestItem {
  root: string
  owner: string
}

describe('baseStore', () => {
  it('allows subclassing', () => {
    class TestStore extends BaseStore<TestItem> {
      constructor({ dynamo }: BaseStoreConfig<TestItem>) {
        super({ dynamo, type: '_TESTITEM_', idKey: 'root', sortKey: 'owner' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad idKey', () => {
    class TestStore extends BaseStore<TestItem> {
      constructor({ dynamo }: BaseStoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'name' })
      }
    }
    expect(TestStore).toBeDefined()
  })
  it('throws if subclass has bad sortKey', () => {
    class TestStore extends BaseStore<TestItem> {
      constructor({ dynamo }: BaseStoreConfig<TestItem>) {
        // @ts-expect-error Type '"name"' is not assignable to type '"root" | "owner"'
        super({ dynamo, type: '_TESTITEM_', idKey: 'root', sortKey: 'name' })
      }
    }
    expect(TestStore).toBeDefined()
  })
})
