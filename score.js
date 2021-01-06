function scoreFrame(frame) {
    if (frame[0] === 0) {
        return 0;
    } else {
        return 5;
    }
    return 0
}


module.exports = {
    scoreFrame: scoreFrame
}