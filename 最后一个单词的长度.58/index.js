/**
  给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。

  单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

  示例 1：
  输入：s = "Hello World"
  输出：5

  示例 2：
  输入：s = "   fly me   to   the moon  "
  输出：4

  示例 3：
  输入：s = "luffy is still joyboy"
  输出：6

  提示：

  1 <= s.length <= 104
  s 仅有英文字母和空格 ' ' 组成
  s 中至少存在一个单词
 */

/**
 * 反向遍历
 * 能快20ms呢! : )
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
  let reg = /[a-zA-Z]/;
  let sArr = s.split('');

  let lastIndexStart = -1;
  let lastIndexEnd = -1;

  for (let i = sArr.length - 1; i >= 0; i--) {
    if (lastIndexStart === -1 && reg.test(sArr[i])) {
      lastIndexStart = i;
      lastIndexEnd = i;
    } else if (lastIndexStart !== 0 && reg.test(sArr[i])){
      lastIndexEnd = i;
    }


    if (lastIndexStart !== -1 && !reg.test(sArr[i])) {
      lastIndexEnd = i + 1;
      break;
    }
  }


  let result = sArr.splice(lastIndexEnd, lastIndexStart - lastIndexEnd + 1);

  return result.join('').length;
}


/**
 * API战士
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWordApi = function(s) {
  let nStr = s.trim();
  let sArr = nStr.split(' ');

  return sArr[sArr.length - 1].length;
};


/**
 * 炒鸡慢...
 * 愚蠢的正向遍历：）反向遍历不快很多吗？？？！！！
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWordSlowly = function(s) {
  let sArr = s.split('');
  let reg = /[a-zA-Z]/;

  let singleWord = [];
  let start = -1;
  let end = -1;

  for (let i = 0; i < sArr.length; i++) {
    if (start === -1 && reg.test(sArr[i])) {
      start = i;
      end = i; // 有可能为一个字母，此时需要两个指针都指向字母
    } else if (start !== -1 && reg.test(sArr[i])) {
      end = i;
    }

    if (!reg.test(sArr[i]) && start !== -1 || i === sArr.length - 1 && start !== -1) { // 已经存在一个起始点，并且找到一个空格，说明此时已经可以确认一个单词或字母
      let newStrArr = [...sArr];
      let oneWord = newStrArr.splice(start, (end - start) + 1);

      singleWord.push(oneWord.join(''));

      start = -1;
      end = -1;
    }
  }

  let length = singleWord[singleWord.length - 1].length;
  console.log(singleWord[singleWord.length - 1]);
  return length;
};


// let input = "Hello World"
let input = "df day"
// let input = " a"


let result = lengthOfLastWord(input);

console.log(result);