
function scoreFrame(frame, nextFrame, thirdFrame) {
  console.log(thirdFrame)
  const numOne = frame[0]
  const numTwo = frame[1]
  const nfOne = nextFrame[0]
  const nfTwo = nextFrame[1]
  const tfOne = thirdFrame[0]
  const tfTwo = thirdFrame[1]


  const sum = numOne + numTwo
  const nfSum = nfOne + nfTwo
  const tfSum = tfOne + tfTwo

  const dblFrame = sum

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
function scoreGame(){

}

module.exports = {
  scoreFrame: scoreFrame,
  isGutter: isGutter,
  isSpare: isSpare,
  isStrike: isStrike,
  isDblStrike: isDblStrike
}