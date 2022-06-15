/**
  给你一个字符串 num ，表示一个大整数。请你在字符串 num 的所有 非空子字符串 中找出 值最大的奇数 ，并以字符串形式返回。如果不存在奇数，则返回一个空字符串 "" 。

  子字符串 是字符串中的一个连续的字符序列。

  示例 1：
  输入：num = "52"
  输出："5"
  解释：非空子字符串仅有 "5"、"2" 和 "52" 。"5" 是其中唯一的奇数。

  示例 2：
  输入：num = "4206"
  输出：""
  解释：在 "4206" 中不存在奇数。

  示例 3：
  输入：num = "35427"
  输出："35427"
  解释："35427" 本身就是一个奇数。
   
  提示：
  1 <= num.length <= 10^5
  num 仅由数字组成且不含前导零
 */

/**
 * @param {string} num
 * @return {string}
 */
let largestOddNumber = function(num) {

  let i = num.length - 1;
  while (i >= 0) {
    if (num[i] & 1 === 1) {
      return num.slice(0, i+1);
    }
    i--;
  }

  return '';
};

let input = '52';
// let input = '4206';
// let input = '35427';
// let input = "239537672423884969653287101";

let result = largestOddNumber(input);

console.log(result);

// console.log(Number.isSafeInteger(239537672423884969653287101)); // false 精度会丢失!
/**
 * 思路:
 *
 * 不需要先截取字符串再判断，直接判断最后一位数即可。
 *
 * 并且也无法使用截取子串后判读的方式，用例: '239537672423884969653287101'已经超过了javascript的整数表示范围
 *
 */