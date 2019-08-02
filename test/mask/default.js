import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import indicatrix from '../../src'

export default makeTestSuite('test/result', {
  async getResults() {
    return await indicatrix(this.input, () => this.input)
  },
  context: Context,
})