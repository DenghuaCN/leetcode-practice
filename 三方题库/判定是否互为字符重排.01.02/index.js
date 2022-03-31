/**
  给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

  示例 1：
  输入: s1 = "abc", s2 = "bca"
  输出: true

  示例 2：
  输入: s1 = "abc", s2 = "bad"
  输出: false

  说明：
  0 <= len(s1) <= 100
  0 <= len(s2) <= 100
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let CheckPermutation = function(s1, s2) {
  if (s1.length !== s2.length) return false;

  let s1Map = new Map(),
      s2Map = new Map();

  // 计数
  for (let i = 0; i < s1.length; i++) {
    if (s1Map.has(s1[i])) {
      s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
    } else {
      s1Map.set(s1[i], 1);
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (s2Map.has(s2[j])) {
      s2Map.set(s2[j], s2Map.get(s2[j]) + 1);
    } else {
      s2Map.set(s2[j], 1);
    }
  }

  for (const [key, value] of s1Map) {
    if (!s2Map.has(key) || s2Map.get(key) !== value) { // 两个字符串不存在相同字符 OR 两个字符出现次数不相同
      return false;
    }
  }

  return true;
};

let input = ['abc', 'bca'];
// let input = ['abc', 'bad'];
let result = CheckPermutation(...input);

console.log(result);