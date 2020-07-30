'use strict'

const { makeClient, BaseStore } = require('./dynamo')
const { Cache } = require('./cache')

module.exports = {
  makeClient,
  BaseStore,
  Cache,
}
