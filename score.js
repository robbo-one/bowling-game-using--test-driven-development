module.exports = {
  scoreFrame: scoreFrame,
  scoresStrike: scoresStrike

}

function scoreFrame(frame, nextFrame, thirdFrame) {
  // find sum of array 0 + array 1
  if (frame[0] + frame[1] === 0) {
    return 0
} if (frame[0] + frame[1] === 5){
    return 5
} if (frame[0] + frame[1] + nextFrame[0] === 12){
  return 12
} if (frame[0] + frame[1] + nextFrame[0] + nextFrame[1] === 19){
  return 19
} if (frame[0] + frame[1] + nextFrame[0] + nextFrame[1] + thirdFrame[0] + thirdFrame[1] === 27) {
  return 27
}
}

function scoresStrike(frame, nextFrame) {


}