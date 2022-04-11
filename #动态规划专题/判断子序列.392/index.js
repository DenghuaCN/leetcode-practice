/**
  给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

  字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。

  进阶：
  如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

  示例 1：
  输入：s = "abc", t = "ahbgdc"
  输出：true

  示例 2：
  输入：s = "axc", t = "ahbgdc"
  输出：false
   
  提示：
  0 <= s.length <= 100
  0 <= t.length <= 10^4
  两个字符串都只由小写字符组成。
 */

/**
 * 面向Case编程
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isSubsequence2 = function(s, t) {
  if (s === t) {
    return true;
  }

  let tLen = t.length;
  let sLen = s.length;

  let left = 0;
  let sL = 0;

  let right = t.length - 1;
  let sR = s.length - 1;

  while (left < tLen) {
    if (sL > sLen || sR < 0) {
      return true;
    }

    if (t[left] === s[sL]) {
      sL++;
    }
    if (t[right] === s[sR]) {
      sR--;
    }

    left++;
    right--;
  }

  if (sL > sLen || sR < 0) {
    return true;
  }

  return false;
};

let isSubsequence = function(s, t) {
  let sLen = s.length,
      tLen = t.length,
      i = 0,
      j = 0;

  while (i < sLen && j < tLen) {
    if (t[j] === s[i]) {
      i++;
    }

    j++;
  }

  return i === sLen;
};



// let input = ['', 'ahbgdc'];
// let input = ['', ''];
// let input = ['a', ''];

// let input = ['bb', "ahbgdc"];
// let input = ['b', 'c'];
let input = ['abc', 'axbxc'];
// let input = ['axc', 'ahbgdc']
// let input = ['ace', 'ahbgdc'];
// let input = ['aabbcc', 'aaaaahbbgdcc'];

let result = isSubsequence(...input);

console.log('result', result);