'use strict'

const {fetch} = require('@applitools/http-commons')

async function main() {
  const response = await fetch('http://localhost:3000?timeout=10000')

  console.log(await response.text())
}

main().catch(err => {
  console.error(err.toString())

  process.exit(1)
})
