const DNAController = require('../assistant/dna')

async function hasMutation (req, res) {
  const secuence = eval(req.body.secuence)
  console.log(secuence)
  try {
    const response = await DNAController.mutation(secuence)
    console.log(response)
    res.status(200).send(response.hasMutation)
  } catch (e) {
    res.status(403).send(e)
  }
}

module.exports = {
  hasMutation
}
