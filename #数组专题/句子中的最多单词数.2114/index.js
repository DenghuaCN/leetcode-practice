/**
  2114. 句子中的最多单词数

  一个 句子 由一些 单词 以及它们之间的单个空格组成，句子的开头和结尾不会有多余空格。
  给你一个字符串数组 sentences ，其中 sentences[i] 表示单个 句子 。
  请你返回单个句子里 单词的最多数目 。

  示例 1：
  输入：sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
  输出：6
  解释：
  - 第一个句子 "alice and bob love leetcode" 总共有 5 个单词。
  - 第二个句子 "i think so too" 总共有 4 个单词。
  - 第三个句子 "this is great thanks very much" 总共有 6 个单词。
  所以，单个句子中有最多单词数的是第三个句子，总共有 6 个单词。

  示例 2：
  输入：sentences = ["please wait", "continue to fight", "continue to win"]
  输出：3
  解释：可能有多个句子有相同单词数。
  这个例子中，第二个句子和第三个句子（加粗斜体）有相同数目的单词数。

  提示：
    1 <= sentences.length <= 100
    1 <= sentences[i].length <= 100
    sentences[i] 只包含小写英文字母和 ' ' 。
    sentences[i] 的开头和结尾都没有空格。
    sentences[i] 中所有单词由单个空格隔开。
 */

/**
 * API大法
 * @param {string[]} sentences
 * @return {number}
 */
let mostWordsFound2 = function (sentences) {
  const LENGTH = sentences.length;
  let maxWord = -Infinity;

  let i = 0;
  while (i < LENGTH) {
    const wordsArr = sentences[i].split(' ');
    wordsArr.length > maxWord ? maxWord = wordsArr.length : null
    i++;
  }

  return maxWord;
};

// 不使用API
let mostWordsFound = function (sentences) {
  let maxWord = -Infinity;
  const SPACE_CODE = 32;
  const LENGTH = sentences.length;

  for (let i = 0; i < LENGTH; i++) {
    const element = sentences[i];
    let spaceNum = 0; // 句子的单词数 = 空格数 + 1
    for (let j = 0; j < element.length; j++) { // 统计句子中的空格
      if (element[j].charCodeAt() === SPACE_CODE) {
        spaceNum++;
      }
    }
    let wordsNum = spaceNum + 1;
    wordsNum > maxWord ? maxWord = wordsNum : null
  }

  return maxWord;
};



let input = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]; // 6
let input2 = ["please wait", "continue to fight", "continue to win"] // 3

let result = mostWordsFound(input);
console.log(result);
