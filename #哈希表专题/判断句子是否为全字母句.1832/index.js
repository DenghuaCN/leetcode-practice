/**
  全字母句 指包含英语字母表中每个字母至少一次的句子。
  给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。
  如果是，返回 true ；否则，返回 false 。

  示例 1：
  输入：sentence = "thequickbrownfoxjumpsoverthelazydog"
  输出：true
  解释：sentence 包含英语字母表中每个字母至少一次。

  示例 2：
  输入：sentence = "leetcode"
  输出：false

  提示：
  1 <= sentence.length <= 1000
  sentence 由小写英语字母组成
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
let checkIfPangram = function(sentence) {
  if (sentence < 26) return false;

  let charSet = new Set();

  let i = 0;
  while (i < sentence.length) {
    charSet.add(sentence[i]);
    i++;
  }
  if (charSet.size === 26) { // 将判断语句放在循环外节省时间
    return true
  };
  return false;
};

let input = 'thequickbrownfoxjumpsoverthelazydog';
// let input = 'leetcode';

let r = checkIfPangram(input);
console.log(r);