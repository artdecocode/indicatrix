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
