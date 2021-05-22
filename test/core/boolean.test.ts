import { $boolean } from '../../src/core/';
import { mock } from '../mock/';

const { random: mockRandom } = mock;
const { random } = $boolean;

test('$boolean.random', () => {
  mockRandom(0.9);
  expect(random()).toEqual(true);
  mockRandom(0.5);
  expect(random()).toEqual(true);
  mockRandom(0.1);
  expect(random()).toEqual(false);
});
