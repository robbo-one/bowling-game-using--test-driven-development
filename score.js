module.exports = {
  scoreFrame: scoreFrame,
  scoreGame: scoreGame
}



function scoreFrame (frame, nextFrame, nextNextFrame) {

   //normal frames
   let score = frame[0] + frame[1] 
  //double strike
  if (frame[0] === 10 && nextFrame[0] === 10 && nextNextFrame) {
       score = score + nextFrame[0] + nextNextFrame[0]
  //single strike     
  } else if (frame[0] === 10) {
       score = score + nextFrame[0] + nextFrame[1]
  //spare     
  } else if (score === 10) {
       score = score + nextFrame[0]
     
}
  return score  
}


function scoreGame (results) {
  
  let total = 0;
  // go through entire array, add up, return total
  for (let i = 0; i < results.length; i++) {
      if (results[i].length === 3 ) {
        total = total + results[i][0] + results[i][1] + results[i][2]
      } else {
        total = total + scoreFrame (results[i], results[i + 1], results[i + 2])
      }
    
  }
  return total
} 

