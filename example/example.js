/* yarn example/ */
import indicatrix from '../src'

(async () => {
  const res = await indicatrix({
    text: 'example',
  })
  console.log(res)
})()