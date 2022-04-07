/**
  给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

  示例 1:
  输入: s = "aba"
  输出: true

  示例 2:
  输入: s = "abca"
  输出: true
  解释: 你可以删除c字符。

  示例 3:
  输入: s = "abc"
  输出: false

  提示:
  1 <= s.length <= 105
  s 由小写英文字母组成
*/

/**
 *
 * @param {string} s
 * @param {number} left
 * @param {number} right
 */
let isPalindrome = (s, left, right) => {
  let i = left;
  let j = right;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

/**
 * 暴力!暴力!!
 *
 * @param {string} s
 * @return {boolean}
 */
let validPalindrome = function(s) {
  let sArr = s.split('');

  let left = 0;
  let right = sArr.length - 1;

  while (left <= right) {
    if (sArr[left] === sArr[right]) {
      left++;
      right--;
    } else  {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1); // 删除一个字符是否能构成回文，
    }

  }

  return true;
};

let input = "bebeb";
let result = validPalindrome(input);

console.log(result);
