# Dynamo Arc

A dynamo data client designed for use with DyanmoDB Single Table applications.

## Quick Start

```javascript
const { makeClient, Store, Cache } = require('dynamo-arc')

// Setup the base client
const dynamo = makeClient({
  tableName: 'my-datastore',
  clientConfig: { region: 'us-west-2' }
})

// Define a type-store
class RecordStore extends Store {
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

**stores**: each record type will have a dedicated store used to handle the composite key logic necessary for packing and unpacking. These are defined by extending the exported `Store` class and provided a `type`, along with optional field-mapping for `idKey` and `sortKey` properties to extract from the record.

**cache**: the exported `Cache` class is designed to be used once-per-app to construct a generic **ttl cache**. Its basic use is shown above in the **Quick Start** section, with a unique *key*, a *cache-miss function* that fetches the item if it is missing or expired in the cache, and optional *ttl config*. While it might be surprising to overload your primary datastore as a cache, when properly re-using connections DynamoDB can achieve single-digit millisecond response (even in Node) making it a fast, easy to use caching layer.

## Configuration

The configuration for all exported functions/classes can be found below.

### Dynamo Client

```typescript
function makeClient({
  tableName,
  idField = 'id', // partition key of the table
  sortField = 'sort_key', // sort key of the table
  typeIndex = 'type-index', // index used for the TYPE value
  ttlField = 'ttl', // ttl field of the table (necessary for the Cache)
  hasTtlField = true,
  hasSortField = true,
  clientConfig,
  translateConfig,
  dynamoConfig
}: {
  tableName: string
  idField?: string
  sortField?: string
  typeIndex?: string
  ttlField?: string
  hasTtlField?: boolean
  hasSortField?: boolean
  clientConfig?: DynamoDBClientConfig
  translateConfig?: TranslateConfig
}, client?: DynamoDBClient // must provide either client param or clientConfig)
): ArcDynamoClient {}
```

`makeClient` returns a modified dynamo client, typed as `ArcDynamoClient`, that tracks additional data about the table such as its name, various fields, and features. It can either be passed an existing `DynamoDBClient` as via its second parameter, or it can create one using the `clientConfig` option in the first parameter. These options are mutually exclusive, and one of them is required.

The only required property for the first parameter is the `tableName`, which is the full name of the Dynamo table. The other fields are optional with default values.

The `translateConfig` configures the DynamoDBDocument client's marshalling options, though Arc uses different default values. The library exports `ArcTranslateDefaults` and `AwsTranslateDefaults`, though a custom configuration can be supplied.

## Store

```typescript
declare class Store <T>{
  public readonly [_type]: string
  public readonly [_dynamo]: ArcDynamoClient
  public readonly [_logger]: Logger
  public readonly [_idKey]: keyof T & string
  public readonly [_sortKey]?: (keyof T & string) | undefined
  public readonly [_delimiter]: string

  constructor(
    dynamo: ArcClient,
    logger: Logger, // see Logging section below
    type: string,
    idKey = 'id',
    sortKey?: string,
    delimiter = ':'
  )
}
```

The only required properties for the `Store` are the `dynamo` client, which must be the result of the `makeClient` function, the `type`, which is used to create the composite key for the record, and the `idKey` which is used to extract the primary key from the type.

The simplest child class

```javascript
class RecordStore extends Store {
  constructor({ dynamo }) {
    super({ type: '_RECORDS_', idKey: 'id', dynamo })
  }
```

A fully configured child class

```javascript
class RecordStore extends Store {
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

## API

```typescript
interface TableKey {
    // The properties on a Store's Key are determined
    // by its configuration.
    // It will have an idKey, and optionally a sortKey
    [key: string]: string
}

// Raw Item from Dynamo
interface DynamoRecord {}

// Stand in for the normal DocumentClient params for the given function
// The TableName property is automatically filled in by Arc
interface DynamoParams {}

// Stand in for the normal DocumentClient result for the given function
interface DynamoResult {}

interface Store<T> {
  getTableName(): string
  
  /** Join id segments together with the configured delimiter */
  join(...idSegments: string[]): string
  
  /** Create the ID field of this type by joining it to the store's configured TYPE  */
  typeKey(...idSegments: string[]): string
  
  /** Creates the Key object used by dynamo. Includes a sort key if configured on this store */
  asKey(id:string, sortKey?: string): StoreKey
  
  /** Convert the DynamoDB record back into the originally stored JS object */
  fromDb(item: DynamoRecord): T

  /** Convert a plain JS object into a DynamoDB record */
  toDb(item: T): DynamoRecord

  /** Get a keyed item from Dynamo */
  async get(id:string, sortKey?:string): Promise<T>

  /** Delete the item from Dynamo matching the provided key */
  async delete(id:string, sortKey:string): Promise<void>

  /** Delete all items */
  async deleteAll(items: T[]): Promise<void>

  /** Create or Update the item in Dynamo */
  async put(item: T): Promise<T>

  /** Put all items */
  async putAll(items: T[]): Promise<void>

  /** Execute a query against the configured Dynamo table */
  async query(params: DynamoParams): Promise<DynamoResult>
  
  /** Execute a scan against the configured Dynamo table */
  async scan(params: DynamoParams): Promise<DynamoResult>

  /** Execute a batchGet against the configured Dynamo table */
  async batchGet(keys: StoreKey[]): Promise<DynamoResult>

  /** Execute a batchWrite against the configured Dynamo table */
  async batchWrite(changes: (StoreKey | T)): Promise<DynamoResult>

  /** Execute a query against the configured Dynamo table with automatic paging, mapped through fromDb() */
  async queryAll(params: DynamoParams): Promise<T[]>
  
  /** Execute a scan against the configured Dynamo table with automatic paging, mapped through fromDb() */
  async scanAll(params: DynamoParams): Promise<T[]>

  /** Execute a batchGet against the configured Dynamo table with automatic paging, mapped through fromDb() */
  async batchGetAll(keys: StoreKey[]): Promise<T[]>

  /** Execute a batchWrite against the configured Dynamo table with automatic paging */
  async batchWriteAll(changes: (StoreKey | T)): Promise<DynamoResult>

  /** Execute an automatically paged query by processing one page at a time */
  async queryByPage(
    params: QueryAllInput,
    /** Async function that receives an array of items from the current page. If it resolves `false` paging will stop  */
    pageFn: (page: T[]) => Promise<void | boolean>
  ): Promise<void>

  /** Execute an automatically paged query against the typeIndex for the type configured on this store */
  getAll(): Promise<T[]>
}
```

## Cache

The cache takes a `dynamo` object and returns a store that uses dynamo as a caching layer by handling various `ttl` values.


### Setup
```javascript 
const { Cache } = require('dynamo-arc')
return new Cache({ dynamo: dynamo })
const getter = () => cache.get(
  'some-id',
  () => someExpensiveOp(),
  { staleAfter: 10000 }
)
const freshValue = await getter()
const cachedValue = await getter()
```

### API

```typescript
interface CacheOptions {
    permanent?: boolean
    ttl?: number
    staleAfter?: number
}

interface CacheKey extends CacheOptions {
    id: string
}

interface Cache {
  get<T>(key: string, cacheMissFn: () => Promise<T>, options?: CacheOptions): Promise<T>
  set<T>(key: string, value: T, options?: CacheOptions): Promise<T>
  // This takes an array of object with an ID and CacheOptions
  // It will return the first object from the cache whose ID matches one in the array
  // Or it will call the cacheMissFn and write the result to every ID in the array
  batchGet<T>(keys: CacheKey[], cacheMissFn: () => Promise<T>): Promise<T>
}
```

## fromDb()/toDb()

Working with a single table means overloading the schema. Since every type is using well-known properties for `id` and `sort_key` and the various GSIs the rest of the data needs to go into a collision resistant property: `data`. When writing an object with `put` the object is sent to dynamo after casting through `toDb(item)`.

```javascript
toDb(item) {
  let id = item[this[_idKey]]
  let data = { ...item }

  const dbItem = {
    ...this.asKey(id, item[this[_sortKey]]),
    type: this[_type],
    // This is to make it easier to find in the dynamo console
    typeId: id,
    // datetime props
    createdOn: item.createdOn,
    updatedOn: Date.now(),
    //
    data, // <--- where the actual object is stored!!
    //
  }

  return dbItem
}
```

When reading with `get`, `queryAll`, `scanAll`, or `batchGetAll` the raw response from dynamo needs to have the `data` property unpacked. Extraction is much simpler, so this is the entire default `fromDb(item)` function.

```javascript
fromDb(item) {
  if (!item || !item.data) return null
  item = item.data
  return item
}
```

Both of these functions are defined on the `Store`, so they can be overriden as necessary. The most common use case for this is overriding `toDb` in order to add GSI indexing properties

```javascript
// Class Method on an "extends Store" class
toDb(item) {
  return {
    ...super.toDb(item),
    // custom owner index
    gsi1_key: this.typeKey(item.ownerId), 
    gsi1_sort: item.id
  }
}
```

> Note: because the `query`, `scan`, `batchWrite` and `batchGet` methods do not automatically page they return the raw dynamo response so that the caller can access the paging properties. This means their responses **are not run through `fromDb()` first!**

## Querying GSIs

Getting data out of a GSI is easy as long as the GSI key uses the `this.typeKey()` as seen above, which ensure the store's configured *type* is combined with the intended ID. Doing the same on the query filters the query so that only records of the correct type are read from the GSI, despite the Single Table's GSI containing records of many types

```javascript
// Class Method on an "extends Store" class
async getByOwnerId(ownerId) {
  return this.queryAll({
    IndexName: 'gsi1-index',
    ScanIndexForward: false,
    KeyConditionExpression: '#ownerId = :ownerId',
    ExpressionAttributeNames: { '#ownerId': 'gsi1_key' },
    ExpressionAttributeValues: { ':ownerId': this.typeKey(ownerId) }
  })
}
```
## Stream processing queries

the `store.queryByPage` function provides streaming access to the results of a query. Since only one page is brought into memory at a time this can allow queries to be processed that might otherwise cause the process to consume more memory than its host can provide.

```typescript
 /** Execute an automatically paged query by processing one page at a time */
  queryByPage(params: DynamoParams, pageFn: T[]) => any)
```

The `pageFn` is passed an array of `fromDb()` mapped rows and its result is awaited. The paging process can be halted early by returning the `storeSymbols.pageBreak` symbol from the `pageFn`.

**forEachPage** is an older, deprecated method that functions similar to `queryByPage`, but uses a pre-canned query that pages the entire `typeIndex` for the current store. This behavior (and more!) is possible with `queryByPage`.

## Modeling Relationships

In Graph Theory an [edge](https://en.wikipedia.org/wiki/Glossary_of_graph_theory#edge) is a relationship between two nodes. Since DynamoDB is a NoSQL store there are no native relationships, but they can be simulated by creating records that use the _primary_ and _sort_ keys on the table. These records are called _edges_. Arc has tools for managing _edges_ modelling either parent-child relationships (one-to-many) or associative relationships (many-to-many).

There are two classes for working with _edges_.

* `EdgeStore` - Used for managing edges in an associative relationship
* `BaseEdgeStore` - Used for managing edges in an associative relationship. This Class is intended to provide additional flexibility for cases when the safety checks or automatic edge-selection on the `EdgeStore` or `ChildStore` are too restrictive. When possible prefer the `EdgeStore` or `ChildStore`.

### How it works

Here is an example of a parent child relationship as it would appear in Dynamo

```javascript
const node = { id: '_USER_:4332' }
const edge = { id: '_USER_PREF_:4332', sort_key: 'volume', /* ... */}
```

Notice how in the edge-record the id is the same as the User ID. This allows a query to select all of the _user preference relationship_ by knowing only the User ID and the type (`_USER_PREF_`).

Here is an example of a two-way relationship

```javascript
const user = { id: '_USER_:4332' }
const team = { id: '_TEAM_:8867' }
const edge = {
  id: '_USER_TEAM_MEMBER_:4332',
  sort_key: '8867',
  gsi1_key: '_USER_TEAM_MEMBER_:8867',
  gsi1_sort: '4332' 
  /* ... */
}
```

Here, again, a relationship to one node is stored on the primary key. A secondary relationship is modeled on a GSI, using the same method. This allows a two-way, or "many-to-many", relationship to be modeled.

### Child Relationships

Modeling child relationships can be done using the standard store and a Global Secondary Index (GSI).

A common one-to-many relationship is a set of object with a single "owner".

```ts

import { Store, StoreSubConfig } from 'dynamo-arc'

class ProjectStore extends Store<Project> {
  constructor({ dynamo }: StoreSubConfig<Project>) {
    super({
      dynamo,
      type: '_PROJECT_',
      idKey: 'id',
      sortKey: 'ownerId',
    })
  }

  async getByOwnerId(ownerId) {
    return this.queryAll({
      IndexName: 'gsi1-index',
      ScanIndexForward: false,
      KeyConditionExpression: '#ownerId = :ownerId',
      ExpressionAttributeNames: { '#ownerId': 'gsi1_key' },
      ExpressionAttributeValues: { ':ownerId': this.typeKey(item.ownerId) }
    })
  }

  toDb(item) {
    return {
      ...super.toDb(item),
      // custom owner index used by getByOwnerId
      gsi1_key: this.typeKey(item.ownerId), 
      gsi1_sort: item.id
    }
  }
}

const projectStore = new ProjectStore({ dynamo })

const projectA = { id: 'a', ownerId: 'X' }
const projectB = { id: 'b', ownerId: 'X' }

await projectStore.put(projectA)
await projectStore.put(projectB)

const [a, b] = await projectStore.getByOwnerId('X')

```

The above example demonstrates everything needed for a parent-child (one-to-many) relationship between an owner and a project. Since DynamoDB can have up to 20 GSIs per total (previously 5) each type can have 20 unique parent-child relationships modeled.

### Associate Relationships with `EdgeStore`

The `EdgeStore` simplifies working with many-to-many relationships between two types. It requires the `dynamo` client to be configured with a `sortField`. It must also be provided a `secondaryIndex` in its constructor to use as a GSI for selecting secondary edges.

**Associate Relationship Configuration**

```typescript
import { EdgeStore, EdgeStoreSubConfig } from 'dyanamo-arc'

interface User {
  id: string
  teams: Team[]
}

interface Team {
  id: string
  members: User[]
}

interface UserTeam {
  userId: string
  teamId: string
  role: string
}

class UserTeamStore extends EdgeStore<UserTeam> {
  // The EdgeStoreSubConfig simplifies sub-class configs by omitting
  // properties that are expected to be hard-coded, such as the strings below
  // This allows new UserTeamStore() to safely provide only "dynamo"
  constructor({ dynamo }: EdgeStoreSubConfig<UserTeam>) {
    super({
      dynamo,
      type: '_EGDE_',
      idKey: 'userId',
      sortKey: 'teamId',
      secondaryIndex: 'gsi1-index',
    })
  }

  // The EdgeStore makes its type-generic methods "protected"
  // in order to force sub-classes to provide type-specific names
  // Users of the UserTeamStore shouldn't have to track which of "user" or "team"
  // is the "primary" or "secondary" nodes, they should be given clear names
  async getTeamsForUser(userId: string): Promise<UserTeam>[] {
    return this.getEdgesByPrimaryId(userId)
  }

  async getUsersOnTeam(teamId: string): Promise<UserTeam>[] {
    return this.getEdgesBySecondaryId(teamId)
  }
}

const userTeamStore = new UserTeamStore({ dynamo })

const teamsForUserX = await userTeamStore.getTeamsForUser('X')
const usersOnTeamA = await userTeamStore.getUsersOnTeam('a')

// add user X to team b
await userTeamStore.put({ userId: 'X', teamId: 'b', role: 'member' })

// remove user X from team b
await userTeamStore.delete('X', 'b')

// force team b to have the following users
await userTeamStore.syncEdgesBySecondary('b', [
  { userId: 'X', teamId: 'b', role: 'member' },
  { userId: 'Y', teamId: 'b', role: 'member' },
])
```

> The `EdgeStoreSubConfig` is a utility type that simplifies the config of `EdgeStore` sub-classes by removing the properties that sub-class constructor would hard-code for the `EdgeStore`

### BaseEdgeStore

The `BaseEdgeStore` extends the `Store` with a pair of methods that assist with creating a `batchWriteAll` call to add and remove records. It is used by the `EdgeStore` to implement the `syncEdgesBy[Primary|Secondary]` and `getEdgesBy[Primary|Secondary]Id` functions. If the `EdgeStore` has an implementation that does not work with your model you can implement your own Edge Store on top of the `BaseEdgeStore`.

The `BaseEdgeStore` implements the following

* `async syncEdges(dbEdges: Edge[], edges: Edge[]): Promise<[Edge[], Edge[]]>`: Filter the provided edges and execute a `batchWriteAll` against Dynamo.
* `protected filterEdges(leftEdges: Edge[], rightEdges: Edge[]): Edge[]`: Used to filter edges in the left that are missing from the right. The default implementation compares the keys defined for the store.

