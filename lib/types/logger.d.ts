export interface Logger {
    info: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    debug: (...args: unknown[]) => void;
    minimumLogLevel?: string;
}
export declare function wrapper(logger?: unknown): Logger;
