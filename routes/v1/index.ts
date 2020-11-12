import mutationRoutes from './mutation'

const express = require('express')
const ApiRouter = express.Router()

ApiRouter
  .use('/dna', mutationRoutes)

export default ApiRouter
