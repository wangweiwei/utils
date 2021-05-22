import { $math } from '../../src/core/';

const { average } = $math;

test('$math.average', () => {
  expect(average(1, 2, 3)).toEqual(2);
});
