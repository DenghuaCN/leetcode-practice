/**
  实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

  示例 1：
  输入: s = "leetcode"
  输出: false

  示例 2：
  输入: s = "abc"
  输出: true

  限制：
  0 <= len(s) <= 100
  如果你不使用额外的数据结构，会很加分。

 */

/**
 * 哈希集合
 * @param {string} astr
 * @return {boolean}
 */
let isUnique2 = function(astr) {
  let set = new Set();

  let i = 0;
  while (i < astr.length) {
    if (set.has(astr[i])) {
      return false;
    } else {
      set.add(astr[i]);
    }
    i++;
  }

  return true;
};


/**
 * 不适用额外空间(双指针)
 * @param {string} astr
 * @return {boolean}
 */
 let isUnique = function(astr) {
  astr = astr.split('').sort().join('');

  let i = 0;
  let j = 0;

  while (i < astr.length - 1) {
    j++;

    if (astr[j] !== astr[i]) {
      i++;
      astr[i] = astr[j];
    } else {
      return false;
    }
  }

  return true;
};


let input = 'abc';
let result = isUnique(input);
console.log(result);