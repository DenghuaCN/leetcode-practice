/**
  某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。

  给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回 false。

  示例 1：
  输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  输出：true
  解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。

  示例 2：
  输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  输出：false
  解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。

  示例 3：
  输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
  输出：false
  解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中 '∅' 是空白字符，定义为比任何其他字符都小。

  提示：
  1 <= words.length <= 100
  1 <= words[i].length <= 20
  order.length == 26
  在 words[i] 和 order 中的所有字符都是英文小写字母。

 */

/**
 * 要求words的单词顺序符合order给出的字典序。比较每一对相邻单词的「首个同位相异字符」是否符合order给出的字典序，一旦不符合，直接返回false，全部符合才返回true。
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
let isAlienSorted = function(words, order) {

  // 建立字典序
  let dictionary = new Map();
  for (let i = 0; i < order.length; i++) {
    dictionary.set(order[i], i);
  }
  dictionary.set(undefined, -1);

  for (let i = 0; i < words.length - 1; i++) {
    let pre = words[i];
    let next = words[i + 1];

    let len = Math.max(words[i].length, words[i + 1].length);

    for (let j = 0; j < len; j++) {

      console.log(pre[j], dictionary.get(pre[j]), next[j], dictionary.get(next[j]));

      if (pre[j] === next[j]) { // 如果两个单词字母相同，则比较下一个字母
        continue;
      } else if (dictionary.get(next[j]) < dictionary.get(pre[j])) { // 不相同，那么前面单词的索引为[i]的字母，应该比后面单词的索引为[i]的字母的字典序小，否则不满足题意，直接返回
        return false;
      } else {
        break;
      }
      // 如果两个单词长度不等，由于map中保存了undefined的映射，因此指针越界之后依然可以判断
    }
  }


  return true;
};


let input = [["hello","leetcode"], 'hlabcdefgijkmnopqrstuvwxyz'];
// let input = [["word","world","row"], 'worldabcefghijkmnpqstuvxyz'];
// let input = [["apple","app"], 'abcdefghijklmnopqrstuvwxyz'];

let result = isAlienSorted(...input);

console.log(result);