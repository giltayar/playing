#!/usr/bin/env node
const {spawnSync} = require('child_process')

const env = process.argv[2]
if (!env) throw new Error('Must specify an env as first argument')

createTopicIfNeeded('TestGooglePubsubProblemCanDelete')
createSubscriptionIfNeeded(
  'TestGooglePubsubProblemCanDelete',
  'TestGooglePubsubProblemCanDelete_Sub',
  25,
)

function createTopicIfNeeded(topicName) {
  spawnSync('gcloud', ['pubsub', 'topics', 'create', `${env}_${topicName}`], {stdio: 'inherit'})
}

function createSubscriptionIfNeeded(topicName, subscriptionName, ackDeadlineSec) {
  const result = spawnSync(
    'gcloud',
    [
      'pubsub',
      'subscriptions',
      'create',
      `${env}_${subscriptionName}`,
      `--topic=${env}_${topicName}`,
      `--ack-deadline=${ackDeadlineSec}`,
    ],
    {stdio: 'inherit'},
  )
  if (result.status !== 0) {
    spawnSync('gcloud', ['pubsub', 'subscriptions', 'delete', `${env}_${subscriptionName}`], {
      stdio: 'inherit',
    })
    createSubscriptionIfNeeded(topicName, subscriptionName, ackDeadlineSec)
  }
}
