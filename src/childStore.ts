import { StoreConfig, TableKey, _dynamo } from './store'
import { _idField, _sortField } from './dynamo'
import { BaseEdgeStore } from './edgeStore'

const _childKey = Symbol('_childKey')
const _parentIdKey = Symbol('_parentIdKey')

export interface ChildStoreConfig<Child, Parent> extends StoreConfig<Child> {
  /** property on the primary node that contains the id key. */
  parentIdKey: keyof Parent & string
  /** property on the primary node that contains an array of edges */
  childKey: keyof Parent & string
}

export class ChildStore<Child, Parent> extends BaseEdgeStore<Child> {
  public readonly [_childKey]: string
  public readonly [_parentIdKey]: string

  constructor(props: ChildStoreConfig<Child, Parent>) {
    super(props)
    if (!this[_dynamo][_sortField]) {
      throw new Error('EdgeStore requires the dynamo client to have a sortField')
    }
    if (!props.childKey) throw new Error('"childKey" is required')
    if (!props.parentIdKey) throw new Error('"parentIdKey" is required')
    this[_childKey] = props.childKey
    this[_parentIdKey] = props.parentIdKey
  }

  /**
   * Add/remove children to match
   * @return {*} {Promise<[Child[], Child[]]>} Returns an array of [edgesAdded, edgesRemoved]
   */
  async syncEdgesByParent(parent: Parent): Promise<[Child[], Child[]]>
  async syncEdgesByParent(parentId: string, children: Child[]): Promise<[Child[], Child[]]>
  async syncEdgesByParent(
    parentOrParentId: Parent | string,
    children?: Child[]
  ): Promise<[Child[], Child[]]> {
    if (typeof parentOrParentId === 'string' && !children) throw new Error('"children" is required')

    const edges =
      // this is verified in the guard above
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      typeof parentOrParentId === 'string' ? children! : this.selectChildren(parentOrParentId)
    const dbEdges = await this.getByParentId(
      typeof parentOrParentId === 'string'
        ? parentOrParentId
        : ((parentOrParentId as unknown) as TableKey)[this[_parentIdKey]]
    )

    return this.syncEdges(dbEdges, edges)
  }

  /** Extract the children from the primary parent using the `_childKey` defined in the constructor. Can be overridden */
  protected selectChildren(parent: Parent): Child[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((parent as any)?.[_childKey] as Child[]) ?? []
  }

  async getByParentId(parentId: string): Promise<Child[]> {
    return this.queryAll({
      ScanIndexForward: false,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(parentId) },
    })
  }
}
