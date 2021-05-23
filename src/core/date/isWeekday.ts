/**
 * 是否为工作日
 *
 * @param date Date实例
 * @returns { boolean } 是工作日则为true，否则为false
 */
function isWeekday(date: Date): boolean {
  return date.getDay() % 6 !== 0;
}

export { isWeekday };
