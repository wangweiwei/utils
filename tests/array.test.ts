import { $array as array } from '../src'

const { reverse } = array;

test('方法将数组中元素的位置颠倒，并返回该数组', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  reverse(arr, 0, arr.length - 1)
  expect(arr).toEqual(arr.reverse());
  reverse(arr, 0, 1)
  expect(arr).toEqual([2, 1, 3, 4, 5, 6, 7]);
})
