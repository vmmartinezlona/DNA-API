import mutationRoutes from './mutation'

const express = require('express')
const ApiRouter = express.Router()

ApiRouter
  .use('/mutation', mutationRoutes)

export default ApiRouter
