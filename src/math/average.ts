const average = (...args: number[]): number => {
  return args.reduce((a: number, b: number) => a + b) / args.length
}

export { average }
