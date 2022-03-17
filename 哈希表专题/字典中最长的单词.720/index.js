/**
  给出一个字符串数组 words 组成的一本英语词典。返回 words 中最长的一个单词，该单词是由 words 词典中其他单词逐步添加一个字母组成。

  若其中有多个可行的答案，则返回答案中字典序最小的单词。若无答案，则返回空字符串。

  示例 1：
  输入：words = ["w","wo","wor","worl", "world"]
  输出："world"
  解释： 单词"world"可由"w", "wo", "wor", 和 "worl"逐步添加一个字母组成。

  示例 2：
  输入：words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
  输出："apple"
  解释："apply" 和 "apple" 都能由词典中的单词组成。但是 "apple" 的字典序小于 "apply"
   
  提示：
  1 <= words.length <= 1000
  1 <= words[i].length <= 30
  所有输入的字符串 words[i] 都只包含小写字母。

 */

/**
 * @param {string[]} words
 * @return {string}
 */
let longestWord2 = function(words) {
  if (words.length === 1) return words[0];

  words = words.sort((a, b) => {return a.length - b.length});
  let wordsSet = new Set(words);
  let ans = [''];


  for (let i = 0; i < words.length; i++) {
    let curWord = words[i];

    let pass = true;
    let j = curWord.length - 1;
    while (j > 0) {
      if (!wordsSet.has(curWord.substring(0, j))) {
        pass = false;
        break;
      }
      j--;
    }


    if (pass) {
      if (curWord.length > ans[ans.length - 1].length) {
        ans = [curWord];
      } else if (curWord.length === ans[ans.length - 1].length) {
        ans.push(curWord);
      }
    }
  }

  return ans.sort()[0];
};

/**
 * 参考题解
 */
let longestWord = function(words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
        return a.length - b.length;
    } else {
        return b.localeCompare(a);
    }
  })

  let longest = "";
  let set = new Set();
  set.add("");

  console.log(words);

  let len = words.length;
  let i = 0;
  while (i < len) {
    const curWord = words[i];
    if (set.has(curWord.slice(0, curWord.length - 1))) {
      set.add(curWord);
      longest = curWord;
    }
    i++;
  }

  return longest;
};


// let input = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
let input = ["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"];
// let input = ["wo","wor","worl","world"];
let result = longestWord(input)

console.log(result);
