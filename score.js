function scoreFrame (frame, nextFrame, thirdFrame) {
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


module.exports = {
    scoreFrame: scoreFrame,
}