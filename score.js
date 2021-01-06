module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame
}

function scoreFrame (frame, secondFrame, thirdFrame) {
  let score = frame[0] + frame[1]
  if (frame[0] == 10){ // check for strike
    if(secondFrame[0] == 10){
      score = secondStrike(score, secondFrame, thirdFrame) // check for second strike
    } else {
      score = strike (score, secondFrame)
    }
  }else if(score == 10){ // check for spare
    score = spare(score, secondFrame)
  }
  return score
 
}

function scoreGame (array) { //scores entire game
  let endScore = 0
  for (let i = 0; i < array.length; i++){
    endScore = endScore+ scoreFrame (array[i],array[i+1],array[i+2])
  }
  return endScore
}

function strike (score, secondFrame){ //scores a strike
  return score = score + secondFrame[0]+secondFrame[1]
}

function secondStrike (score, secondFrame, thirdFrame){ //scores a second strike
  return score = score + secondFrame[0] + thirdFrame[0]
}

function spare(score, secondFrame){ //scores a spare 
  return score = score + secondFrame[0]
}


  