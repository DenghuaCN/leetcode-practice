/**
  给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

  回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。


  示例 1：
  输入：x = 121
  输出：true

  示例 2：
  输入：x = -121
  输出：false
  解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。

  示例 3：
  输入：x = 10
  输出：false
  解释：从右向左读, 为 01 。因此它不是一个回文数。

  示例 4：
  输入：x = -101
  输出：false
   
  提示：

  -2^31 <= x <= 2^31 - 1

  进阶：你能不将整数转为字符串来解决这个问题吗？
 */

/**
 * @param {number} x
 * @return {boolean}
 */
 let isPalindrome = function(x) {
  if (x < 0) return false; // 任何负数均不是回文数

  if (x >= 0 && x < 10) { // 所有单个数字， 0 ~ 9 均为回文数
    return true;
  }

  // ....

};

// let input = -101;
// let result = isPalindrome(input);

console.log(933339);

/**
 * 933339 % 10 = 9
 * 933339 % 100 = 39
 * 933339 % 1000 = 339
 * 933339 % 10000 = 3339
 * 933339 % 100000 = 33339
 */



/**
 * 常规解法
 *
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome2 = function(x) {
  if (x < 0) return false; // 任何负数均不是回文数

  if (x >= 0 && x < 10) { // 所有单个数字， 0 ~ 9 均为回文数
    return true;
  }

  x = x.toString();
  let left = 0;
  let right = x.length - 1;

  while (left <= right) {
    if (x[left] !== x[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
};