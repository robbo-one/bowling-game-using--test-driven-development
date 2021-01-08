const score = require('./score')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const nextFrame = [0, 0]
  const thirdFrame = [1, 2]
  const expected = 0
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const nextFrame = [0, 0]
  const thirdFrame = [1, 2]
  const expected = 5
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a spare frame', () => {
  const frame = [4, 6]
  const nextFrame = [2, 1]
  const thirdFrame = [1, 2]
  const expected = 12
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [5, 1]
  const thirdFrame = [1, 2]
  const expected = 16
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [1, 2]
  const expected = 23
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a game', () => {
  const fullGame =  [
       [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
    ]
  const expected = 141
  const actual = score.scoreGame(fullGame)
  expect(actual).toBe(expected)
})

