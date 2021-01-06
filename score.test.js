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
  const frame = [5,5]
  const secondFrame = [2, 6]
  const expected = 12
  const actual = score.scoreFrame(frame, secondFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  const frame = [10,0]
  const secondFrame = [2,2]
  const expected = 14
  const actual = score.scoreFrame (frame, secondFrame)
  expect (actual).toBe (expected)
})

test('scores a double strike frame', () => {
  const frame = [10,0]
  const secondFrame = [10,0]
  const thirdFrame = [2,6]
  const expected = 22
  const actual = score.scoreFrame (frame, secondFrame, thirdFrame)
  expect(actual).toBe(expected)
})

test('scores a game', () => { 
  const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]]
  const expected = 119
  const actual = score.scoreGame (frames)
  expect (actual).toBe(expected)
})

test('scores a spare in the 10th frame', () => {
  const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [2, 8, 8]]
  const expected = 129
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})

test('scores a strike in the 10th frame', () => {
  const frames = [[1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]]
  const expected = 141
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})

//perfect score to test [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10] 300
//expected 300
