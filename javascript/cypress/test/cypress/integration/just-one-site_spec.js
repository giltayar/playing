'use strict'
const {describe, it} = require('mocha')

const urlToCheck = `https://www.amazon.com/All-new-Echo-Dot-3rd-Gen/dp/B0792R1RSN/ref=redir_mobile_desktop`

describe(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {

    cy.eyesOpen({
      appName: urlToCheck,
      testName: urlToCheck,
      browser: [
        {width: 1280, height: 1024}
      ],
    })

    cy.visit(urlToCheck)

    cy.eyesCheckWindow(urlToCheck)

    cy.eyesClose()
  })
})
