const isWeekday = (date: Date): boolean => {
  return date.getDay() % 6 !== 0;
}

const date = {
  isWeekday
}

export {
  date
}
