/**
  给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

  换句话说，s1 的排列之一是 s2 的 子串 。

  示例 1：
  输入：s1 = "ab" s2 = "eidbaooo"
  输出：true
  解释：s2 包含 s1 的排列之一 ("ba").

  示例 2：
  输入：s1= "ab" s2 = "eidboaoo"
  输出：false
   
  提示：
  1 <= s1.length, s2.length <= 10^4
  s1 和 s2 仅包含小写字母
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let checkInclusion = function(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  let onlyReadMap = new Array(26).fill(0);
  let alterableMap = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) { // 扫描范围为s1的长度
    onlyReadMap[s1[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计s1的字符种类与次数

    alterableMap[s2[i].charCodeAt() - 'a'.charCodeAt()]++; // 统计s2的字符种类与次数
  }

  if (onlyReadMap.toString() === alterableMap.toString()) { // 在s2的 [0, s1.length] 区间内满足条件
    return true;
  }

  let k = s1.length; // 初始窗口大小为s1字符串长度
  while (k < s2.length) {
    alterableMap[s2[k].charCodeAt() - 'a'.charCodeAt()] += 1; // 窗口右边界
    alterableMap[s2[k - s1.length].charCodeAt() - 'a'.charCodeAt()] -= 1; // 窗口左边界

    if (onlyReadMap.toString() === alterableMap.toString()) {
      return true;
    }
    k++;
  }
  return false;
};

// let input = ["ab", "eidbaooo"]; // e i d b a
let input = ["a","ab"];
// let input = ["ab", "eidbaooo"];
// let input = ["ab","eidboaoo"];

let r = checkInclusion(...input);

console.log(r);