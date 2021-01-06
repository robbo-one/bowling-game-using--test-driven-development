module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, secondFrame) {
  let score = frame[0] + frame[1]
  if(score == 10){
    score = spare(score, secondFrame)
  }
  return score
 
}

function spare(score, secondFrame){
  return score = score + secondFrame[0]
}