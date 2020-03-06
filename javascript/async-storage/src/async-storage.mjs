import {AsyncLocalStorage} from 'async_hooks'

const asyncLocalStorage = new AsyncLocalStorage()

async function main() {
  console.log(`*********** outside`, {})

  const store = {}
  const returnValue = await asyncLocalStorage.runSyncAndReturn(store, async () => {
    await foo()

    console.log(`*********** inside, after calling foo`, {store})

    return 55
  })

  console.log(`*********** outside again`, {returnValue})
}

async function foo() {
  asyncLocalStorage.getStore().fooValue = 42
}

main().catch(error => {
  console.error(error)

  process.exit(1)
})
