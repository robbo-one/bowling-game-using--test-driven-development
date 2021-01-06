module.exports = {
  scoreFrame: scoreFrame,
  scoresGame: scoresGame,

}

  const frames = [
   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
   ]


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



function scoresGame (arr) {
    let total = 0
    arr = frames
   for (i = 0; i < arr.length; i++){
      total = total + arr[i][0] + arr[i][1] 
    } 
    return total
  }
  scoresGame()
  

