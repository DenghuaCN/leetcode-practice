 /**
  给你一个字符串 s ，字符串的「能量」定义为：只包含一种字符的最长非空子字符串的长度。

  请你返回字符串 s 的 能量。

  示例 1：
  输入：s = "leetcode"
  解释：子字符串 "ee" 长度为 2 ，只包含字符 'e' 。

  示例 2：
  输入：s = "abbcccddddeeeeedcba"
  输出：5
  解释：子字符串 "eeeee" 长度为 5 ，只包含字符 'e' 。
   

  提示：
  1 <= s.length <= 500
  s 只包含小写英文字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
let maxPower = function(s) {
  let ans = 1; // 'abc' 每种字符出现一次

  let i = 0;
  let j = 1;

  while (j < s.length) {
    if (s[i] !== s[j]) {
      ans = Math.max(ans, (j-1) - i + 1);
      i = j;
      j++;
      continue;
    }

    if (j === s.length - 1) {
      ans = Math.max(ans, j - i + 1);
    }
    j++;
  }
  return ans;
};

let input = 'leetcode';
// let input = 'abbcccddddeeeeedcba';
// let input = 'c'
// let input = 'cc'
let result = maxPower(input);

console.log(result);