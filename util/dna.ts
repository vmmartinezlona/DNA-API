const admin = require('firebase-admin')
const { v4: uuidv4 } = require('uuid');

async function isNitrogenousBase(dna: [string]) {
  const reg = new RegExp("^[AaTtCcGg]+$");
  return dna.every(e => reg.test(e))
}

async function hasMutation(dna: [string]) {
  const reg = new RegExp("[Aa]{4,}|[Tt]{4,}|[Cc]{4,}|[Gg]{4,}")
  if (dna.every(e => reg.test(e)) || // horizontal
    checkVerticalSecuences(dna, reg) || // vertical
    checkDiagonalSecuences(dna, reg, 'up') || // diagonal
    checkDiagonalSecuences(dna, reg, 'down') // diagonal
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

function checkDiagonalSecuences(dna: [string], reg: RegExp, direction = 'up') {
  for(var i = 0; i < (2 * dna.length - 1); ++i) {
    let diagonalString = ''
    const xIndex = Math.min(i, dna.length-1)
    const yIndex = Math.max(-1, i-dna.length)
    if(xIndex - yIndex >= 4) {
      for(var j = xIndex; j > yIndex; --j) {
        if (direction === 'up') {
          diagonalString += (dna[j][i-j])
        } else {
          diagonalString += (dna[i-j][dna.length-1-j])
        }
      }
      if (reg.test(diagonalString)) {
        return true
      }
    }
  }
  return false
}

function checkDiagonalSecuencesUp(dna: [string], reg: RegExp) {
  for(var i = 0; i < (2 * dna.length - 1); ++i) {
    let diagonalString = ''
    const xIndex = Math.min(i, dna.length-1)
    const yIndex = Math.max(-1, i-dna.length)
    if(xIndex - yIndex >= 4) {
      for(var j = xIndex; j > yIndex; --j) {
        diagonalString += (dna[j][i-j])
      }
      if (reg.test(diagonalString)) {
        return true
      }
    }
  }
  return false
}

function checkDiagonalSecuencesDown(dna: [string], reg: RegExp) {
  for(var i = 0; i < (2 * dna.length - 1); ++i) {
    let diagonalString = ''
    const xIndex = Math.min(i, dna.length - 1)
    const yIndex = Math.max(-1, i - dna.length)
    
    if(xIndex - yIndex >= 4) {
      for(var j = xIndex; j > yIndex; --j) {
        diagonalString += (dna[i-j][dna.length-1-j])
      }
      if (reg.test(diagonalString)) {
        return true
      }
    }      
  }
  return false
}

async function saveToDatabase(dna: [string], hasMutation: boolean) {
  const db = admin.database()
  const ref = db.ref('secuences')
  var secuencesRef = ref.child(uuidv4());
  secuencesRef.set({
    secuence: JSON.stringify(dna),
    hasMutation
  });
}

async function listSecuencesInDatabase() {
  const db = admin.database()
  const ref = db.ref('secuences')
  const snapshot = await ref.once('value')
  return snapshot.val()
}

module.exports = {
  isNitrogenousBase,
  hasMutation,
  saveToDatabase,
  listSecuencesInDatabase
}