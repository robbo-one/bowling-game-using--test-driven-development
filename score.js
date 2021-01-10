module.exports = {
    scoreFrame: scoreFrame,
    scoreGame: scoreGame
  }
  
  //
  function scoreFrame (frame, nextFrame, nextNextFrame) {
    let score = frame[0] + frame[1]//score normal frame

    if (frame[0] === 10 && nextFrame[0] && nextNextFrame) {//check if NNF is defined (truthy value)??
      score = score + nextFrame[0] + nextNextFrame[0] //score two strikes in a row + need third frame  
    } else if (frame[0] === 10) {
    score = score + nextFrame[0] + nextFrame[1]//score a single strike
    } else if (score === 10) {
      score = score + nextFrame[0]//score a spare
    }
    return score  
  }
 
 
//Iteration through array of frames
//scoreFrame function has each [i] (frame) in frames passed into it
//I needed to check Kelly's solution to correctly code the logic here. After completing this the logic is clear.

function scoreGame (frames) {
  let finalScore = 0

  for (let i = 0; i < frames.length; i++) {
    if(frames[i].length === 3){
      finalScore = finalScore + frames[i][0] + frames[i][1] + frames[i][2]
    } else {
      finalScore = finalScore + scoreFrame(frames[i], frames[i + 1], frames[i + 2])
    }
  }
  return finalScore
}


