/**
 * 字符串翻转</br>
 * 其他方法见{@link $string}
 *
 * @param str 需要翻转的字符串
 * @returns { string } 翻转后的字符串
 */
function reverse(str: string): string {
  // return str.split('').reverse().join('')
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

export { reverse };
