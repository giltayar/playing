#!/usr/bin/env node

const sampleWebApp = require('../')

const server = sampleWebApp().listen(process.env.PORT || 3000, err => {
  if (err) {
    return console.error(err)
  }
  console.log(`Listening on port ${server.address().port}`)
})
