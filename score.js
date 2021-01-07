function scoreFrame (frame, nextFrame, nextNextFrame) {
  let sum = frame[0] + frame[1]

  if (nextNextFrame && frame[0] === 10 && nextFrame[0] === 10) {
    sum = sum + nextFrame[0] + nextNextFrame[0]
  } else if (frame[0] === 10) {
    sum = sum + nextFrame[0] + nextFrame[1]
  } else if (sum === 10) {
    sum = sum + nextFrame[0]
  }

  return sum
}

function scoreGame (frames) {
  let total = 0

  for (let i = 0; i < frames.length; i++) {
    if(frames[i].length === 3){
      total = total + frames[i][0] + frames[i][1] + frames[i][2]
    } else {
      total = total + scoreFrame(frames[i], frames[i + 1], frames[i + 2])
    }
  }

  return total
}

module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame
}
