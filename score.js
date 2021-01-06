
function scoreFrame (frame, nextFrame){


  const numOne = frame[0]
  const numTwo = frame[1]
  const sum = numOne + numTwo

  if (sum === 0) {
    return 0
  }

  if (sum === 10){

    return sum + nextFrame[0]
  }

  return sum


}
















module.exports = {
  scoreFrame: scoreFrame
}