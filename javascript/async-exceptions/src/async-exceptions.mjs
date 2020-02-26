const delay = () => new Promise(r => setTimeout(r, 0))

async function returnsPromiseDirectly() {
  console.log('returnsPromiseDirectly')

  await delay()

  // *******  TRY CHANGING THIS:
  // With await:
  // return await throwsException()
  // Without await:
  return throwsException()
}

async function throwsException() {
  console.log('throwsException')

  await delay()

  throw new Error('exception')
}

async function main() {
  console.log('main')

  await delay()

  await returnsPromiseDirectly()
}

main().catch(console.error)
