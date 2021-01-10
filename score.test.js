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
  const frame = [4,6]
  const nextFrame = [5, 2]
  const expected = 15
  const actual = score.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

  test('scores a single strike frame', () => {
      const frame = [10, 0]
      const nextFrame = [7, 2]
      const expected = 19
      const actual = score.scoreFrame(frame, nextFrame)
      expect(actual).toBe(expected)
  })

  test('scores a double strike frame', () => {
    const frame = [10, 0]
    const nextFrame = [10, 0]
    const nextNextFrame = [3, 4]
    const expected = 23
    const actual = score.scoreFrame(frame, nextFrame, nextNextFrame)
    expect(actual).toBe(expected)
})


test('game', () => {
  const frames = [
    [2, 7], [3, 2], [3, 5], [6, 0], [6, 4], [2, 7], [1, 7], [5, 4], [1, 6], [4, 1]
  ]
  const expected = 78
  const actual = score.scoreGame(frames)
  expect(actual).toBe(expected)
})


