/**
  在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

  示例 1:
  输入：s = "abaccdeff"
  输出：'b'

  示例 2:
  输入：s = ""
  输出：' '
   
  限制：
  0 <= s 的长度 <= 50000

 */

/**
 * @param {string} s
 * @return {character}
 */
let firstUniqChar = function(s) {
  let map = new Map();

  let i = 0;
  while (i < s.length) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    i++;
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }

  return ' ';
};

// let input = 'abaccdeff';
let input = " ";
let result = firstUniqChar(input);

console.log(result);