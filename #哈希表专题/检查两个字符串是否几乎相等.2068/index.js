/**
  如果两个字符串 word1 和 word2 中从 'a' 到 'z' 每一个字母出现频率之差都 不超过 3 ，那么我们称这两个字符串 word1 和 word2 几乎相等 。

  给你两个长度都为 n 的字符串 word1 和 word2 ，如果 word1 和 word2 几乎相等 ，请你返回 true ，否则返回 false 。

  一个字母 x 的出现 频率 指的是它在字符串中出现的次数。

  示例 1：
  输入：word1 = "aaaa", word2 = "bccb"
  输出：false
  解释：字符串 "aaaa" 中有 4 个 'a' ，但是 "bccb" 中有 0 个 'a' 。
  两者之差为 4 ，大于上限 3 。


  示例 2：
  输入：word1 = "abcdeef", word2 = "abaaacc"
  输出：true
  解释：word1 和 word2 中每个字母出现频率之差至多为 3 ：
  - 'a' 在 word1 中出现了 1 次，在 word2 中出现了 4 次，差为 3 。
  - 'b' 在 word1 中出现了 1 次，在 word2 中出现了 1 次，差为 0 。
  - 'c' 在 word1 中出现了 1 次，在 word2 中出现了 2 次，差为 1 。
  - 'd' 在 word1 中出现了 1 次，在 word2 中出现了 0 次，差为 1 。
  - 'e' 在 word1 中出现了 2 次，在 word2 中出现了 0 次，差为 2 。
  - 'f' 在 word1 中出现了 1 次，在 word2 中出现了 0 次，差为 1 。


  示例 3：
  输入：word1 = "cccddabba", word2 = "babababab"
  输出：true
  解释：word1 和 word2 中每个字母出现频率之差至多为 3 ：
  - 'a' 在 word1 中出现了 2 次，在 word2 中出现了 4 次，差为 2 。
  - 'b' 在 word1 中出现了 2 次，在 word2 中出现了 5 次，差为 3 。
  - 'c' 在 word1 中出现了 3 次，在 word2 中出现了 0 次，差为 3 。
  - 'd' 在 word1 中出现了 2 次，在 word2 中出现了 0 次，差为 2 。


  提示：
  n == word1.length == word2.length
  1 <= n <= 100
  word1 和 word2 都只包含小写英文字母。
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
let checkAlmostEquivalent = function(word1, word2) {
  let totalSet = new Set([...Array.from(word1), ...Array.from(word2)]);
  let word1Map = new Map();
  let word2Map = new Map();

  let i = 0;
  while (i < word1.length) {
    word1Map.set(word1[i], (word1Map.get(word1[i]) || 0) + 1);
    word2Map.set(word2[i], (word2Map.get(word2[i]) || 0) + 1);
    i++;
  }

  for (const key of totalSet) {
    let w1 = word1Map.get(key) || 0;
    let w2 = word2Map.get(key) || 0;

    if (Math.abs(w1 - w2) > 3) {
      return false;
    }
  }

  return true;
};

// let input = ['aaaa', 'bccb'];
// let input = ['abcdeef', 'abaaacc'];
let input = ['cccddabba', 'babababab'];
let result = checkAlmostEquivalent(...input);

console.log(result);
