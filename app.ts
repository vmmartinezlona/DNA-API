'use strict'

import ApiRouter from './routes/v1'
var express = require('express')
var compression = require('compression')
const bodyParser = require('body-parser')
const app = express()
app.use(compression())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api/v1', ApiRouter)
app.get('/api/v1', (req, res) => {
  res.status(200).send({ name: 'DNAMutationAPI', apiVersion: 'v1' })
})

module.exports = app
