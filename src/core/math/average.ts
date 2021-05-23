/**
 * 计算平均数
 *
 * @param args 数字
 * @return 平均数
 */
function average(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b) / args.length;
}

export { average };
