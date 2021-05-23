/**
 * 数组翻转
 *
 * @param arr 需要翻转的数组
 * @param start 翻转的起始位置
 * @param end 翻转的终止位置
 */
function reverse(arr: any[], start: number, end: number): void {
  while (start < end) {
    [arr[start++], arr[end--]] = [arr[end], arr[start]];
  }
}

export { reverse };
