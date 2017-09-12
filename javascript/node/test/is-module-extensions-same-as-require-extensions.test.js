'use strict'
const {describe, it} = require('mocha')
const {expect} = require('chai')

it('module _extensions is the same as require.extensions', async () => {
  expect(require('module')._extensions).to.equal(require.extensions)
})
