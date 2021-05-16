const toFixed = (num: number, fixed: number): number => {
  return ~~(Math.pow(10, fixed) * num) / Math.pow(10, fixed);
}

export { 
  toFixed
}
