module.exports = {
  scoreFrame: scoreFrame
}



function scoreFrame (frame, nextFrame, nextNextFrame) {

  //normal frames
  let score = frame[0] + frame[1]  
  //double strike
  if (frame[0] === 10 && nextFrame[0] === 10 && nextNextFrame) {
       score = score + nextFrame[0] + nextNextFrame[0]
  //single strike     
  } else if (frame[0] === 10) {
       score = score + nextFrame[0] + nextFrame[1]
  //spare     
  } else if (score === 10) {
       score = score + nextFrame[0]
     
}
  return score  
}

