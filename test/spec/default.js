import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import indicatrix from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof indicatrix, 'function')
  },
  async 'calls package without error'() {
    await indicatrix()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await indicatrix({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T