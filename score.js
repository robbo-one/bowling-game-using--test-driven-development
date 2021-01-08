
function scoreFrame(frame, nextFrame, thirdFrame) {

  const numOne = frame[0]
  const numTwo = frame[1]
  const nfOne = nextFrame[0]
  const nfTwo = nextFrame[1]
  const tfOne = thirdFrame[0]
  const tfTwo = thirdFrame[1]

  const sum = numOne + numTwo
  const nfSum = nfOne + nfTwo
  const tfSum = tfOne + tfTwo

  if (isDblStrike(sum, numOne, nfSum, nfOne)) {
    return sum + nfSum + tfSum
  }
  else if (isStrike(sum, numOne)) {
    return sum + nfSum
  }
  else if (isSpare(sum)) {
    return sum + nfOne
  }
  else if (isGutter(sum)) {
    return sum
  }
  return sum
}

function isGutter(sum) {
  if (sum === 0) {
    return true
  }
  return false
}

function isSpare(sum, numOne) {
  if (sum === 10 && numOne !== 10) {
    return true
  }
  return false
}

function isStrike(sum, numOne) {
  if (sum === 10 && numOne === 10) {
    return true
  }
  return false
}

function isDblStrike(sum, numOne, nfSum, nfOne) {
  if (sum === 10 && numOne === 10 && nfSum === 10 && nfOne === 10) {
    return true
  }
  return false
}
function scoreGame(fullGame) {
  normalFrames = []
  bonusArray = []

  const fullGameMap = fullGame.map(val => {
    const numOne = val[0]
    const numTwo = val[1]
    const valSum = numOne + numTwo

    
    if (fullGame.indexOf(val) < fullGame.length -1 ){
console.log(val)
      const nextArr = fullGame.indexOf(val) +1
      const nFrame = fullGame[nextArr]
      const nfOne = fullGame[nextArr][0]
      const nfTwo = fullGame[nextArr][1]
      const nfSum = nfOne + nfTwo

    if (isStrike(valSum, numOne) ) {
      bonusArray.push(fullGame[nextArr]
        )
    }
    if (isDblStrike(valSum, numOne, nfSum, nfOne )){
      bonusArray.push(fullGame[nextArr+1][0])
    }

    if (isSpare(valSum, numOne)) {
      bonusArray.push(fullGame[nextArr][0]
        )
    }


  }
  })

  
console.log("bonus array: ", bonusArray)

  const bonusTotal = bonusArray.flat().reduce((a, b) => a + b, 0)

console.log("bonus: ", bonusTotal)
  
  const normalTotal = fullGame.flat().reduce((a,b) => a+b, 0)

console.log("normalTotal", normalTotal)

  return normalTotal + bonusTotal 

}

module.exports = {
  scoreFrame: scoreFrame,
  isGutter: isGutter,
  isSpare: isSpare,
  isStrike: isStrike,
  isDblStrike: isDblStrike,
  scoreGame: scoreGame
}