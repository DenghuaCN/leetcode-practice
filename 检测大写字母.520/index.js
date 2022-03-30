/**
  我们定义，在以下情况时，单词的大写用法是正确的：

  全部字母都是大写，比如 "USA"。
  单词中所有字母都不是大写，比如 "leetcode"。
  如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。
  给你一个字符串 word 。如果大写用法正确，返回 true ；否则，返回 false。

  示例 1：
  输入：word = "USA"
  输出：true

  示例 2：
  输入：word = "FlaG"
  输出：false
   

  提示：
  1 <= word.length <= 100
  word 由小写和大写英文字母组成

 */

/**
 * 面向case编程
 *
 * @param {string} word
 * @return {boolean}
 */
let detectCapitalUse = function(word) {

  let isUpCase = false;
  let isLowerCase = false;
  let isFirstCharUpCase = false;

  let len = word.length;
  let i = 1;
  while (i < len) {
    if (word[i] === word[i].toUpperCase()) {
      isUpCase = true;
    } else if (word[i] === word[i].toLowerCase()){
      isLowerCase = true;
    }
    i++;
  }

  if (word[0] === word[0].toUpperCase()) {
    isFirstCharUpCase = true;
  }

  if (!isFirstCharUpCase && isUpCase) {
    return false;
  } else if (isFirstCharUpCase && isUpCase && isLowerCase) {
    return false;
  }

  return true;
};

// let input = "USA";
// let input = 'apple'
let input = 'FlaG';
// let input = 'mL';
// let input = "Leetcode";

let result = detectCapitalUse(input);
console.log(result);