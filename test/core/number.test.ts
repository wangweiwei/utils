import { $number } from '../../src/core/';

const { isEven, toFixed } = $number;

test('$number.isEven', () => {
  expect(isEven(1)).toEqual(false);
  expect(isEven(2)).toEqual(true);
});

test('$number.toFixed', () => {
  expect(toFixed(1.123, 2)).toEqual(1.12);
});
