const assert = require('assert')

const logLevels = ['debug', 'info', 'warn', 'error']

module.exports = function (loggerArg) {
  const logger = loggerArg || {}
  validateLogLevel(logger)

  return {
    error: makeLogWrapper(logger, 'error'),
    warn: makeLogWrapper(logger, 'warn'),
    info: makeLogWrapper(logger, 'info'),
    debug: makeLogWrapper(logger, 'debug'),
  }
}

function makeLogWrapper(logger, prop) {
  return (...args) => {
    if (shouldSkipLog(logger, prop)) return
    return logger[prop] && typeof logger[prop] === 'function'
      ? logger[prop](...args)
      : (console[prop] || console.log)(...args) // eslint-disable-line no-console
  }
}

function shouldSkipLog(logger, prop) {
  validateLogLevel(logger)
  return (
    logger.minimumLogLevel && logLevels.indexOf(logger.minimumLogLevel) > logLevels.indexOf(prop)
  )
}

function validateLogLevel(logger) {
  if (logger.minimumLogLevel) {
    assert(
      logLevels.indexOf(logger.minimumLogLevel) !== -1,
      `"minimumLogLevel" must be one of: ${logLevels.join(', ')} or falsy`
    )
  }
}
