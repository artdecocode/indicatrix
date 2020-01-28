/**
 * @fileoverview
 * @externs
 */
/* typal types/index.xml externs */
/** @const */
var _indicatrix = {}
/**
 * The optional options for the indicator, such as the refresh interval.
 * @record
 */
_indicatrix.Options
/**
 * The interval with which to update the screen. Default `250`.
 * @type {number|undefined}
 */
_indicatrix.Options.prototype.interval
/**
 * The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 * @type {(!(NodeJS.WriteStream|stream.Writable))|undefined}
 */
_indicatrix.Options.prototype.writable

/**
 * @type {string}
 */
process.env.INDICATRIX_PLACEHOLDER

// manual function because of template
/**
 * @param {string} text The text to display in the CLI.
 * @param {(!Promise<T>|function(...*): !Promise<T>)} promise The promise or an async function that returns the promise.
 * @param {!_indicatrix.Options} [options] The optional options for the indicator, such as the refresh interval.
 * @template T
 */
const $indicatrix = (text, promise, options) => {}

/**
 * @typedef {typeof $indicatrix}
 */
_indicatrix.indicatrix