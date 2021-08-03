import { Logger } from './logger';
import { _dynamo, _logger, ArcClient, TableKey } from './dynamo';
export declare const defaultCacheTtl = 300000;
export interface CacheMetrics {
    cacheHit: (key: string) => void;
    cacheMiss: (key: string, data: {
        isItemExpired: boolean;
    }) => void;
}
export interface CacheConfig {
    dynamo: ArcClient;
    logger?: unknown;
    metrics?: CacheMetrics;
}
export interface CacheOptions {
    /** the datetime value that the object should expire at (e.g. `Date.now() + 1000` = 1 second in the future) */
    ttl?: number;
    /**  will be used to set the ttl with `Date.now() + clearAfter`, useful in setting a static options object. Mutually exclusive with `ttl` */
    clearAfter?: number;
    /** number of milliseconds after which the item is "stale" and will be refresh with the `cacheMissFn` */
    staleAfter?: number;
    /** if the `cacheMissFn` throws and `allowStale` is truthy then the stale item will be returned */
    allowStale?: boolean;
    /** if truthy cached items will never expire */
    permanent?: boolean;
}
export interface BatchGetKeys extends CacheOptions {
    id: string;
}
export declare class Cache {
    [_dynamo]: ArcClient;
    [_logger]: Logger;
    private metrics;
    constructor({ dynamo, logger, metrics }: CacheConfig);
    asKey(id: string): TableKey;
    /**
     * Get a value from the cache, or get it from the cacheMissFn and store it in the cache if it is missing or expired
     */
    get<T>(key: string, cacheMissFn: () => Promise<T>, options?: CacheOptions): Promise<T>;
    /** Set a value in the cache */
    set<T>(key: string, value: T, options?: CacheOptions): Promise<T>;
    /** Remove a value from the cache */
    clear(key: string): Promise<void>;
    /**
     * This takes an array of objects with an ID and CacheOptions
     * It will return the first object from the cache whose ID matches one in the array
     * Or it will call the cacheMissFn and write the result to every ID in the array
     */
    batchGet<T>(
    /** will prioritize the first key.id that matches in the array */
    keys: BatchGetKeys[], cacheMissFn: () => Promise<T>): Promise<T>;
}
