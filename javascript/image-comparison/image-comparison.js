'use strict'
const fs = require('fs')
const path = require('path')
const {Eyes} = require('@applitools/eyes-images');

async function compareImages(name = 'Compare images', ...images) {
  const random = '' + (Math.random() * 10000000 | 0);

  for (const i of [0, 1]) {
    const eyes = new Eyes();
    eyes.setBatch(`${name} ${random}`, random)
    // This is your api key, make sure you use it in all your tests.
    // eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
    // Define the OS and hosting application to identify the baseline
    await eyes.open(`${name} ${random}`, `Compare images ${random}`, {width: 1000, height: 1185})

    await eyes.checkImage(fs.readFileSync(images[i]), 'image');

    await eyes.close(true);
  }
}

async function main() {
  const [expected, actual, name] = process.argv.slice(2)

  if (fs.statSync(expected).isFile() && fs.statSync(actual).isFile()) {
    return await compareImages(path.basename(expected), expected, actual)
  }

  const expectedFiles = fs.readdirSync(expected)

  for (const expectedFile of expectedFiles) {
    if (!expectedFile.endsWith('.png')) continue

    const actualFile = path.resolve(actual, expectedFile)

    if (!fs.existsSync(actualFile)) continue

    console.log('working on', expectedFile, '...')

    try {
      await compareImages(name + ":" + expectedFile, path.resolve(expected, expectedFile), actualFile)

      console.log('same')
    } catch(err) {
      console.error(err.toString())
    }
  }
}

main().catch(err => {
  console.error(err.toString())

  process.exit(1)
})
