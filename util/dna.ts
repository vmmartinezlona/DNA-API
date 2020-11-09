async function isNitrogenousBase(dna: [string]) {
  const reg = new RegExp("^[AaTtCcGg]+$");
  return dna.every(e => reg.test(e))
}

async function hasMutation(dna: [string]) {
  const reg = new RegExp("[Aa]{4,}|[Tt]{4,}|[Cc]{4,}|[Gg]{4,}")
  if (dna.every(e => reg.test(e)) || // horizontal
    checkVerticalSecuences(dna, reg) // vertical
    ) {
    return true
  }
  return false
}

function checkVerticalSecuences(dna: [string], reg: RegExp) {
  for(let i = 0; i <= dna.length; i++) {
    let verticalString = '' 
    for (const secuence of dna) {
      verticalString += secuence[i]
    }
    if (reg.test(verticalString)) {
      return true
    }
  }
  return false
}

module.exports = {
  isNitrogenousBase,
  hasMutation
}