
function scoreFrame (frame, nextFrame){


  const numOne = frame[0]
  const numTwo = frame[1]
  const nfOne = nextFrame[0]
  const nfTwo = nextFrame[1]
  const sum = numOne + numTwo
  const nfSum = nfOne + nfTwo
  
  if (sum === 0) {
    return 0
  }

  else if (sum === 10 && frame[1] !== 0){

    return sum + nextFrame[0]
  }
  else if (sum === 10 && frame[1] === 0){
    
    return sum + nfSum
  }
console.log(nfOne)

  return sum


}
















module.exports = {
  scoreFrame: scoreFrame
}