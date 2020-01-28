const $indicatrix = require('./indicatrix')

/**
 * @methodType {_indicatrix.indicatrix}
 * @template T
 */
function indicatrix(text, promise, options) {
  return $indicatrix(text, promise, options)
}

module.exports = indicatrix

/* typal types/index.xml namespace */
