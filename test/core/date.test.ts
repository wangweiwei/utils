import { $date } from '../../src';

const { isWeekday } = $date;

test('$date.isWeekday', () => {
  // 星期一
  expect(isWeekday(new Date('2021-05-17T00:00:00'))).toEqual(true);
  // 星期二
  expect(isWeekday(new Date('2021-05-18T00:00:00'))).toEqual(true);
  // 星期三
  expect(isWeekday(new Date('2021-05-19T00:00:00'))).toEqual(true);
  // 星期四
  expect(isWeekday(new Date('2021-05-20T00:00:00'))).toEqual(true);
  // 星期五
  expect(isWeekday(new Date('2021-05-21T00:00:00'))).toEqual(true);
  // 星期六
  expect(isWeekday(new Date('2021-05-22T00:00:00'))).toEqual(false);
  // 星期日
  expect(isWeekday(new Date('2021-05-23T00:00:00'))).toEqual(false);
});
