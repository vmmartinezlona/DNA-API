const dnaUtil = require( '../../util/dna')


async function mutation(dna: [string]) {
  if (!await dnaUtil.isNitrogenousBase(dna)) {
    throw 'Is not nitrogenous base'
  }
  const hasMutation = await dnaUtil.hasMutation(dna)
  return {
    hasMutation
  }
}

module.exports = {
  mutation
}
