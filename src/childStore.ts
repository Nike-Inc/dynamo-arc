import { StoreConfig, _dynamo } from './store'
import { _idField, _sortField, QueryAllInput } from './dynamo'
import { BaseEdgeStore } from './edgeStore'

export class ChildStore<Child> extends BaseEdgeStore<Child> {
  constructor(props: StoreConfig<Child>) {
    super(props)
    if (!this[_dynamo][_sortField]) {
      throw new Error('ChildStore requires the dynamo client to have a sortField')
    }
  }

  // TODO: this requires paging to encode/decode the keys as base64-json strings
  // so that the API can work with strings instead of objects
  // it should also pair with the breaking change of renaming all the get() -> queryAll() to getAll() -> queryAll()
  // and use get() -> query(), with paging
  // it would be nice to provide more query-building functions

  protected async getEdgesByParentId(
    parentId: string,
    lastKey?: string
  ): Promise<{ items: Child[]; lastEvaluatedKey?: string }> {
    const query = await this.query({
      ...this.parentQuery(parentId),
      ExclusiveStartKey: lastKey,
    })

    return {
      items: query.Items?.map(this.toDb),
      lastEvaluatedKey: query.LastEvaluatedKey,
    }
  }

  protected async getAllEdgesByParentId(parentId: string): Promise<Child[]> {
    return this.queryAll(this.parentQuery(parentId))
  }

  parentQuery(parentId: string): QueryAllInput {
    return {
      ScanIndexForward: false,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(parentId) },
    }
  }

  /**
   * Add/remove edges so that the database matches the relationships on the primary node
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  protected async syncEdgesByParentId(
    parentId: string,
    edges: Child[]
  ): Promise<[Child[], Child[]]> {
    const dbChildren = await this.getAllEdgesByParentId(parentId)

    return this.syncEdges(dbChildren, edges)
  }
}
