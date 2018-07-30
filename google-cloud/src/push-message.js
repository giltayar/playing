'use strict'
const pubsub = require('@google-cloud/pubsub')

async function pushMessage(env, project, message, count) {
  const pubsubClient = pubsub({projectId: project})

  const topic = pubsubClient.topic(`${env}_TestGooglePubsubProblemCanDelete`)

  for (let i = 0; i < count; ++i) {
    const finalMessage = count === 1 ? message : `${message} ${i + 1}`

    console.log('publishing %s', finalMessage)

    topic
      .publisher({
        batching: {
          maxMessages: 0,
          maxMilliseconds: 0,
        },
      })
      .publish(Buffer.from(finalMessage))
  }
}

module.exports = pushMessage
