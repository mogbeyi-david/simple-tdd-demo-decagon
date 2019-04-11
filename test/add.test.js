const add = require('../functions/add');


test('Tests that the addition of 1 and 2 is 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('Tests that the addition of 1 and 2 is 3', () => {
  expect(add(100, 200)).toBe(300);
});

test('Tests that the addition of 1 and 2 is 3', () => {
  expect(add(-2, -10)).toBe(-12);
});