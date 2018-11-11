import { equal, throws } from 'zoroaster'
import Context from '../context'
import indicatrix from '../../src'
import Catchment from 'catchment'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof indicatrix, 'function')
  },
  async 'prints the loading text'() {
    const writable = new Catchment()
    await indicatrix('test', async () => {
      await new Promise(r => setTimeout(r, 10))
    }, {
      interval: 5,
      writable,
    })
    writable.end()
    const res = await writable.promise
    equal(res, 'test.\r       \rtest..\r       \r')
  },
  async 'does not print after the promise is rejected'() {
    const writable = new Catchment()
    const error = new Error('error')
    await throws({
      fn: indicatrix,
      args: ['test', async () => {
        await new Promise(r => setTimeout(r, 10))
        throw error
      }, {
        interval: 5,
        writable,
      }],
      error,
    })
    writable.end()
    const res = await writable.promise
    equal(res, 'test.\r       \rtest..\r       \r')
    await new Promise(r => setTimeout(r, 20))
  },
}

export default T