#!/usr/bin/env node
'use strict'
const crypto = require('crypto')
const Storage = require('@google-cloud/storage')
const yargs = require('yargs')
const {StringStream} = require('@rauschma/stringio')
const uuid = require('uuid')

const {bucket, path, text, runs, number, random} = yargs
  .option('bucket', {
    alias: 'b',
    default: 'test-storage-problem-can-delete',
  })
  .option('path', {
    alias: 'p',
    default: 'can-delete/can-delete.txt',
  })
  .option('text', {
    alias: 't',
    default: 'some debugging text',
  })
  .option('random', {
    description: 'whether to use random text and random path',
    boolean: true,
    default: false,
  })
  .option('number', {
    alias: 'n',
    default: 1,
    description: 'number of parallel puts',
  })
  .option('runs', {
    alias: 'r',
    default: 1,
    description: 'number of serial runs',
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

  const put = async () => {
    const sha256Stream = crypto.createHash('sha256')

    const sha256Promise = new Promise((resolve, reject) => {
      sha256Stream
        .on('readable', () => resolve(sha256Stream.read().toString('hex')))
        .on('error', reject)
    })

    await new Promise((resolve, reject) => {
      const writeStream = storage
        .bucket(bucket)
        .file(path + (random ? '/' + uuid.v4() : ''))
        .createWriteStream({
          // resumable: false,
          metadata: {
            contentType: 'text/plain',
          },
        })

      writeStream.on('finish', resolve).on('error', reject)

      const readStream = new StringStream(random ? `random-${uuid.v4()}` : text)

      readStream.on('error', reject)
      readStream.pipe(writeStream)
      readStream.pipe(sha256Stream)
    })
    await sha256Promise
  }

  for (let i = 0; i < runs; ++i) {
    console.log('#### Run #', i + 1)
    await Promise.all([...Array(number)].map(() => put().then(() => process.stdout.write('.'))))
    console.log('')
  }
}

main().catch(console.error)
