/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect } from '@jest/globals'

import { makeClient } from '../dynamo'

describe('makeClient', () => {
  it('requires valid config', () => {
    // @ts-expect-error missing parameters
    expect(() => makeClient()).toThrowError(/destructure.+?table/)
    expect(() => makeClient({ tableName: '' })).toThrowError(/table.+?required/)
    expect(() => makeClient({ tableName: 'a', clientConfig: {} })).toThrowError(/provide.+?region/)
    // @ts-expect-error table name missing
    expect(() => makeClient({ clientConfig: { region: 'us-west-2' } })).toThrowError(
      /tableName.+?required/
    )
  })

  it('returns valid client', () => {
    const client = makeClient({
      tableName: 'test-table',
      clientConfig: { region: 'us-west-2' },
    })
    expect(client.getTableName()).toBe('test-table')
  })
})
