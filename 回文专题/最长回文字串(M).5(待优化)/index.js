/**
  给你一个字符串 s，找到 s 中最长的回文子串。

  示例 1：
  输入：s = "babad"
  输出："bab"
  解释："aba" 同样是符合题意的答案。

  示例 2：
  输入：s = "cbbd"
  输出："bb"

  示例 3：
  输入：s = "a"
  输出："a"

  示例 4：
  输入：s = "ac"
  输出："a"
   
  提示：
  1 <= s.length <= 1000
  s 仅由数字和英文字母（大写和/或小写）组成

  理解题意： 这题与.409的区别是，无法改变字符串中字符的出现顺序，必须在字符串原顺序下构造
 */

/**
 * 暴力法(写过最垃圾的算法) > 8000ms : )
 *
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function(s) {
  if (s.length === 1) return s;

  let sArr = s.split('');
  let maxStrArr = []; // 子串中最长的字符串数组
  let maxStrLen = 0; // 字串中最长的字符串长度 默认为1(1 <= s.length <= 1000)

  let LEN  = sArr.length;
  let insideLen = Math.floor(LEN / 2);

  // 构造一个以'#'分割奇数数组
  sArr = sArr.map(item => (['#', item]))
  sArr[sArr.length - 1].push('#');
  sArr = sArr.flat(2);

  LEN  = sArr.length;
  insideLen = Math.floor(LEN / 2);


  for (let i = 0; i < LEN; i++) {

    for (let j = 0; j <= insideLen; j++) {

      if (sArr[i - j] !== sArr[i + j]) break;

      let spliceLen = 1 + j * 2;
      if (spliceLen > maxStrLen) {

        maxStrArr = [...sArr].splice(i - j, spliceLen);
        maxStrLen = maxStrArr.length;
      }
    }
  }

  // 最后需要删除‘#’
  maxStrArr = maxStrArr.filter((item) => {
    if (item !== '#') {
       return item;
    }
  })

  return maxStrArr.join('');
};



// let input = "abb";
// let input = "cbbd";
// let input = "a";
// let input = "ac";
// let input = "aaaa";
// let input = "zzzzz";
// let input = "1123";
// let input = "12321";
let input = "32461212";

let result = longestPalindrome(input);

console.log(result);
