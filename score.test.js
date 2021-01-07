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
  // make a test that factors in the rule of a spare in bowling
  // when you score a spare the next balls score is added to the spare frame
  const frame = [9, 1]
  const nextFrame = [2, 5]
  const expected = 12
  const actual = score.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a single strike frame', () => {
  //make a test that factors in the rules of a strike in bowling
  //when you score a strike the next two balls score is added to the stike frame
  const frame = [10, 0]
  const nextFrame = [4, 5]
  const expected = 19
  const actual = score.scoreFrame(frame, nextFrame)
  expect(actual).toBe(expected)
})

test('scores a double strike frame', () => {
  //make a test that factors in the rules of a strike in bowling
  //when you score a strike the next two balls score is added to the stike frame
  const frame = [10, 0]
  const nextFrame = [10, 0]
  const thirdFrame = [3, 4]
  const expected = 27
  const actual = score.scoreFrame(frame, nextFrame, thirdFrame)
  expect(actual).toBe(expected)
})

// test('scores a game', () => {
//   const totalScore = 64
//   const expected = 64
//   const actual = score.scoresGame(totalScore)
//   expect(actual).toBe(expected)
// })

test('scores a spare in the 10th frame', () => {
  const finalFrame = [9, 1, 1]
  const expected = 11
  const actual = score.spareLastFrame(finalFrame)
  expect(actual).toBe(expected)
  })

  test('scores a strike in the 10th frame', () => {
    const finalFrame = [10, 10, 10]
    const expected = 30
    const actual = score.strikeLastFrame(finalFrame)
    expect(actual).toBe(expected)
    })