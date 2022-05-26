/**
  给定一个字符串 s ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

  示例 1：
  输入：s = "Let's take LeetCode contest"
  输出："s'teL ekat edoCteeL tsetnoc"

  示例 2:
  输入： s = "God Ding"
  输出："doG gniD"
   
  提示：
  1 <= s.length <= 5 * 10^4
  s 包含可打印的 ASCII 字符。
  s 不包含任何开头或结尾空格。
  s 里 至少 有一个词。
  s 中的所有单词都用一个空格隔开。

 */

/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
  let sArr = s.split(' '); // 根据空格分词

  let i = 0;
  while (i < sArr.length) {
    let charArr = sArr[i].split('');

    let left = 0;
    let right = charArr.length - 1;
    while (left <= right) {
      let tmp = charArr[left];
      charArr[left] = charArr[right];
      charArr[right] = tmp;
      left++;
      right--;
    }

    sArr[i] = charArr.join('');
    i++;
  }

  return sArr.join(' ')
};

let input = "Let's take LeetCode contest";
// let input = "God Ding";

let result = reverseWords(input);