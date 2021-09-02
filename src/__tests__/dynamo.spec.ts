/* eslint-disable @typescript-eslint/no-var-requires */
import { describe, it, expect } from '@jest/globals'

import { makeClient } from '../dynamo'

describe('makeClient', () => {
  it('requires valid config', () => {
    // @ts-expect-error missing parameters
    expect(() => makeClient()).toThrowError(/destructure.+?dynamoConfig/)
    expect(() => makeClient({ tableName: '' })).toThrowError(/dynamoConfig.+?required/)
    expect(() => makeClient({ tableName: '', clientConfig: {} })).toThrowError(/region.+?required/)
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
