const subtract = require('../functions/subtract');

test('should subtract 10 from 20 and give 10 as the answer', () => {
  expect(subtract(20, 10)).toBe(10);
});


test('should subtract 10 from 20 and give 10 as the answer', () => {
  expect(subtract(-20, -10)).toBe(-10);
});