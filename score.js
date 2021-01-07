module.exports = {
  scoreFrame: scoreFrame
}



function scoreFrame (frame, nextFrame, nextNextFrame) {
  let score = frame[0] + frame[1]//score normal frame
  if (score == 10) {
    score = score + nextFrame[0]//score a spare
  } else if (frame[0] == 10) {
    score = score + nextFrame[0] + nextFrame[1]//score a single strike
  } else if (frame[0] == 10 && nextFrame[0] == 10) {
    score = score + nextNextFrame[0]
    
     
}
  return score  
}

