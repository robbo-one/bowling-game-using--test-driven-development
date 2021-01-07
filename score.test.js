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
  const fullGame = [[4,2],[0,5],[6,4],[4,6],[10,0],[10,0],[0,0],[5,5],[8,2],[1,9,4]]  
  const expect = 118
  const actual = score.scoreGame(fullGame)
  expect(actual).toBe(expected)
})