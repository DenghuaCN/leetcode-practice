/**
给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。

美式键盘 中：

第一行由字符 "qwertyuiop" 组成。
第二行由字符 "asdfghjkl" 组成。
第三行由字符 "zxcvbnm" 组成。

示例 1：
输入：words = ["Hello","Alaska","Dad","Peace"]
输出：["Alaska","Dad"]

示例 2：
输入：words = ["omk"]
输出：[]

示例 3：
输入：words = ["adsdf","sfd"]
输出：["adsdf","sfd"]

提示：
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] 由英文字母（小写和大写字母）组成

 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords2 = function(words) {
  let firstRowSet = new Set(['q', 'Q', 'w', 'W', 'e', 'E', 'r', 'R', 't', 'T', 'y', "Y", 'u', 'U', 'i', 'I', 'o', 'O', 'p', 'P']) // qwertyuiop
  let secondRowSet = new Set(['a', 'A','s','S','d','D','f','F','g','G','h','H','j','J','k','K','l','L']) // asdfghjkl
  let thirdRowSet = new Set(['z','Z','x','X','c','C','v','V','b','B','n','N','m','M']); // zxcvbnm

  let ans = [];

  let isAllInMap = (set, word) => {
    let i = 1;
    while (i < word.length) {
      if (!set.has(word[i])) {
        return false;
      }
      i++
    }
    return true;
  }

  for (let i = 0; i < words.length; i++) {
    let curWord = words[i];

    if (firstRowSet.has(curWord[0])) {
      if (isAllInMap(firstRowSet, curWord)) {
        ans.push(curWord);
      }
      continue;
    } else if (secondRowSet.has(curWord[0])) {
      if (isAllInMap(secondRowSet, curWord)) {
        ans.push(curWord);
      }
      continue;
    } else if (thirdRowSet.has(curWord[0])) {
      if (isAllInMap(thirdRowSet, curWord)) {
        ans.push(curWord);
      }
      continue;
    }
  }

  return ans;
};


/**
 * 参考题解
 * 为每一个英文字母标记其对应键盘上的行号，然后检测字符串中所有字符对应的行号是否相同。
 * 1. 预处理计算出每个字符对应的行号。
 * 2. 遍历字符串时，统一将大写字母转化为小写字母方便计算。
 */
let findWords = function(words) {
  const list = [];
  const rowIdx = "12210111011122000010020202";
  for (const word of words) {
      let isValid = true;
      const idx = rowIdx[word[0].toLowerCase().charCodeAt() - 'a'.charCodeAt()];
      for (let i = 1; i < word.length; ++i) {
          if (rowIdx[word[i].toLowerCase().charCodeAt() - 'a'.charCodeAt()] !== idx) {
              isValid = false;
              break;
          }
      }
      if (isValid) {
          list.push(word);
      }
  }
  return list;
};


let input = ["Hello","Alaska","Dad","Peace"];
// let input =  ["omk"];
// let input = ["adsdf","sfd"];
let result = findWords(input);

console.log(result);
