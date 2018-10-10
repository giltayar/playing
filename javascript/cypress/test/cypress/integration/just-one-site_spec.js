'use strict'
const {describe, it} = require('mocha')

// const urlToCheck = `https://www.amazon.com/All-new-Echo-Dot-3rd-Gen/dp/B0792R1RSN/ref=redir_mobile_desktop`
const urlToCheck = `http://snapshot-server-app/All-new-Echo-Dot-3rd-Gen/dp/B0792R1RSN/ref=redir_mobile_desktop?rg_render-path=%2Fsha256%2F0b1fc56ad0bbfbdb6724fab5bca3f426350da39fa6b2733c00a7357c89fad7ce&rg_render-id=91d2603b-6c13-44d0-8e9f-13e918556bca&rg_auth-token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0SnlGZmMwaFRVX2pzZTVCNlFTX2lnfn4iLCJpYXQiOjE1MzkxNjMxOTIsImV4cCI6MTUzOTE4NDc5MiwiaXNzIjoiZXllc2FwaS5hcHBsaXRvb2xzLmNvbSJ9.ntBg7IJJ18R7OkrPJsWbsvJRd10iDpIyWADwEluWzFth_sHy-6le-66RTdFz1-qXcsujdwr8jQQCaZeLp8WV75mIrvo-AM93rYoybZrh5wMvZYv9Y5imcYx4GK4vF-N-nBDRjj6W_9cmScMzmJjefJImSLYiIUFqvsCLE3oxtAI&rg_origin=https%3A%2F%2Fwww.amazon.com`

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

    cy.eyesCheckWindow(urlToCheck).then(console.log('@@@GIL checkedwindow!'))

    cy.eyesClose()
  })
})
