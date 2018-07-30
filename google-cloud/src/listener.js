'use strict'
const {promisify: p} = require('util')
const pubsub = require('@google-cloud/pubsub')

async function listener(env, project, count, wait) {
  const client = new pubsub.v1.SubscriberClient()

  for (let i = 0; i < count; ++i) {
    try {
      const start = Date.now()
      console.log('listening...')
      const response = await client.pull({
        subscription: `projects/${project}/subscriptions/${env}_TestGooglePubsubProblemCanDelete_Sub`,
        maxMessages: 1,
      })

      const message = response[0].receivedMessages[0].message.data
      const ackId = response[0].receivedMessages[0].ackId

      console.log('listen time (secs): %d', Math.floor((Date.now() - start) / 1000))
      console.log(message.toString())

      console.log('waiting...')
      await p(setTimeout)(wait * 1000)

      console.log('acking...')
      await client.acknowledge({
        subscription: `projects/${project}/subscriptions/${env}_TestGooglePubsubProblemCanDelete_Sub`,
        ackIds: [ackId],
      })
    } catch (err) {
      console.error('ignoring error', err)
    }
  }
}
module.exports = listener
