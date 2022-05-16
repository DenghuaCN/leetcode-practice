/**
字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

示例 1:
输入:
first = "pale"
second = "ple"
输出: True
 
示例 2:
输入:
first = "pales"
second = "pal"
输出: False
 */

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
let oneEditAway = function(first, second) {
  if (Math.abs(first.length - second.length) >= 2) return false;

  if (first.length === second.length) {
    let diff = 0;
    let i = 0;
    while (i < first.length && diff < 2) {
      if (first[i] !== second[i]) {
        diff++;
      }
      i++;
    }
    if (diff >= 2) {
      return false;
    }

  } else {
    let long,
        short;

    if (first.length > second.length) {
      long = first;
      short = second;
    } else {
      long = second;
      short = first;
    }

    let diff = 0,
        l = 0,
        r = 0;

    while (l < long.length && diff < 2) {
      if (long[l] !== short[r]) {
        l++;
        diff++;
        continue;
      }
      l++;
      r++;
    }

    if (diff >= 2) {
      return false;
    }
  }

  return true;
};

let input = ['pale', 'ple'];
// let input = ["teacher", "taches"]
// let input = ['a', 'a'];
// let input = ['pales', 'pal'];
// let input = ['ab', 'bc'];
// let input = ['', ''];

let result = oneEditAway(...input);

console.log(result);
