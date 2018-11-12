/**
 * Will print the loading text and refresh the CLI line to show the ellipsis while the promise is loading.
 * @param {string} text The text to display in the CLI.
 * @param {boolean} promise The promise or an async function that returns the promise.
 * @param {Options} options The optional options for the indicator, such as the refresh interval.
 * @param {number} [options.interval=250] The interval with which to update the screen. Default `250`.
 * @param {Writable} [options.writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 */
               async function indicatrix(text, promise, options = {}) {
  const { interval = 250, writable = process.stdout } = options
  const p = typeof promise == 'function' ? promise() : promise
  const write = writable.write.bind(writable)

  let i = 1
  const getText = () => `${text}${'.'.repeat(i)}`
  const clear = () => write(`\r${' '.repeat(text.length + 3)}\r`)
  let s = getText()
  write(s)
  const int = setInterval(() => {
    i = (i + 1) % 4
    s = getText()
    clear()
    write(s)
  }, interval)
  try {
    const res = await p
    return res
  } finally {
    clearInterval(int)
    clear()
  }
}

/* documentary types/index.xml */
/**
 * @typedef {import('stream').Writable} Writable
 *
 * @typedef {Object} Options The optional options for the indicator, such as the refresh interval.
 * @prop {number} [interval=250] The interval with which to update the screen. Default `250`.
 * @prop {Writable} [writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 */


module.exports = indicatrix