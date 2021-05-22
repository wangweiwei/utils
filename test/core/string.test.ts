import { $string } from '../../src/core/';

const { reverse } = $string;

test('$string.reverse', () => {
  // 正常字符串
  expect(reverse('abc')).toEqual('cba');

  // 无字符串
  expect(reverse('')).toEqual('');

  // 单个字符串
  expect(reverse('a')).toEqual('a');
});
