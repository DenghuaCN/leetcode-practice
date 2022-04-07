/**
  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

  注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

  坑!: "a"与"a"也同为字母异位词

  示例 1:
  输入: s = "anagram", t = "nagaram"
  输出: true

  示例 2:
  输入: s = "rat", t = "car"
  输出: false
   
  提示:

  1 <= s.length, t.length <= 5 * 10^4
  s 和 t 仅包含小写字母

  进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sMap = new Map();
  let tMap = new Map();

  let len = s.length;
  let i = 0;

  while (i < len) {
    const CUR_S = s[i];
    const CUR_T = t[i];

    if (sMap.has(CUR_S)) {
      sMap.set(CUR_S, sMap.get(CUR_S) + 1);
    } else {
      sMap.set(CUR_S, 1);
    }

    if (tMap.has(CUR_T)) {
      tMap.set(CUR_T, tMap.get(CUR_T) + 1);
    } else {
      tMap.set(CUR_T, 1);
    }
    i++;
  }

  // 遍历map，每一个字符是否均存在于两个够map中，且出现次数相同。
  for (const [key, value] of sMap) {
    if (!tMap.has(key) || tMap.get(key) !== value) {
      return false;
    }
  }

  return true;
};

let input = ['anagram', 'nagaram'];
// let input = ['a', 'a'];
let result = isAnagram(...input);

console.log(result);