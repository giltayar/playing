const fs = require('fs')
const {promisify} = require('util')

const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

async function main() {
  const content = await readFilePromise('source.txt')

  await writeFilePromise('target.txt', content)

  console.log('done')
}
main()