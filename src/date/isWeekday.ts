const isWeekday = (date: Date): boolean => {
  return date.getDay() % 6 !== 0;
}

export {
  isWeekday
}
