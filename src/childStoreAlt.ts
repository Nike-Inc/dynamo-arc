import { StoreConfig, TableKey, _dynamo } from './store'
import { _idField, _sortField } from './dynamo'
import { BaseEdgeStore } from './edgeStore'

const _parentChildKey = Symbol('_parentChildKey')
const _parentIdKey = Symbol('_parentIdKey')
const _idKeyForChildRecord = Symbol('_idKeyForChildRecord')

// This type allows us to strongly type a record with an un-conflictable property
// that can store the parent ID, so that it can be serialized by toDb()
type ChildRecord<Child> = Child & { [_idKeyForChildRecord]: string }

export interface ChildStoreConfig<Parent, Child>
  extends Omit<StoreConfig<Child>, 'idKey' | 'sortKey'> {
  /** property on the primary node that contains the id key. */
  parentIdKey: keyof Parent & string
  /** property on the primary node that contains an array of edges */
  parentChildKey: keyof Parent & string
  /** property on the child node that contains its id key. Used as the record's sortKey */
  childIdKey: keyof Child & string
}

export class ChildStore<Parent, Child> extends BaseEdgeStore<ChildRecord<Child>> {
  public readonly [_parentIdKey]: string
  public readonly [_parentChildKey]: string

  constructor(props: ChildStoreConfig<Parent, Child>) {
    super({ ...props, idKey: _idKeyForChildRecord, sortKey: props.childIdKey })
    if (!this[_dynamo][_sortField]) {
      throw new Error('ChildStore requires the dynamo client to have a sortField')
    }
    if (!props.parentChildKey) throw new Error('"parentChildKey" is required')
    if (!props.parentIdKey) throw new Error('"parentIdKey" is required')
    this[_parentChildKey] = props.parentChildKey
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

    const parentId =
      typeof parentOrParentId === 'string'
        ? parentOrParentId
        : ((parentOrParentId as unknown) as TableKey)[this[_parentIdKey]]

    const edges =
      // this is verified in the guard above
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      typeof parentOrParentId === 'string' ? children! : this.selectChildren(parentOrParentId)
    const dbEdges = await this.getByParentId(parentId)

    // Mapping with the parentId allows syncEdges to create the batchWrite with the correct idKey
    return this.syncEdges(dbEdges.map(withParentId(parentId)), edges.map(withParentId(parentId)))
  }

  /** Extract the children from the primary parent using the `_parentChildKey` defined in the constructor. Can be overridden */
  protected selectChildren(parent: Parent): Child[] {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return ((parent as any)?.[_parentChildKey] as Child[]) ?? []
  }

  async getByParentId(parentId: string): Promise<ChildRecord<Child>[]> {
    return this.queryAll({
      ScanIndexForward: false,
      KeyConditionExpression: '#id = :id',
      ExpressionAttributeNames: { '#id': this[_dynamo][_idField] },
      ExpressionAttributeValues: { ':id': this.typeKey(parentId) },
    })
  }
}

function withParentId<Child>(parentId: string): (child: Child) => ChildRecord<Child> {
  return (item) => ({ ...item, [_idKeyForChildRecord]: parentId })
}
