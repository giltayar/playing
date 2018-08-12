'use strict'
const {describe, it} = require('mocha')

const urlToCheck = `http://snapshot-server-app/projects/f748dc0d-d606-4e73-8d60-b0ab20049121/admin/services/issueTypes?rg_render-path=%2Fsha256%2F8f82c43406e3535c8e80925d7b174af07967e8151f021c0b3753b5ae53672193&rg_render-id=d8f6e00d-7359-4a40-ab3c-6003d6514c39&rg_auth-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0SnlGZmMwaFRVX2pzZTVCNlFTX2lnfn4iLCJpYXQiOjE1MzM4MDk3NjksImV4cCI6MTUzMzgzMTM2OSwiaXNzIjoiZXllc2FwaS5hcHBsaXRvb2xzLmNvbSJ9.F3gAx0MpyTzlKQ34uEV-LjXTksJtOTtKiz2ECQaEmaJXDm51V1ysFSuGdy60Q7IH_Ag8Y6TrDSAEsnR9W1zLDDKhUMfg9tes1MGQ7xJ36m0gM2fhwEy4q46jwc0eTm1DrEXBKVBpgrwiFT_9ZO6cwYt24j8TfXDqpVusTrEt70A&rg_origin=http%3A%2F%2Ffield.b360-dev.autodesk.com&rg_namespace-override=C7Efm7r_Uk__bCsD2dVZrQ~~&rg_urlmode=rewrite`

describe('Blog App', function () {
  it(urlToCheck, () => {

    cy.eyesOpen({
      appName: urlToCheck,
      testName: urlToCheck,
      browser: [
        {width: 2560, height: 1440}
      ],
      // showLogs: true,
    })

    cy.visit(urlToCheck)

    cy.eyesCheckWindow(urlToCheck)

    cy.eyesClose()
  })
})
