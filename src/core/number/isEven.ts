/**
 * 判断是否为偶数</br>
 * 其他方法见{@link $number}
 *
 * @param num 数字
 * @returns { number } 如果是偶数返回true，否则为false
 */
function isEven(num: number): boolean {
  return (num & 1) === 0;
}

export { isEven };
