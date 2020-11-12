const DNAController = require('../assistant/dna')

async function secuenceHasMutation (req, res) {
  const secuence = eval(req.body.secuence)
  try {
    const response = await DNAController.mutation(secuence)
    res.status(200).send(response.hasMutation)
  } catch (e) {
    res.status(403).send(e)
  }
}

async function listSecuence (req, res) {
  try {
    const response = await DNAController.list()
    res.status(200).send(response)
  } catch (e) {
    res.status(403).send(e)
  }
}

module.exports = {
  secuenceHasMutation,
  listSecuence
}
