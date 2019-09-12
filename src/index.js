/**
 * Will print the loading text and refresh the CLI line to show the ellipsis while the promise is loading.
 * @param {string} text The text to display in the CLI.
 * @param {!Promise<T>|function(...*): !Promise<T>} promise The promise or an async function that returns the promise.
 * @param {!_indicatrix.Options} [options] The optional options for the indicator, such as the refresh interval.
 * @param {number} [options.interval=250] The interval with which to update the screen. Default `250`.
 * @param {!(NodeJS.WriteStream|stream.Writable)} [options.writable="process.stdout"] The writable stream used for printing data with the `.write` method. Default `process.stdout`.
 * @template T
 */
export default async function indicatrix(text, promise, options = {}) {
  const { interval = 250, writable = process.stdout } = options
  const p = typeof promise == 'function' ? promise() : promise
  const write = writable.write.bind(writable)

  const { 'INDICATRIX_PLACEHOLDER': placeholder } = process.env
  if (placeholder && placeholder != '0') {
    write(`${text}<INDICATRIX_PLACEHOLDER>`)
    return await p
  }

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

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('..').Options} _indicatrix.Options
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('stream').Writable} stream.Writable
 */