/**
 * @type {_indicatrix.indicatrix}
 */
async function $indicatrix(text, promise, options = {}) {
  const { interval = 250, writable = process.stdout } = options
  const p = typeof promise == 'function' ? promise() : promise
  const write = writable.write.bind(writable)

  const { INDICATRIX_PLACEHOLDER: placeholder } = process.env
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

export default $indicatrix

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('..')} _indicatrix.indicatrix
 */