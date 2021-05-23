/**
 * 计算平均数</br>
 * 其他方法见{@link $math}
 *
 * @param args 数字
 * @returns { number } 平均数
 */
function average(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b) / args.length;
}

export { average };
