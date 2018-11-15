import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import indicatrix from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    return await indicatrix(input, () => input)
  },
  context: Context,
})

export default ts