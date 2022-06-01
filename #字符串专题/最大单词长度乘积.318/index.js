/**
  给你一个字符串数组 words ，找出并返回 length(words[i]) * length(words[j]) 的最大值，并且这两个单词不含有公共字母。如果不存在这样的两个单词，返回 0 。

  示例 1：
  输入：words = ["abcw","baz","foo","bar","xtfn","abcdef"]
  输出：16
  解释：这两个单词为 "abcw", "xtfn"。

  示例 2：
  输入：words = ["a","ab","abc","d","cd","bcd","abcd"]
  输出：4
  解释：这两个单词为 "ab", "cd"。

  示例 3：
  输入：words = ["a","aa","aaa","aaaa"]
  输出：0
  解释：不存在这样的两个单词。
   
  提示：
  2 <= words.length <= 1000
  1 <= words[i].length <= 1000
  words[i] 仅包含小写字母

 */

/**
 * 暴力O(n^2)
 * @param {string[]} words
 * @return {number}
 */
let maxProduct2 = function(words) {
  let existCommonChar = (a, b) => {
    let shortStr = a.length > b.length? b : a;
    let longStr = a.length > b.length? a : b;

    let i = 0;
    while (i < shortStr.length) {
      if (longStr.includes(shortStr[i])) {
        return true;
      }
      i++;
    }
    return false;
  }

  let ans = 0;

  let i = 0;
  while (i < words.length) {

    let j = i + 1;
    while (j < words.length) {
      if (!existCommonChar(words[i], words[j])) {
        ans = Math.max(ans, words[i].length * words[j].length);
      }

      j++;
    }
    i++;
  }

  return ans;
};


// let input = ["abcw","baz","foo","bar","xtfn","abcdef"];
// let input = ["a","ab","abc","d","cd","bcd","abcd"];
// let input = ["a","aa","aaa","aaaa"];
let result = maxProduct(input);
console.log(result);


/**
 * 对拍
 */


/**
 * 对拍测试
 */

let fn2 = () => {
  let chars = 'abcdefghijklnmopqrstuvwxyz';

  let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  let getRandomChar = () => {
    return chars[random(0, 25)];
  }

  let getRandomWord = () => {
    let arr = new Array(random(1, 999)).fill('');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = getRandomChar();
    }
    return arr.join('');
  }

  let words = new Array(random(2, 999)).fill();

  for (let i = 0; i < words.length; i++) {
    words[i] = getRandomWord();
  }

  return words;
}

let diff = (fn1, fn2) => {

  let callTime = 1;
  let i = 0;
  while (i < callTime) {
    let input = fn2();
    let result = fn1(input);

    console.log('input', input);
    i++;
  }
}

// diff(maxProduct, fn2)