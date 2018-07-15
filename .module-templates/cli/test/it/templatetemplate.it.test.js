'use strict'
const path = require('path')
const {describe, it} = require('mocha')
const {expect} = require('chai')

const app = require('../..')

describe('templatetemplate it', function() {
  this.retries(global.v8debug || /--inspect/.test(process.execArgv.join(' ')) ? 0 : 3)

  it('should return OK on /', async () => {
    expect(4).to.equal(4)
  })
})
