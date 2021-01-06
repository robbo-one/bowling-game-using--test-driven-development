function scoreFrame (frame, nextFrame) {
    if (frame[0] + frame[1] === 10) {
        return frame[0] + frame[1] + nextFrame[0]
    } else {
        return frame[0] + frame[1]
    }
}


module.exports = {
    scoreFrame: scoreFrame,
}