const express = require('express')
const router = express.Router()

const dnaController = require('../../controllers/services/dna')

router.post('/', dnaController.hasMutation)

export default router
