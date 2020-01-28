const $indicatrix = require('./indicatrix')

/**
 * Will print the loading text and refresh the CLI line to show the ellipsis while the promise is loading.
 * @param {string} text The text to display in the CLI.
 * @param {(!Promise<T>|function(...*): !Promise<T>)} promise The promise or an async function that returns the promise.
 * @param {!_indicatrix.Options} [options] The optional options for the indicator, such as the refresh interval.
 * @param {number} [options.interval=250] The interval with which to update the screen. Default `250`.
 * @param {stream.Writable} [options.writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 * @return {Promise<T>}
 * @template T
 */
function indicatrix(text, promise, options) {
  return $indicatrix(text, promise, options)
}

module.exports = indicatrix

/* typal types/index.xml namespace */
/**
 * @typedef {import('stream').Writable} stream.Writable
 * @typedef {_indicatrix.Options} Options `＠record` The optional options for the indicator, such as the refresh interval.
 * @typedef {Object} _indicatrix.Options `＠record` The optional options for the indicator, such as the refresh interval.
 * @prop {number} [interval=250] The interval with which to update the screen. Default `250`.
 * @prop {stream.Writable} [writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 */
