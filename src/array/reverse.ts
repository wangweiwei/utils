const reverse = (arr: Array<any>, start: number, end: number): void => {
  while (start < end) {
    ;[arr[start++], arr[end--]] = [arr[end], arr[start]]
  }
}

export { reverse }
