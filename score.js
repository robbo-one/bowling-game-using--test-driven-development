function gameScore(frames) {
    let total = 0;
    for (let i = 0; i < frames.length; i++) {
        if (i === frames.length - 2) {
            total += scoreTwoFrames(frames[i], frames[i + 1]);
        } else if (i === frames.length - 1) {
            total += normalBowl(frames[i]);
        } else {
            total += scoreFrame(frames[i], frames[i + 1], frames[i + 2]);
        }
    }
    return total;
}


function scoreFrame(frameOne, frameTwo, frameThree) {
    //double strike
  if (checkIfStrike(frameOne) && checkIfStrike(frameTwo)) {
    return frameOne[0] + frameTwo[0] + frameThree[0];
    //single strike
  } else if (checkIfStrike(frameOne)) {
    return strikeBowl(frameOne, frameTwo);
    //spare
  } else if (checkIfSpare(frameOne)) {
    return spareBowl(frameOne, frameTwo);
    //normal non spare/strike
  } else {
    return normalBowl(frameOne);
  }
}

function checkIfSpare(frame) {
  return frame[0] + frame[1] === 10;
}

function checkIfStrike(frame) {
  return frame[0] === 10;
}

function scoreTwoFrames(frameOne, frameTwo) {
    //single strike
    if (checkIfStrike(frameOne)) {
    return strikeBowl(frameOne, frameTwo)
    //spare
  } else if (checkIfSpare(frameOne)) {
    return spareBowl(frameOne, frameTwo);
    //normal non spare/strike
  } else {
    return normalBowl(frameOne);
  }
}

function strikeBowl(frameOne, frameTwo) {
    return frameOne[0] + frameTwo[0] + frameTwo[1];

}

function spareBowl(frameOne, frameTwo) {
    return frameOne[0] + frameOne[1] + frameTwo[0];
}

function normalBowl(frameOne) {
    return frameOne[0] + frameOne[1];
}

module.exports = {
  scoreFrame: scoreFrame,
  gameScore: gameScore
};
