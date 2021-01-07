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

test('scores a spare', () => {
  const frame = [7, 3]
  const next = [2, 3]
  const expected = 12
  const actual = score.scoreFrame(frame, next)
  expect(actual).toBe(expected)
})

test('scores a strike', () => {
  const frame = [10, 0]
  const next = [2, 3]
  const expected = 15
  const actual = score.scoreFrame(frame, next)
  expect(actual).toBe(expected)
})

test('scores a double strike', () => {
  const frame = [10, 0]
  const next = [10, 0]
  const nextNextFrame = [2, 3]
  const expected = 22
  const actual = score.scoreFrame(frame, next, nextNextFrame)
  expect(actual).toBe(expected)
})

test('scores a simple game', () => {
  const frames = [
    [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
  ]
  const expected = 64
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('scores a more complex game', () => {
  const frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
  ]
  const expected = 119
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('scores a game with an extra ball in the 10th frame', () => {
  const frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
  ]
  const expected = 141
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('scores a perfect game', () => {
  const frames = [
   [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
  ]
  const expected = 300
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})
