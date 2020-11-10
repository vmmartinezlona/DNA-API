const DNAController = require('../assistant/dna')

async function hasMutation (req, res) {
  console.log(req.body)
  try {
    const response = await DNAController.mutation(req.body.secuence)
    res.status(200).send(response.hasMutation)
  } catch (e) {
    res.status(403).send(e)
  }
}

module.exports = {
  hasMutation
}
