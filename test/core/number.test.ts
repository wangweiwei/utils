import { $number } from '../../src';

const { isEven, toFixed } = $number;

test('$number.isEven', () => {
  // 奇数判断
  expect(isEven(1)).toEqual(false);

  // 偶数判断
  expect(isEven(2)).toEqual(true);
});

test('$number.toFixed', () => {
  expect(toFixed(1.123, 2)).toEqual(1.12);
});
