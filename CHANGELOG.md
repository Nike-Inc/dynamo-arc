# Change Log /  Release Notes
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.1.0] - 2021-10-18
## Added
- `store.type`

## [2.0.0] - 2021-10-15
## Changed
- **BREAKING CHANGE** Typescript re-write using AWS SDK v3
- **BREAKING CHANGE** `BaseStore` renamed to `Store`
## Added
- `clientSymbols` and `storeSymbols` properties are now also available as top-level exports to support Typescript's `unique symbol` requirements. See [these](https://github.com/microsoft/TypeScript/issues/4283) two [issues](https://github.com/microsoft/TypeScript/issues/35562)
- `putAll`
- `deleteAll`
- `queryByPage`
- `EdgeStore` class
## Removed
- **BREAKING CHANGE** removed default value for `idKey` on `Store` constructor
## Deprecated
-  `forEachPage`

## [1.7.0] - 2021-08-11
## Added
- `queryByPage` for customized `forEachPage` queries
- `storeSymbols.pageBreak` Symbol to allow `forEachPage` and `queryByPage` to be halted early

## [1.6.0] - 2021-08-03
## Added
- `BaseStore.update()`

## [1.5.1] - 2021-01-21
## Fixed
- `BaseStore.getKey()` not adding `typeKey` to the ID field

## [1.5.0] - 2021-01-21
## Added
- `BaseStore.getKey()` to return key object from JS item

## [1.4.0] - 2021-01-21
## Added
- `Cache.clear()`
- Cache option for `clearAfter` that calculates `ttl` from current datetime.


## [1.3.2] - 2020-10-29
## Fixed
- handle empty array for `batchWrite`, `batchGet`, `batchWriteAll` and `batchGetAll`

## [1.3.1] - 2020-09-09
## Added
- fixed missing exports for `clientSymbols` and `storeSymbols`

## [1.3.0] - 2020-09-09
## Added
- add jsdoc, query, scan, and batch methods

## [1.2.0] - 2020-09-09
## Added
- `BaseStore.join` for composite keys

## [1.1.0] - 2020-09-09
## Added
- `butterConfig` option

## [1.0.0] - 2020-09-02
## Added
- Initial OSS Release
