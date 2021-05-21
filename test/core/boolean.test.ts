import { $boolean } from '../../src/core/';

const { random } = $boolean;

function mockRandom(num: number) {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => num;
  global.Math = mockMath;
}

test('$boolean.random', () => {
  mockRandom(0.9);
  expect(random()).toEqual(true);
  mockRandom(0.5);
  expect(random()).toEqual(true);
  mockRandom(0.1);
  expect(random()).toEqual(false);
});
