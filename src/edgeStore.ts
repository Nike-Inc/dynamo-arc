import {
  Store,
  StoreConfig,
  TableKey,
  DbItem,
  BatchChange,
  areKeysEqual,
  _idKey,
  _sortKey,
  _dynamo,
  _logger,
} from './store'
import { _idField, _sortField, _indexes, ArcIndexWithSort } from './dynamo'

const _secondaryIndex = Symbol('_secondaryIndex')

export class BaseEdgeStore<Edge> extends Store<Edge> {
  constructor(props: StoreConfig<Edge>) {
    if (!props.sortKey) throw new Error('"sortKey" is required')
    super(props)
  }

  /**
   * Add/remove edges so that the database matches the `edges` parameter
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  async syncEdges(dbEdges: Edge[], edges: Edge[]): Promise<[Edge[], Edge[]]> {
    // Collect changes
    const edgesToRemove = this.filterEdges(dbEdges, edges)
    const edgesToAdd = this.filterEdges(edges, dbEdges)

    // Build Changes
    const deleteBatch: BatchChange[] = edgesToRemove.map((edge) => ({
      DeleteRequest: { Key: this.getKey(edge) },
    }))

    const putBatch: BatchChange[] = edgesToAdd.map((edge) => ({
      PutRequest: { Item: this.toDb(edge) },
    }))

    const changes = deleteBatch.concat(putBatch)

    if (!changes.length) return [edgesToAdd, edgesToRemove]

    // Write Changes
    try {
      await this.batchWriteAll(changes)
    } catch (e) {
      this[_logger].error(`Edge Sync Error`, e, changes)
      throw e
    }

    return [edgesToAdd, edgesToRemove]
  }

  protected filterEdges(leftEdges: Edge[], rightEdges: Edge[]): Edge[] {
    return leftEdges.filter((edge) => !rightEdges.some((e) => this.areKeysEqual(e, edge)))
  }

  protected areKeysEqual(left: Edge, right: Edge): boolean {
    return areKeysEqual(this[_dynamo], this.getKey(left), this.getKey(right))
  }
}

export interface EdgeStoreConfig<Edge> extends StoreConfig<Edge> {
  /**
   * Index name of the GSI that maps edges to the secondary node (used by `toDb` to populate the GSI).
   *
   * The index must be defined on the ArcDynamoClient `indexes`.
   */
  secondaryIndex: string
}

export type EdgeStoreSubConfig<Edge> = Omit<StoreConfig<Edge>, 'type' | 'idKey' | 'sortKey'>

export class EdgeStore<Edge> extends BaseEdgeStore<Edge> {
  public readonly [_secondaryIndex]: ArcIndexWithSort

  constructor(props: EdgeStoreConfig<Edge>) {
    super(props)
    if (!this[_dynamo][_sortField]) {
      throw new Error('EdgeStore requires the dynamo client to have a sortField')
    }

    if (props.secondaryIndex && !this[_dynamo][_indexes]?.[props.secondaryIndex]) {
      throw new Error('"secondaryIndex" is missing from indexes in the provided dynamo client')
    }
    if (props.secondaryIndex && !this[_dynamo][_indexes]?.[props.secondaryIndex]?.sortField) {
      throw new Error('"secondaryIndex" is must have a sortField defined for use in an EdgeStore')
    }
    this[_secondaryIndex] = this[_dynamo][_indexes]?.[props.secondaryIndex] as ArcIndexWithSort
  }

  /**
   * Add/remove edges so that the database matches the relationships on the primary node
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  protected async syncEdgesByPrimary(
    primaryNodeId: string,
    edges: Edge[]
  ): Promise<[Edge[], Edge[]]> {
    const dbEdges = await this.getEdgesByPrimaryId(primaryNodeId)

    return this.syncEdges(dbEdges, edges)
  }

  /**
   * Add/remove edges so that the database matches the relationships on the secondary node
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  protected async syncEdgesBySecondary(
    secondaryNodeId: string,
    edges: Edge[]
  ): Promise<[Edge[], Edge[]]> {
    const dbEdges = await this.getEdgesBySecondaryId(secondaryNodeId)

    return this.syncEdges(dbEdges, edges)
  }

  protected async getEdgesByPrimaryId(primaryId: string): Promise<Edge[]> {
    return this.queryAll({
      ScanIndexForward: false,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(primaryId) },
    })
  }

  protected async getEdgesBySecondaryId(secondaryId: string): Promise<Edge[]> {
    const index = this[_secondaryIndex]

    return this.queryAll({
      ScanIndexForward: false,
      IndexName: index.name,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(secondaryId) },
    })
  }

  toDb(item: Edge): DbItem<Edge> {
    const gsiKey = this[_secondaryIndex].idField
    const gsiSort = this[_secondaryIndex].sortField

    return {
      ...super.toDb(item),
      [gsiKey]: this.typeKey(
        ((item as unknown) as TableKey)[(this[_sortKey] as unknown) as string]
      ),
      [gsiSort]: ((item as unknown) as TableKey)[(this[_idKey] as unknown) as string],
    }
  }
}
