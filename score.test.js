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
  const frame = [4, 6]
  const nextFrame = [5, 2]
  const expected = 15

  const actual = score.scoreFrame(frame, nextFrame)

  expect(actual).toBe(expected)
})


test('scores a single strike', () => {
  const frame = [10, 0]
  const nextFrame = [5, 2]
  const expected = 17

  const actual = score.scoreFrame(frame, nextFrame)

  expect(actual).toBe(expected)
})


test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const nextNextFrame = [3, 5]
  const expected = 23

  const actual = score.scoreFrame(frame, nextFrame, nextNextFrame)

  expect(actual).toBe(expected)
})


test('scores a game', () => {
  const frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ] //equals 119 in bowling rules
  const expected = 119

  const actual = score.scoreGame(frames)

  expect(actual).toBe(expected)
})

test('scores a spare in the 10th frame', () => {
  const results = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [6, 4, 6]
  ] //equals 127 in bowling rules
  const expected = 127

  const actual = score.scoreGame(results)

  expect(actual).toBe(expected)
})