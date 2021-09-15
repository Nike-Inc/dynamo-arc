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
import { _idField, _sortField, _indexes, ArcDynamoClient } from './dynamo'

const _primaryEdgeKey = Symbol('_primaryEdgeKey')
const _primaryIdKey = Symbol('_primaryIdKey')
const _secondaryEdgeKey = Symbol('_secondaryEdgeKey')
const _secondaryIdKey = Symbol('_secondaryIdKey')
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
      this[_logger].error(`Sync Error`, e, changes)
      throw e
    }

    return [edgesToAdd, edgesToRemove]
  }

  protected filterEdges(leftEdges: Edge[], rightEdges: Edge[]): Edge[] {
    return leftEdges.filter((edge) => !rightEdges.some((e) => areKeysEqual(this[_dynamo], e, edge)))
  }
}

export interface EdgeStoreConfig<Edge, PrimaryNode, SecondaryNode> extends StoreConfig<Edge> {
  /** property on the primary node that contains the id key. */
  primaryIdKey: keyof PrimaryNode & string
  /** property on the primary node that contains an array of edges */
  primaryEdgeKey: keyof PrimaryNode & string

  /** property on the secondary node that contains an array of edges */
  secondaryEdgeKey: keyof SecondaryNode & string
  /** property on the secondary node that contains the id key. */
  secondaryIdKey: keyof SecondaryNode & string
  /**
   * Index name of the GSI that maps edges to the secondary node (used by `toDb` to populate the GSI).
   *
   * The index must be defined on the ArcDynamoClient `indexes`.
   */
  secondaryIndex: string
}

export class EdgeStore<Edge, PrimaryNode, SecondaryNode> extends BaseEdgeStore<Edge> {
  public readonly [_primaryEdgeKey]: string
  public readonly [_primaryIdKey]: string
  public readonly [_secondaryEdgeKey]?: string
  public readonly [_secondaryIdKey]?: string
  public readonly [_secondaryIndex]?: string

  constructor(props: EdgeStoreConfig<Edge, PrimaryNode, SecondaryNode>) {
    super(props)
    if (!this[_dynamo][_sortField]) {
      throw new Error('EdgeStore requires the dynamo client to have a sortField')
    }
    if (!props.primaryIdKey) throw new Error('"primaryIdKey" is required')
    if (!props.primaryEdgeKey) throw new Error('"primaryEdgeKey" is required')
    if (!props.secondaryIdKey) throw new Error('"secondaryIdKey" is required')
    if (!props.secondaryEdgeKey) throw new Error('"secondaryEdgeKey" is required')

    this[_primaryIdKey] = props.primaryIdKey
    this[_primaryEdgeKey] = props.primaryEdgeKey
    this[_secondaryIdKey] = props.secondaryIdKey
    this[_secondaryEdgeKey] = props.secondaryEdgeKey

    if (props.secondaryIndex && !this[_dynamo][_indexes]?.[props.secondaryIndex]) {
      throw new Error('"secondaryIndex" is missing from indexes in the provided dynamo client')
    }
    if (props.secondaryIndex && !this[_dynamo][_indexes]?.[props.secondaryIndex]?.sortField) {
      throw new Error('"secondaryIndex" is must have a sortField defined for use in an EdgeStore')
    }
    this[_secondaryIndex] = props.secondaryIndex
  }

  /**
   * Add/remove edges so that the database matches the relationships on the primary node
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  async syncEdgesByPrimary(node: PrimaryNode): Promise<[Edge[], Edge[]]> {
    const edges = this.selectPrimaryEdges(node)
    const dbEdges = await this.getPrimaryEdges(((node as unknown) as TableKey)[this[_primaryIdKey]])

    return this.syncEdges(dbEdges, edges)
  }

  /**
   * Add/remove edges so that the database matches the relationships on the secondary node
   * @return {*} {Promise<[Edge[], Edge[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  async syncEdgesBySecondary(node: SecondaryNode): Promise<[Edge[], Edge[]]> {
    const key = this[_secondaryIdKey]
    if (!key) throw new Error('Unable to get edges, no "secondaryIdKey" defined')

    const edges = this.selectSecondaryEdges(node)
    const dbEdges = await this.getSecondaryEdges(((node as unknown) as TableKey)[key])

    return this.syncEdges(dbEdges, edges)
  }

  /** Extract the edges from the primary node using the `primaryEdgeKey` defined in the constructor. Can be overridden */
  protected selectPrimaryEdges(node: PrimaryNode): Edge[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((node as any)?.[_primaryEdgeKey] as Edge[]) ?? []
  }

  /** Extract the edges from the primary node using the `secondaryEdgeKey` defined in the constructor. Can be overridden */
  protected selectSecondaryEdges(node: SecondaryNode): Edge[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((node as any)?.[_secondaryEdgeKey] as Edge[]) ?? []
  }

  async getPrimaryEdges(primaryId: string): Promise<Edge[]> {
    return this.queryAll({
      ScanIndexForward: false,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(primaryId) },
    })
  }

  async getSecondaryEdges(secondaryId: string): Promise<Edge[]> {
    const index = this[_secondaryIndex]

    if (!index) throw new Error('Unable to get edges, no "secondaryIndex" defined')

    return this.queryAll({
      ScanIndexForward: false,
      IndexName: index,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(secondaryId) },
    })
  }

  toDb(item: Edge): DbItem<Edge> {
    const secondaryIndex = this[_secondaryIndex]
    if (!secondaryIndex) return super.toDb(item)
    const gsiKey = this[_dynamo][_indexes][secondaryIndex].idField
    // This assertion is verified in the constructor
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const gsiSort = this[_dynamo][_indexes][secondaryIndex].sortField!

    return {
      ...super.toDb(item),
      [gsiKey]: this.typeKey(
        ((item as unknown) as TableKey)[(this[_sortKey] as unknown) as string]
      ),
      [gsiSort]: ((item as unknown) as TableKey)[(this[_idKey] as unknown) as string],
    }
  }
}

interface Parent {
  id: string
  children: Child[]
}

interface Child {
  id: string
  parentId: string
}

const parentChild = new BaseEdgeStore<Child, Parent, never>({
  primaryEdgeKey: 'children',
  primaryIdKey: 'id',
  idKey: 'id',
  type: '_PARENTCHILD_',
  dynamo: ({} as unknown) as ArcDynamoClient,
})

interface User {
  id: string
  children: Child[]
}

interface Child {
  id: string
  parentId: string
}

const associative = new BaseEdgeStore<Child, Parent, never>({
  dynamo: ({} as unknown) as ArcDynamoClient,
  idKey: 'id',
  type: '_PARENTCHILD_',
  primaryEdgeKey: 'children',
  primaryIdKey: 'id',
})
