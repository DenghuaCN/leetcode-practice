/**
  给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。
  数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。

  case1
    input: word1 = ["ab", "c"], word2 = ["a", "bc"]
    output: true

    word1 表示的字符串为 "ab" + "c" -> "abc"
    word2 表示的字符串为 "a" + "bc" -> "abc"
    两个字符串相同，返回 true

  case2
    input: word1 = ["a", "cb"], word2 = ["ab", "c"]
    output: false

  case3
    input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
    output: true

  提示:
  1 <= word1.length, word2.length <= 10^3
  1 <= word1[i].length, word2[i].length <= 10^3
  1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3
  word1[i] 和 word2[i] 由小写字母组成
 */



/**
 * 解法1
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
let arrayStringsAreEqual = function (word1, word2) {
  let wordStr1 = word1.join("");
  let wordStr2 = word2.join("");

  return wordStr1 === wordStr2;
};

/**
 * 解法2
 */
let arrayStringsAreEqual2 = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  let j = 0;

  while (p1 < word1.length && p2 < word2.length) {

    // 字符比对，不想等直接退出循环
    if (word1[p1][i] !== word2[p2][j]) {
      return false;
    }

    // 移动指针
    i++;
    if (i === word1[p1].length) { // i指针到当前字符串末尾
      p1++; // word1下一个字符串
      i = 0; // i指针归0
    }

    j++;
    if (j === word2[p2].length) {
      p2++; // word2下一个字符串
      j = 0; // j指针归0
    }
  }

  return p1 === word1.length && p2 === word2.length;
}


let input1 = [["ab", "c"], ["a", "bc"]];
let result1 = arrayStringsAreEqual(input1[0], input1[1]); // true

let input2 = [["a", "cb"], ["ab", "c"]];
let result2 = arrayStringsAreEqual(input2[0], input2[1]); // false

let input3 = [["abc", "d", "defg"], ["abcddefg"]];
let result3 = arrayStringsAreEqual(input3[0], input3[1]); // true

console.log(result1, result2, result3);