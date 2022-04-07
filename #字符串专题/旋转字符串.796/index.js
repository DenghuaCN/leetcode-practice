/**
  给定两个字符串, s 和 goal。如果在若干次旋转操作之后，s 能变成 goal ，那么返回 true 。

  s 的 旋转操作 就是将 s 最左边的字符移动到最右边。 

  例如, 若 s = 'abcde'，在旋转一次之后结果就是'bcdea' 。

  示例 1:
  输入: s = "abcde", goal = "cdeab"
  输出: true

  示例 2:
  输入: s = "abcde", goal = "abced"
  输出: false

  提示:
  1 <= s.length, goal.length <= 100
  s 和 goal 由小写英文字母组成

 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
let rotateString2 = function(s, goal) {
  if (s.length !== goal.length) return false;
  let len = s.length;

  let i = 0;
  while (i < len) {
    if (s === goal) return true;

    s = s.concat(s.substring(0, 1)).substring(1);
    i++;
  }

  return false;
};


/**
 * 递归
 */
let rotateString = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  } else if (s === goal) {
    return true;
  }

  const originalS = s;

  let subRotateString = (s, goal) => {
    s = s.concat(s.substring(0, 1)).substring(1);

    if (s === goal) {
      return true;
    } else if (s === originalS) { // 当旋转一个周期（所有字母旋转一次）后不匹配，则退出。
      return false;
    }

    return subRotateString(s, goal);
  }

  return subRotateString(s, goal);
};

let input = ['abcde', 'cdeab'];
// let input = ['abcde', 'abced'];
let result = rotateString(...input);

console.log(result);