module.exports = {
    scoreFrame: scoreFrame,
    scoreGame: scoreGame
  }
  
  function frameSum (anyFrame){
    const nextFrameSum = anyFrame.reduce(function(a, b){
      return a + b;
      });
      return nextFrameSum
  }
  
  function scoreGame (game){
    const summedGame = game.map((x, index) => scoreFrame(x, game[index+1], game[index+2]));
    const gameSum = summedGame.reduce(function(a, b){
      return a + b;
      },0);
      return gameSum
  }
  
  function scoreFrame (frame, nextFrame, thirdFrame,){
  const sum = frameSum(frame)
  const isBelowTenFrame = (sum < 10 || nextFrame === undefined) 
  const isSpare = (sum === 10 && frame[0] !== 10)
  const isSingleStrike = (nextFrame !== undefined && frame[0] === 10 && nextFrame[0] !== 10)
  const isDoubleStrike = (nextFrame !== undefined && frame[0] === 10 && nextFrame[0] === 10)
  
  if(isBelowTenFrame){return sum}
  if (isSpare){return sum + nextFrame[0];}
  if (isSingleStrike){return sum + frameSum(nextFrame)}
  if (isDoubleStrike){return sum + frameSum(nextFrame) + thirdFrame[0]}
  }
  