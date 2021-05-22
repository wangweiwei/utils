/**
 * 模拟随机数
 *
 * @param num {number} 需要模拟的随机数
 */
const random = (num: number) => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => num;
  global.Math = mockMath;
};

export { random };
