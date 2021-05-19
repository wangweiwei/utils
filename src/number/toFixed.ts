const toFixed = (num: number, digits: number): number => {
  return Math.floor(Math.pow(10, digits) * num) / Math.pow(10, digits)
}

export { toFixed }
