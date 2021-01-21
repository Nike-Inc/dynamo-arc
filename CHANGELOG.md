# Change Log /  Release Notes
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
