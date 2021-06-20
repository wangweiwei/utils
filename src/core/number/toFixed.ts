/**
 * 使用定点表示法来格式化一个数值</br>
 * 其他方法见{@link $number}
 *
 * @param num 数字
 * @param digits 小数点后数字的个数；介于 0 到 20 （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。
 * @returns { number } 使用定点表示法表示给定数字
 */
function toFixed(num: number, digits: number): number {
  return ~~(Math.pow(10, digits) * num) / Math.pow(10, digits);
}

export { toFixed };
