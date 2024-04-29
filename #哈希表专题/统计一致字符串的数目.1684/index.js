/**
  统计一致字符串的数目.1684

  给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串。
  请你返回 words 数组中 一致字符串 的数目。

  示例 1：
  输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
  输出：2
  解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b'。

  示例 2：
  输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
  输出：7
  解释：所有字符串都是一致的。

  示例 3：
  输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
  输出：4
  解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。


  提示：
  1 <= words.length <= 10^4
  1 <= allowed.length <= 26
  1 <= words[i].length <= 10
  allowed 中的字符 互不相同 。
  words[i] 和 allowed 只包含小写英文字母。

 */

/**
 * 待优化
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
let countConsistentStrings2 = function (allowed, words) {
  let num = 0;
  let allowedSet = new Set(allowed);

  for (let i = 0; i < words.length; i++) {
    const elementSet = new Set(words[i]);

    let isConsisting = true
    for (const letter of elementSet) { // 遍历words[i]字符串集合，并在allowd集合中查找是否存在words[i]集合内元素
      if (!allowedSet.has(letter)) { // 在allowd集合中不存在此元素，则此words[i]集合不满足条件，进行下一个循环
        isConsisting = false;
        break;
      }
    }

    if (isConsisting) {
      num += 1; // words[i]所有字符满足条件，个数+1
    }
  }

  return num;
};


let input = ["ab", ["ad", "bd", "aaab", "baa", "badab"]];
let input2 = ["abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]];
let input3 = ["cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]];

let result = countConsistentStrings(...input2);
console.log(result);