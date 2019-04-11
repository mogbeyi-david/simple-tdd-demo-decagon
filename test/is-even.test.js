const isEven = require('../functions/is-even');


test('Should return true is 20 is passed', () => {
  expect(isEven(20)).toBeTruthy();
});

test('Should return true is 20 is passed', () => {
  expect(isEven(21)).toBeFalsy();
});