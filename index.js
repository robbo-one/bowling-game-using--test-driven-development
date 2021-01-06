const score = require('./score')

const game = [
    [6, 2],
    [3, 7],
    [1, 0],
    [10, 0],
    [10, 0],
    [3, 6],
    [5, 1],
    [10, 0],
    [3, 4],
    [10, 10, 10]
]
console.log("The total score for this game:\n" + game + "\nis: " + score.scoreGame(game))

