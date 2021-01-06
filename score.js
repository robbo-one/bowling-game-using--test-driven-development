
function scoreFrame (frame){
  const numOne = frame[0]
  const numTwo = frame[1]
  const sum = numOne + numTwo
  console.log(numOne, numTwo, sum)
  if (sum === 0) {
    return 0
  }
  return sum
}
















module.exports = {
  scoreFrame: scoreFrame
}