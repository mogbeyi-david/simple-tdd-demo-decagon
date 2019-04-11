const concatenate = require('../functions/concatenate');

test('that cat and dog should output cat dog', () => {
  expect(concatenate('cat', 'dog')).toBe('cat dog')
});

test('that cat and dog should output cat dog', () => {
  expect(concatenate('decagon', 'institute')).toBe('decagon institute')
});