const reverse = (array: [], start: number, end: number): void => {
  while (start < end) {
    [array[start++], array[end--]] = [array[end], array[start]];
  }
};

export { reverse };
