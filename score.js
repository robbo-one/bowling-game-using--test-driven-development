module.exports = {
  scoreFrame: scoreFrame
}


function scoreFrame (frame, nextFrame, thirdFrame){
  //Sum first frame

  const frameSum = frame.reduce(function(a, b){
    return a + b;
});

// Sum second frame
function secondFrameSum (nextFrame){
  const nextFrameSum = nextFrame.reduce(function(a, b){
    return a + b;
    });
    return nextFrameSum
}

//Sum third frame
function thirdFrameSum (thirdFrame){
  const thirdFrameSum = thirdFrame.reduce(function(a, b){
    return a + b;
    });
    return thirdFrameSum
}

//Calculate frame score if no spare or strike
if(frameSum < 10){
  return frameSum
}
// Calculate Spare score
if (frameSum === 10 && frame[0] !== 10){
const spareExtra = nextFrame[0];
return frameSum + spareExtra
}

//Calculate single strike score
if (frame[0] === 10 && nextFrame[0] !== 10){
  nextFrame = secondFrameSum(nextFrame)
    return frameSum + nextFrame
  }

//Calculate double strike score
if (frame[0] === 10 && nextFrame[0] === 10){
  nextFrame = secondFrameSum(nextFrame)
  thirdFrame = thirdFrameSum(thirdFrame)
  return frameSum + nextFrame + thirdFrame
}

}

