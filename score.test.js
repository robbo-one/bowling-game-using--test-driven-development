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