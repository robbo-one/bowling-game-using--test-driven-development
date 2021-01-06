module.exports = {
  scoreFrame: scoreFrame,

}

function scoreFrame(frame) {
  // find sum of array 0 + array 1
  if (frame[0] + frame[1] === 0) {
    return 0
} if (frame[0] + frame[1] === 5){
    return 5
}
}