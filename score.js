function scoreFrame(frameOne, frameTwo, frameThree) {
    //double strike
  if (checkIfStrike(frameOne) && checkIfStrike(frameTwo)) {
    return frameOne[0] + frameTwo[0] + frameThree[0];
    //single strike
  } else if (checkIfStrike(frameOne)) {
    return frameOne[0] + frameTwo[0] + frameTwo[1];
    //spare
  } else if (checkIfSpare(frameOne)) {
    return frameOne[0] + frameOne[1] + frameTwo[0];
    //normal non spare/strike
  } else {
    return frameOne[0] + frameOne[1];
  }
}

function checkIfSpare(frame) {
  return frame[0] + frame[1] === 10;
}

function checkIfStrike(frame) {
  return frame[0] === 10;
}



module.exports = {
  scoreFrame: scoreFrame,
};
