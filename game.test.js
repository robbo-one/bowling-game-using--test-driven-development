const game = require('./game')

test('test setup working', () => {
  expect(true).toBeTruthy()
})

test('scores a gutterball frame', () => {
  const frame = [0, 0]
  const expected = 0
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})

test('scores a normal frame', () => {
  const frame = [2, 3]
  const expected = 5
  const actual = game.scoreFrame(frame)
  expect(actual).toBe(expected)
})
test('scores a spare frame', () => {
  const frame = [7, 3]
  const nextFrame = [3, 2]
  const expected = 13
  const actual = game.scoreFrame(frame,nextFrame)
  expect(actual).toBe(expected)
})
test('scores a single strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [3, 2]
  const expected = 15
  const actual = game.scoreFrame(frame,nextFrame)
  expect(actual).toBe(expected)
})
test('scores a double strike frame', () => {
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [5, 1]
  const expected = 25
  const actual = game.scoreFrame(frame,nextFrame,thirdFrame)
  expect(actual).toBe(expected)
})
test('scores a game', () => {
 const score = [[1,2],[2,6],[4,2],[5,2],[5,1],[6,3],[2,1],[5,3],[4,2],[5,1]]
  const expected = 62
  const actual = game.scoreGame(score)
  expect(actual).toBe(expected)
})