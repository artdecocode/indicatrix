import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import indicatrix from '../../src'

export default makeTestSuite('test/result', {
  async getResults(input) {
    return await indicatrix(input, () => input)
  },
  context: Context,
})