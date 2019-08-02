const __indicatrix = require('./indicatrix')

/**
 * Will print the loading text and refresh the CLI line to show the ellipsis while the promise is loading.
 * @param {string} text The text to display in the CLI.
 * @param {!Promise<T>|function(...*): !Promise<T>} promise The promise or an async function that returns the promise.
 * @param {!_indicatrix.Options} [options] The optional options for the indicator, such as the refresh interval.
 * @param {number} [options.interval=250] The interval with which to update the screen. Default `250`.
 * @param {!(NodeJS.WriteStream|stream.Writable)} [options.writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 * @returns {!Promise<T>}
 * @template T
 */
function indicatrix(text, promise, options) {
  return __indicatrix(text, promise, options)
}

module.exports = indicatrix

/* typal types/index.xml closure no Suppress */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_indicatrix.Options} Options The optional options for the indicator, such as the refresh interval.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _indicatrix.Options The optional options for the indicator, such as the refresh interval.
 * @prop {number} [interval=250] The interval with which to update the screen. Default `250`.
 * @prop {!(NodeJS.WriteStream|stream.Writable)} [writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('stream').Writable} stream.Writable
 */
