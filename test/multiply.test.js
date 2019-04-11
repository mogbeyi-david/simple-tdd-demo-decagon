const multiply = require('../functions/multiply');


test('Multiply 2 and 3 to give 6', () => {
  expect(multiply(2, 3)).toBe(6)
});

test('Multiply 2 and 3 to give 6', () => {
  expect(multiply(10, 30)).toBe(300)
});