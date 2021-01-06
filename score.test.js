const score = require('./score')

test('test setup working', () => {
    expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
    const frame = [0, 0]
    const expected = 0
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
    const frame = [2, 3]
    const expected = 5
    const actual = score.scoreFrame(frame)
    expect(actual).toBe(expected)
  })

  test('scores a spare frame', () => {
    const frameOne = [8, 2]
    const frameTwo = [3, 3]

    const expected = 13
    const actual = score.scoreFrame(frameOne, frameTwo)
    expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
    const frameOne = [10, 0]
    const frameTwo = [4, 3]
    
    const expected = 17
    const actual = score.scoreFrame(frameOne, frameTwo)
    expect(actual).toBe(expected)

})

test('scores a double strike frame', () => {
    const frameOne = [10, 0]
    const frameTwo = [10,0]
    const frameThree = [6, 8]
    
    const expected = 26
    const actual = score.scoreFrame(frameOne, frameTwo, frameThree)
    expect(actual).toBe(expected)
})

test('scores a game', () => {
    const frames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
    ]

    const expected = 119
    const actual = score.gameScore(frames)
    expect(actual).toBe(expected)
})

