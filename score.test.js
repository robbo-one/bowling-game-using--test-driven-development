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
    //arange
    const frame = [4, 6]
    const nextFrame = [3, 1]
    const expected = 13
    //act
    const actual = score.scoreFrame(frame, nextFrame)
    //assert
    expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
    const frame = [10, 0]
    const nextFrame = [4, 2]
    const expected = 16
    const actual = score.scoreFrame(frame, nextFrame)
    expect(actual).toBe(expected)
})