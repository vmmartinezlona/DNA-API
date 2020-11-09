async function isNitrogenousBase(dna: [string]) {
  const reg = new RegExp("^[AaTtCcGg]+$");
  return dna.every(e => reg.test(e))
}

module.exports = {
  isNitrogenousBase
}