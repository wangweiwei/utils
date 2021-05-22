import { $date } from '../../src/core/';

const { isWeekday } = $date;

test('$date.isWeekday', () => {
  expect(isWeekday(new Date('2021-05-17T00:00:00'))).toEqual(true);
  expect(isWeekday(new Date('2021-05-18T00:00:00'))).toEqual(true);
  expect(isWeekday(new Date('2021-05-19T00:00:00'))).toEqual(true);
  expect(isWeekday(new Date('2021-05-20T00:00:00'))).toEqual(true);
  expect(isWeekday(new Date('2021-05-21T00:00:00'))).toEqual(true);
  expect(isWeekday(new Date('2021-05-22T00:00:00'))).toEqual(false);
  expect(isWeekday(new Date('2021-05-23T00:00:00'))).toEqual(false);
});
