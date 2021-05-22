import { $boolean } from '../../src';
import { mock } from '../mock/';

const { random: mockRandom } = mock;
const { random } = $boolean;

test('$boolean.random', () => {
  // 随机数偏大
  mockRandom(0.9);
  expect(random()).toEqual(true);

  // 随机数临界值
  mockRandom(0.5);
  expect(random()).toEqual(true);

  // 随机数偏小
  mockRandom(0.1);
  expect(random()).toEqual(false);
});
