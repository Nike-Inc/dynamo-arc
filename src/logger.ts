import assert from 'assert'

const logLevels = ['debug', 'info', 'warn', 'error']

export interface Logger {
  info: (...args: unknown[]) => void
  error: (...args: unknown[]) => void
  warn: (...args: unknown[]) => void
  debug: (...args: unknown[]) => void
  minimumLogLevel?: string
}

export function wrapper(logger: unknown = {}): Logger {
  validateLogLevel(logger)

  return {
    error: makeLogWrapper(logger, 'error'),
    warn: makeLogWrapper(logger, 'warn'),
    info: makeLogWrapper(logger, 'info'),
    debug: makeLogWrapper(logger, 'debug'),
  }
}

function makeLogWrapper(logger: unknown, prop: keyof Omit<Logger, 'minimumLogLevel'>) {
  return (...args: unknown[]) => {
    if (shouldSkipLog(logger, prop)) return
    const self = logger as Logger
    return self[prop] && typeof self[prop] === 'function'
      ? self[prop](...args)
      : (console[prop] || console.log)(...args) // eslint-disable-line no-console
  }
}

function shouldSkipLog(logger: unknown, prop: keyof Omit<Logger, 'minimumLogLevel'>) {
  validateLogLevel(logger)
  const self = logger as Logger
  return (
    self.minimumLogLevel &&
    logLevels.indexOf(self.minimumLogLevel as string) > logLevels.indexOf(prop)
  )
}

function validateLogLevel(logger: unknown) {
  const self = logger as Logger
  if (self.minimumLogLevel) {
    assert(
      logLevels.indexOf(self.minimumLogLevel as string) !== -1,
      `"minimumLogLevel" must be one of: ${logLevels.join(', ')} or falsy`
    )
  }
}
