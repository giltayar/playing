'use strict'
const fs = require('fs')
const path = require('path')
const {Eyes} = require('@applitools/eyes-images');

const images = process.argv.slice(2)

async function main() {
  const random = '' + (Math.random() * 10000000 | 0);

  for (const i of [0, 1]) {
    const eyes = new Eyes();
    eyes.setBatch(`Compare images ${random}` + (i === 0 ? ' (please ignore this batch)' : ''), random)
    // This is your api key, make sure you use it in all your tests.
    // eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    // Define the OS and hosting application to identify the baseline
    await eyes.open(`Compare images ${random}`, `Compare images ${random}`, {width: 600, height: 1185})

    await eyes.checkImage(fs.readFileSync(images[i]), 'image');

    await eyes.close(true);
  }
}

main().catch(err => {
  console.error(err.toString())

  process.exit(1)
})
