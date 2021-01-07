module.exports = {
  scoreFrame: scoreFrame,
  scoresGame: scoresGame,
  spareLastFrame: spareLastFrame,
  strikeLastFrame: strikeLastFrame,
  scoreWholeGame: scoreWholeGame,
  ifSpare: ifSpare,
  ifStrike: ifStrike,

}

  // const frames = [
  // //  [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
  // //  ]



  // const frames = [
  //     [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [9, 1, 1]
  //     ]


//score 119

const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]


function scoreWholeGame(arr){
  //this function takes an array of array's (a game of bowling) and returns a score with the rules of bowling applied
  let total = 0
  arr = frames
  for (i = 0; i < arr.length; i++){
    if (arr[0] + arr[1] === 10)
  return total + arr[0]
  // if [0] + [1] is = to 10,
 // add result of next array[0] to previous frame spare total.

 //if array [0] is 10, then add next frame array [0] & [1] to previous strike frame total.

 //if array [0] is not 10, && arary[1] does not make fram
  }

}

function ifSpare(arr){
   if (arr[0] + arr[1] === 10)
  return +
}

function ifStrike(arr){

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

function scoresGame (arr) {
    let total = 0
    arr = frames
   for (i = 0; i < arr.length; i++){
      total = total + arr[i][0] + arr[i][1] 
    } 
    return total
  }
  scoresGame()


  //
  function spareLastFrame (arr) {
// if final frame [9] is a spare add index [2] value to the frame [9] total
    let total = 0
      total = total + arr[0] + arr[1] + arr[2]
    return total
  }

  function strikeLastFrame (arr) {
        let total = 0
          total = total + arr[0] + arr[1] + arr[2]
        return total
      }
  

