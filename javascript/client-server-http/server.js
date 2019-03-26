const express = require('express')

const app = express()


app.get('/', (req, res) => {
  const timeout = parseInt(req.query['timeout'], 10) || 10000

  setTimeout(() => res.send('Hello!'), timeout)
})


app.listen(process.env.PORT || 3000, err => err ? console.error('error!' , err) : console.log('listening...'))
