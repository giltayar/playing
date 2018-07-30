#!/usr/bin/env node
'use strict'
const Storage = require('@google-cloud/storage')
const yargs = require('yargs')

const {bucket} = yargs
  .option('bucket', {
    alias: 'b',
    default: 'test-storage-problem-can-delete',
  })
  .strict()
  .help()
  .parse(process.argv)

async function main() {
  const storage = new Storage({
    projectId: 'rendering-grid',
    maxRetries: 0,
    autoRetry: false,
    'grpc.min_reconnect_backoff_ms': 2000,
  })

  await storage.createBucket(bucket)
}

main().catch(console.error)
