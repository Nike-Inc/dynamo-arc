# @nike/dynamo-client

A dynamo data client designed for use with DyanmoDB Single Table applications.

## Quick Start

```javascript
const { makeClient, BaseStore, Cache } = require('@nike/dynamo-client')

// Setup the base client
const dynamo = makeClient({
  dynamoConfig: { region: 'us-west-2' },
  tableConfig: { tableName: 'my-datastore' }
})

// Define a type-store
class RecordStore extends BaseStore {
  constructor({ dynamo }) {
    super({ type: '_RECORDS_', idKey: 'recordId', dynamo })
  }
}
const recordStore = new RecordStore({ dynamo })
const record = await recordStore.get('1')

// Setup generic cache
const cache =  new Cache({ dynamo: context.dynamo })
const externalRecord = cache.get(
  'a',
  async () => externalService.get('a'),
  { ttl: 20000 }
)
```