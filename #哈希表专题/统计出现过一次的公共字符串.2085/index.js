/**
  给你两个字符串数组 words1 和 words2 ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。

  示例 1：
  输入：words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
  输出：2
  解释：
  - "leetcode" 在两个数组中都恰好出现一次，计入答案。
  - "amazing" 在两个数组中都恰好出现一次，计入答案。
  - "is" 在两个数组中都出现过，但在 words1 中出现了 2 次，不计入答案。
  - "as" 在 words1 中出现了一次，但是在 words2 中没有出现过，不计入答案。
  所以，有 2 个字符串在两个数组中都恰好出现了一次。

  示例 2：
  输入：words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
  输出：0
  解释：没有字符串在两个数组中都恰好出现一次。

  示例 3：
  输入：words1 = ["a","ab"], words2 = ["a","a","a","ab"]
  输出：1
  解释：唯一在两个数组中都出现一次的字符串是 "ab" 。
   
  提示：
  1 <= words1.length, words2.length <= 1000
  1 <= words1[i].length, words2[j].length <= 30
  words1[i] 和 words2[j] 都只包含小写英文字母。

 */

/**
 * 哈希映射
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
let countWords = function(words1, words2) {
  let ans = new Set();
  let map1 = new Map();
  let map2 = new Map();

  let len = Math.max(words1.length, words2.length);
  let i = 0;
  while (i < len) {
    map1.set(words1[i], (map1.get(words1[i]) || 0) + 1);
    map2.set(words2[i], (map2.get(words2[i]) || 0) + 1);
    i++;
  }

  for (const [key, value] of map1) {
    if (value === 1 && map2.get(key) === 1) {
      ans.add(key);
    }
  }


  return Array.from(ans).length;
};

let input =  [["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]]
// let input = [["b","bb","bbb"],["a","aa","aaa"]]
// let input = [["a","ab"], ["a","a","a","ab"]]

let result = countWords(...input);

console.log(result);