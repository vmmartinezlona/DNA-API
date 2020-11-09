async function isNitrogenousBase(dna: [string]) {
  const reg = new RegExp("^[AaTtCcGg]+$");
  return dna.every(e => reg.test(e))
}

async function hasMutation(dna: [string]) {
  const reg = new RegExp("[Aa]{4,}|[Tt]{4,}|[Cc]{4,}|[Gg]{4,}")
  if (dna.every(e => reg.test(e)) // horizontal
    ) {
    return true
  }
  return false
}

module.exports = {
  isNitrogenousBase,
  hasMutation
}