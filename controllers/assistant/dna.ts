const dnaUtil = require( '../../util/dna')


async function mutation(dna: [string]) {
  if (!await dnaUtil.isNitrogenousBase()) {
    throw 'Is not nitrogenous base';
  }
  const hasMutation = await dnaUtil.hasMutation(dna)
  return {
    hasMutation
  }
}

module.exports = {
  mutation
}
