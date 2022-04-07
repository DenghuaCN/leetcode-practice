/**
  字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

  示例1:
  输入：s1 = "waterbottle", s2 = "erbottlewat"
  输出：True

  示例2:
  输入：s1 = "aa", s2 = "aba"
  输出：False

  提示：
  字符串长度在[0, 100000]范围内。

  说明:
  你能只调用一次检查子串的方法吗？
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
let isFlipedString = function(s1, s2) {
  let len = s1.length;

  if (s1 === s2) {
    return true
  } else if (len !== s2.length) {
    return false
  };

  let i = 0;
  while (i < len) {
    if (s1 === s2) return true;

    s1 = s1.concat(s1.substring(0, 1)).substring(1);
    i++;
  }

  return false;
};

// let input = ['waterbottle', 'erbottlewat'];
let input = ['aa', 'aba'];
// let input = ['', ''];
let result = isFlipedString(...input);

console.log(result);
