import { $array } from '../../src/core/';

const { reverse } = $array;

test('$array.reverse', () => {
  // 全部翻转
  let arr = [1, 2, 3, 4, 5, 6, 7];
  reverse(arr, 0, arr.length - 1);
  expect(arr).toEqual([7, 6, 5, 4, 3, 2, 1]);

  // 部分翻转
  arr = [1, 2, 3, 4, 5, 6, 7];
  reverse(arr, 0, 1);
  expect(arr).toEqual([2, 1, 3, 4, 5, 6, 7]);
});
