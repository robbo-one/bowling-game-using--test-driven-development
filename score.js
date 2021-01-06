function scoreFrame (frame, nextFrame, thirdFrame) {
    if (frame.length === 3) {
        if (frame[0] === 10) {
            return 10 + frame[1] + frame[2]
        }
        return 10 + frame[2]
    }    
    if (frame[0] === 10){
        if(nextFrame[0] === 10) {
           return 10 + 10 + thirdFrame[0] 
        }
        return 10 + nextFrame[0] + nextFrame[1]
    } else if (frame[0] + frame[1] === 10) {
        return frame[0] + frame[1] + nextFrame[0]
    } else {
        return frame[0] + frame[1]
    }
}
function scoreGame (game) {
    let totalScore = 0 
    let frameScore = 0
    for (let i = 0; i < game.length; i++) {
        if(!game[i+1]) {
            frameScore = scoreFrame(game[i])
        }
        frameScore = scoreFrame(game[i], game[i+1], game[i+2]) 
        totalScore += frameScore
        // console.log(totalScore)
    }
    return totalScore
}


module.exports = {
    scoreFrame: scoreFrame,
    scoreGame: scoreGame
}