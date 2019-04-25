/* yarn example/ */
import indicatrix from '../src'

(async () => {
  const res = await indicatrix('Please wait', async () => {
    await new Promise(r => setTimeout(r, 750))
    return 'OK'
  }, { interval: 100 })
  console.log(res)
})()