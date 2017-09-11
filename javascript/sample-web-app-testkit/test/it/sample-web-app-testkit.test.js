'use strict'
'use strict'
const {promisify: p} = require('util')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const nodeFetch = require('node-fetch')
const fetchCookies = require('fetch-cookie/node-fetch')
const tough = require('tough-cookie')
const sampleWebApp = require('../..')

let cookieJar = new tough.CookieJar()
describe('sample-web-app', function() {
  let server
  let webAppPort
  before(done => {
    server = sampleWebApp().listen(undefined, err => {
      webAppPort = server.address().port

      done(err)
    })
  })
  after(done => server.close(done))

  const fetch = fetchCookies(nodeFetch, cookieJar)

  it('should return static hello-world-document', async () => {
    expect(
      await fetchDocumentString(fetch, `http://localhost:${webAppPort}/hello-world-document.html`),
    ).to.include('Hello, world')
  })

  it('should render the cookies in /list-cookies created by /set-cookies', async () => {
    await fetchDocumentString(
      fetch,
      `http://localhost:${webAppPort}/set-cookies?a=aaaa&cookieb=bbb`,
    )

    const actualCookies = await fetchDocumentJson(
      fetch,
      `http://localhost:${webAppPort}/list-cookies?a=aaaa&cookieb=bbb`,
    )

    expect(actualCookies).to.deep.equal({a: 'aaaa', cookieb: 'bbb'})
  })
})

async function fetchDocumentString(fetch, url) {
  const response = await fetch(url)

  if (!response.ok) throw new Error(`Failed fetching ${url}. Response: ${response.status}`)

  return await response.text()
}

async function fetchDocumentJson(fetch, url) {
  const response = await fetch(url)

  if (!response.ok) throw new Error(`Failed fetching ${url}. Response: ${response.status}`)

  return await response.json()
}
