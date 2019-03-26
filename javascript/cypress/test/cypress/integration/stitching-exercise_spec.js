/// <reference types="cypress" />
'use strict'
const height = 12000
const width = 900

describe('checkbox check', function() {
  const test = `region on long page height ${width}x${height}`
  it('should be all right', () => {
    cy.visit(`https://applitools-sample-web-app-testkit.surge.sh/long-page.html?height=${height}&width=${width}`)

    cy.eyesOpen({
      appName: test,
      testName: test,
      batchName: test,
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1800, height: 1200, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
        {width: 800, height: 600, name: 'ie'},
      ],
      sendDom: false,
    })

    cy.eyesCheckWindow({tag: `same width: ${width}x${height}`, sendDom: false, sizeMode: 'region', region: {
      top: 0,
      left: 0,
      width,
      height
    }})
    cy.eyesCheckWindow({tag: 'inside and out width: 1000x1000', sendDom: false, sizeMode: 'region', region: {
      top: 800,
      left: 800,
      width: 1000,
      height: 1000,
    }})

    cy.eyesCheckWindow({tag: 'inside and out width, with stitching: 1000x9000', sendDom: false, sizeMode: 'region', region: {
      top: 800,
      left: 800,
      width: 1000,
      height: 9000,
    }})

    cy.eyesCheckWindow({tag: 'inside and out height, with stitching: 1000x9000', sendDom: false, sizeMode: 'region', region: {
      top: 10000,
      left: 0,
      width: 700,
      height: 9000,
    }})

    cy.eyesCheckWindow({tag: 'totally out of width, with stitching: 1000x7000', sendDom: false, sizeMode: 'region', region: {
      top: 0,
      left: 1000,
      width: 1000,
      height: 7000,
    }})


    cy.eyesCheckWindow({tag: 'totally out of height, with stitching: 1000x7000', sendDom: false, sizeMode: 'region', region: {
      top: 13000,
      left: 800,
      width: 1000,
      height: 7000,
    }})

    cy.eyesClose()

  })
})


