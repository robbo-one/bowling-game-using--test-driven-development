function scoreGame (frames) {
  let total = 0

  for (let i = 0; i < frames.length; i++) {
    const thisFrame = frames[i]
    const nextFrame = frames[i + 1]
    const nextNextFrame = frames[i + 2]

    if(thisFrame.length === 3){
      total += score(thisFrame) + thisFrame[2]
    } else {
      total += scoreFrame(thisFrame, nextFrame, nextNextFrame)
    }
  }

  return total
}

function scoreFrame (frame, nextFrame, nextNextFrame) {
  let sum = score(frame)

  if (nextNextFrame && isStrike(frame) && isStrike(nextFrame)) {
    sum += ballOne(nextFrame) + ballOne(nextNextFrame)
  } else if (isStrike(frame)) {
    sum += score(nextFrame)
  } else if (isSpare(frame)) {
    sum += ballOne(nextFrame)
  }

  return sum
}

function isSpare(frame) {
  return score(frame) === 10
}

function isStrike(frame) {
  return ballOne(frame) === 10
}

function score (frame) {
  return ballOne(frame) + ballTwo(frame)
}

function ballOne(frame) {
  return frame[0]
}

function ballTwo(frame) {
  return frame[1]
}

module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame
}
