module.exports = {
  scoreFrame: scoreFrame
}

function scoreFrame (frame, secondFrame) {
  let score = frame[0] + frame[1]
  if (frame[0] == 10){ // check for strike
    score = strike (score, secondFrame)
  }else if(score == 10){ // check for spare
    score = spare(score, secondFrame)
  }
  return score
 
}

function spare(score, secondFrame){
  return score = score + secondFrame[0]
}
function strike (score, secondFrame){
  return score = score + secondFrame[0]+secondFrame[1]
}
