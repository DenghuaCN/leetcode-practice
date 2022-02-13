/**
  给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
  字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。

  示例 1：
  输入：text = "nlaebolko"
  输出：1

  示例 2：
  输入：text = "loonbalxballpoon"
  输出：2

  示例 3：
  输入：text = "leetcode"
  输出：0

  提示：
  1 <= text.length <= 10^4
  text 全部由小写英文字母组成

  balloon
  b:1 a:1 l:2 o:2 n:1
 */

/**
 * @param {string} text
 * @return {number}
 */
let maxNumberOfBalloons = function(text) {
  const cnt = new Array(5).fill(0);

  for (const char of text) {
      if (char === 'b') {
          cnt[0]++;
      } else if (char === 'a') {
          cnt[1]++;
      } else if (char === 'l') {
          cnt[2]++;
      } else if (char === 'o') {
          cnt[3]++;
      } else if (char === 'n') {
          cnt[4]++;
      }
  }
  cnt[2] = Math.floor(cnt[2] / 2);
  cnt[3] = Math.floor(cnt[3] / 2);

  return Math.min(...cnt);
};

let input = 'nlaebolko';
let result = maxNumberOfBalloons(input);

console.log(result);