const dnaUtil = require( '../../util/dna')

async function mutation(dna: [string]) {
  if (!await dnaUtil.isNitrogenousBase(dna)) {
    throw 'Is not nitrogenous base'
  }
  const hasMutation = await dnaUtil.hasMutation(dna)
  await dnaUtil.saveToDatabase(dna, hasMutation)  
  return {
    hasMutation
  }
}

async function list() {
  const res = await dnaUtil.listSecuencesInDatabase()
  return {
    list: res
  }
}

module.exports = {
  mutation,
  list
}
