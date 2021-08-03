import { BatchGetItemOutputNative, BatchWriteItemOutputNative, DynamoButterClient, DynamoDBClientConfig, ButterClientOptions, QueryInputNative, ScanInputNative, WriteRequestNative } from 'dynamo-butter';
import { Logger } from './logger';
declare const _tableName: unique symbol;
declare const _typeIndex: unique symbol;
declare const _idField: unique symbol;
declare const _sortField: unique symbol;
declare const _ttlField: unique symbol;
declare const _type: unique symbol;
declare const _dynamo: unique symbol;
declare const _logger: unique symbol;
declare const _idKey: unique symbol;
declare const _sortKey: unique symbol;
declare const _delimiter: unique symbol;
export { _type };
export { _dynamo };
export { _logger };
export { _idKey };
export { _sortKey };
export { _delimiter };
export { _tableName };
export { _typeIndex };
export { _idField };
export { _sortField };
export { _ttlField };
export interface ClientConfig {
    dynamoConfig: DynamoDBClientConfig;
    butterConfig: ButterClientOptions;
    tableConfig: {
        tableName: string;
        idField?: string;
        sortField?: string;
        typeIndex?: string;
        ttlField?: string;
        hasTtlField?: boolean;
        hasSortField?: boolean;
    };
}
export interface ArcClient extends DynamoButterClient {
    [_tableName]: string;
    [_tableName]: string;
    [_typeIndex]: string;
    [_idField]: string;
    [_sortField]?: string;
    [_ttlField]?: string;
    getTableName: () => string;
}
export declare function makeClient({ dynamoConfig, butterConfig, tableConfig: { tableName, idField, sortField, typeIndex, ttlField, hasTtlField, hasSortField, }, }: ClientConfig): ArcClient;
export interface BaseStoreConfig<T> {
    logger?: unknown;
    dynamo: ArcClient;
    type: string;
    idKey?: keyof T & string;
    sortKey?: (keyof T & string) | undefined;
    delimiter?: string;
}
export declare class BaseStore<T> {
    [_type]: string;
    [_dynamo]: ArcClient;
    [_logger]: Logger;
    [_idKey]: keyof T & string;
    [_sortKey]?: (keyof T & string) | undefined;
    [_delimiter]: string;
    constructor({ logger, dynamo, type, sortKey, idKey, delimiter }: BaseStoreConfig<T>);
    /** Get the name of the table configured on the dynamo client */
    getTableName(): string;
    /**
     * Join id segments together with the configured delimiter
     * @param {string[]} idParts N-arity id segments
     */
    join(...idParts: string[]): string;
    /**
     * Create the ID field of this type by joining it to the store's configured TYPE
     * @param {string[]} ids N-ary id segments to convert into an ID key
     */
    typeKey(...id: string[]): string;
    /** Creates the Key object used by dynamo. Includes a sort key if configured on this store */
    asKey(id: string, sortKey?: string): TableKey;
    /** Returns the Key object used by dynamo by extracting it from a the JS item object. Useful for building batch lists */
    getKey(item: T): TableKey;
    /** Convert the DynamoDB record back into the originally stored JS object */
    fromDb(item?: DbItem): T | null;
    /** Convert a plain JS object into a DynamoDB record */
    toDb(item: T): DbItem;
    /** Get a keyed item from Dynamo */
    get(id: string, sortKey?: string): Promise<T | null>;
    /** Create or Update the item in Dynamo */
    put(item: T): Promise<T>;
    /** Put all items */
    putAll(items: T[]): Promise<void>;
    /** Delete the item from Dynamo matching the provided key */
    delete(id: string, sortKey?: string): Promise<void>;
    /** Delete all items */
    deleteAll(items: T[]): Promise<void>;
    /** Execute a query against the configured Dynamo table */
    query(params: QueryInput): Promise<T[]>;
    /**
     * Execute a query against the configured Dynamo table with automatic paging, mapped through fromDb()
     * @param {*} params DynamoDB.DocumentClient query, minus TableName
     */
    queryAll(params: QueryInput): Promise<T[]>;
    /**
     * Execute a scan against the configured Dynamo table
     * @param {*} params DynamoDB.DocumentClient scan, minus TableName
     * @return {*} DynamoDB.DocumentClient scan response
     */
    scan(params: ScanInput): Promise<T[]>;
    /**
     * Execute a scan against the configured Dynamo table with automatic paging, mapped through fromDb()
     * @param {*} params DynamoDB.DocumentClient scan, minus TableName
     * @return {*[]} Item Record Array
     */
    scanAll(params: ScanInput): Promise<T[]>;
    /**
     * Execute a batchGet against the configured Dynamo table
     * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
     * @return {*} DynamoDB.DocumentClient BatchGet response
     */
    batchGet(keys: TableKey[]): Promise<BatchGetItemOutputNative>;
    /**
     * Execute a batchGet against the configured Dynamo table with automatic paging, mapped through fromDb()
     * @param {*[]} keys Keys to pass to the BatchGet.RequestItems params. Must by type-cast with BaseStore.asKey()
     * @return {*[]} Item Record Array
     */
    batchGetAll(keys: TableKey[]): Promise<T[]>;
    /**
     * Execute a batchWrite against the configured Dynamo table
     * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
     * @return {*} DynamoDB.DocumentClient BatchWrite response
     */
    batchWrite(changes: WriteRequestNative[]): Promise<BatchWriteItemOutputNative>;
    /**
     * Execute a batchWrite against the configured Dynamo table with automatic paging, mapped through fromDb()
     * @param {*[]} changes Changes to pass to the BatchWrite.RequestItems params. Must by type-cast with BaseStore.asKey() for DeleteRequest or BaseStore.toDb() for PutRequest
     * @return {*} DynamoDB.DocumentClient BatchWrite response
     */
    batchWriteAll(changes: WriteRequestNative[]): Promise<void>;
    /**
     * Execute an automatically paged query against the typeIndex for the type configured on this store
     * @return {*[]} Item Record Array
     */
    getAll(): Promise<T[]>;
    /**
     * @callback pageFn
     * @param {*[]} pageItems Array of Item Records for the current page
     * @return {Promise.<*>}
     */
    /**
     * Execute an automatically paged query against the typeIndex for the type configured on this store
     * @param {pageFn} pageFn Paging function that receives each page. If async it will be awaited before the next page is fetched
     * @return {*[]} Item Record Array
     */
    forEachPage(pageFn: (items: T[]) => Promise<void>, pageSize?: number): Promise<void>;
}
export declare function asKey(dynamo: ArcClient, id: string, sortKey?: string): {
    [key: string]: string;
};
export interface TableKey {
    [key: string]: string;
}
export interface DbItem {
    data?: unknown;
    createdOn?: Date | number;
}
export { BatchGetItemOutputNative };
export { BatchWriteItemOutputNative };
export { WriteRequestNative };
export declare type QueryInput = Omit<QueryInputNative, 'TableName'>;
export declare type ScanInput = Omit<ScanInputNative, 'TableName'>;
