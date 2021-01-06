function scoreFrame(frameOne, frameTwo) {
    if(checkIfSpare(frameOne)) {
        return frameOne[0] + frameOne[1] + frameTwo[0];
    } else {
        return frameOne[0] + frameOne[1];
    }
    
}

function checkIfSpare(frame) {
    return frame[0] + frame[1] === 10;
}


module.exports = {
    scoreFrame: scoreFrame
}