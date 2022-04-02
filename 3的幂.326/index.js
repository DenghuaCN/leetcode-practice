/**
  给定一个整数，写一个函数来判断它是否是 3 的幂次方。如果是，返回 true ；否则，返回 false 。

  整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x

   
  示例 1：
  输入：n = 27
  输出：true

  示例 2：
  输入：n = 0
  输出：false

  示例 3：
  输入：n = 9
  输出：true

  示例 4：
  输入：n = 45
  输出：false

  提示：

  -2^31 <= n <= 2^31 - 1
 */

/**
 * 连除法，最后的商为1则为3的整数幂
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
  if (n / 3 === 1 || n === 1) {
    return true;
  } if (n === 0 || n % 3 !== 0) { // n === 0 或 余数不为3则不为3的整数次幂
    return false;
  }
  return isPowerOfThree(n / 3);
};

// let input = 45;
let input = 1; // 特殊case，3的0次幂为1 : )

let result = isPowerOfThree(input);

console.log(result);