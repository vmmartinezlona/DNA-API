const express = require('express')
const router = express.Router()

const dnaController = require('../../controllers/services/dna')

router.post('/mutation', dnaController.secuenceHasMutation)

export default router
