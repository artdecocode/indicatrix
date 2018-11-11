import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import indicatrix from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await indicatrix({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts