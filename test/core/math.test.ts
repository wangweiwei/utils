import { $math } from '../../src';

const { average } = $math;

test('$math.average', () => {
  expect(average(1, 2, 3)).toEqual(2);
});
