'use strict'
const {describe, it} = require('mocha')

const urlToCheck = `https://en.wikipedia.org/wiki/Smartphone`

describe(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {

    // cy.eyesOpen({
    //   appName: urlToCheck,
    //   testName: urlToCheck,
    //   browser: [
    //     {width: 1280, height: 800}
    //   ],
    //   // showLogs: true,
    // })

    cy.visit(urlToCheck)

    // cy.eyesCheckWindow(urlToCheck)

    // cy.eyesClose()
  })
})
