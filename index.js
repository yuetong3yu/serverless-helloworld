const serverless = require('serverless-http')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  return res.status(200).json({
    content: 'Hello from Chris!',
  })
})

app.use((req, res, next) => {
  return res.status(404).json({
    error: 'Not Found',
  })
})

module.exports.hello = serverless(app)
