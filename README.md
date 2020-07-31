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
record.name = 'primary'
record.age = 300
record.scopes = [{ name: 'top', isActive: true}, { name: 'left', isActive: false }]
await recordStore.put(record)

// Setup generic cache
const cache =  new Cache({ dynamo: context.dynamo })
const externalRecord = cache.get(
  'a',
  async () => externalService.get('a'),
  { ttl: 20000 }
)
```

## The Basics

**Dynamo Arc** provides a simple API for interacting with a DynamoDB table that stores multiple schemas, which we call the **Single Table Pattern**. An incredible presentation of this method is given in this [AWS RE:invent talk](https://www.youtube.com/watch?v=jzeKPKpucS0). If you are not familiar with how to use a single table to store multiple data schemas it is strongly recommended that you watch the video, it will greatly increase the chances that you use this library correctly.

To quickly summarize: when using this library it is assumed your entire application uses a single DynamoDB table with generic partition keys, with optional range keys, that use a composite form to identify the record. For example `_PROJECT_:abcd` would identify a record of the **project** type whose ID was `abcd` and `_USER_:3243` would identify a record of the **user** type whose ID was `3243`. The actual data for the object is stored in a generic key, in this case `data`, which is a **DynamoDB Map**. This allows any number of types to occupy the same table, using a generic table-level schema, which comes with a ridiculous list of benefits at the minor cost of complexity that it takes to understand the composite keys.

This library provides a simple, async-friendly API for interacting with such a table. Interactions at the store level will be with plain JS object; all the complexity of composite key handling are abstracted.

## Concepts

**The dynamo client**: using this library requires constructing a special DynamoDB client using the exported **makeClient** function, which is provided to the various **stores** that are defined for each record/schema type. The examples throughout this documentation refer to this object as the *dynamo client*, while the code uses the variable `dynamo`.

**stores**: each record type will have a dedicated store used to handle the composite key logic necessary for packing and unpacking. These are defined by extending the exported `BaseStore` class and provided a `type`, along with optional field-mapping for `idKey` and `sortKey` properties to extract from the record.

**cache**: the exported `Cache` class is designed to be used once-per-app to construct a generic **ttl cache**. Its basic use is shown above in the **Quick Start** section, with a unique *key*, a *cache-miss function* that fetches the item if it is missing or expired in the cache, and optional *ttl config*. While it might be surprising to overload your primary datastore as a cache, when properly re-using connections DynamoDB can achieve single-digit millisecond response (even in Node) making it a fast, easy to use caching layer.

## Configuration

The configuration for all exported functions/classes can be found below.

### Dynamo Client

```typescript
function makeClient({
  dynamoConfig: DynamoButterConfig,
  tableConfig: {
    tableName: string,
    idField = 'id', // partition key of the table
    sortField = 'sort_key', // sort key of the table
    typeIndex = 'type-index', // index used for the TYPE value
    ttlField = 'ttl', // ttl field of the table (necessary for the Cache)
    hasTtlField = true,
    hasSortField = true
  }
})
```

The configuration for the *dynamo client's* `dynamoConfig` is passed to [Dynamo Butter](https://github.com/Nike-Inc/dynamo-butter) using the [Configuration-Passthrough Mode](https://github.com/Nike-Inc/dynamo-butter#configuration-passthrough-mode). Use the same values you would use for the *DynamoDB DocumentClient*.

The only required property for the `tableConfig` is the `tableName`, which is the full name of the Dynamo table. The other fields are optional with default values.

## BaseStore

```typescript
declare class BaseStore {
  constructor(
    dynamo: DynamoClient,
    logger: Logger, // see Logging section below
    type: string,
    idKey = 'id',
    sortKey?: string,
    delimiter = ':'
  )
}
```

The only required properties for the `BaseStore` are the `dynamo` client, which must be the result of the `makeClient` function, and the `type`, which is used to create the composite key for the record.

The simplest child class

```javascript
class RecordStore extends BaseStore {
  constructor({ dynamo }) {
    super({ type: '_RECORDS_', dynamo })
  }
```

A fully configured child class

```javascript
class RecordStore extends BaseStore {
  constructor({ dynamo }) {
    super({
      dynamo,
      type: '_ORDER_ITEM_',
      idKey: 'orderId',
      sortKey: 'itemId',
      delimiter: '::',
      logger: console
    })
  }
```

## Cache

Coming Soon