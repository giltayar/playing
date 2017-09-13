'use strict'
const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const basicAuth = require('express-basic-auth')

module.exports = () => {
  const app = express()

  app.set('etag', false)

  app.use('/', express.static(path.join(__dirname, 'public'), {}))

  app.use(cookieParser())

  app.get('/set-cookies', (req, res) => {
    for (const [name, value] of Object.entries(req.query)) {
      res.cookie(name, value)
    }
    res.end('')
  })

  app.get('/list-cookies', (req, res) => {
    res.json(req.cookies || {})
  })

  app.get(
    '/needs-authentication',
    basicAuth({users: {aUserName: 'aPassword'}, challenge: true}),
    (req, res) => {
      res.send('<html><body><h1>Hello, world</h2></body></html>')
    },
  )

  return app
}
