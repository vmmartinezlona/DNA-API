const dnaUtil = require( '../../util/dna')


async function mutation(dna: [string], callback) {
  if (!await dnaUtil.isNitrogenousBase()) {
    throw 'Is not nitrogenous base';
  }
  const hasMutation = await dnaUtil.hasMutation(dna)

  if(callback) {
    return callback({
      hasMutation
    })
  } else {
    return {
      hasMutation
    }
  }
}

module.exports = {
  mutation
}
