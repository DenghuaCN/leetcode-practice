/**
  有个内含单词的超大文本文件，给定任意两个不同的单词，找出在这个文件中这两个单词的最短距离(相隔单词数)。
  如果寻找过程在这个文件中会重复多次，而每次寻找的单词不同，你能对此优化吗?

  示例：
  输入：words = ["I","am","a","student","from","a","university","in","a","city"], word1 = "a", word2 = "student"
  输出：1

  提示：
  words.length <= 100000
 */

/**
 * 暴力搜寻
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
let findClosest2 = function(words, word1, word2) {
  let min = Number.MAX_VALUE;
  let first = '';
  let second = '';

  let i = 0;
  while (i < words.length) {
    if (words[i] === word1 || words[i] === word2) {
      first = words[i];
      if (first === word1) {
        second = word2;
      } else if (first === word2) {
        second = word1;
      }


      let j = i + 1;
      while (j < words.length) {
        if (words[j] === second) {
          min = Math.min(min, Math.abs(j - i));
          break;
        }
        j++;
      }
    }
    i++;
  }

  return min;
};

// 优化
let findClosest = function(words, word1, word2) {
  let first = Number.MAX_VALUE;
  let last = Number.MAX_VALUE;
  let min = Number.MAX_VALUE;

  let i = 0;
  while (i < words.length) {
    if (words[i] === word1) {
      first = i;
      min = Math.min(min, Math.abs(last - first));
    }

    if (words[i] === word2) {
      last = i;
      min = Math.min(min, Math.abs(last - first));
    }

    i++;
  }

  return min;
};


let input = [["I","am","a","student","from","a","university","in","a","city"], "a", "student"];
// let input = [["I","am","a","student","from","a","university","in","a","city"], "a", "from"];

let result = findClosest(...input);

console.log(result);