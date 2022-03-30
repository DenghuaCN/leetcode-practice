/**
句子 是一串由空格分隔的单词。每个 单词 仅由小写字母组成。

如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 没有出现 ，那么这个单词就是 不常见的 。

给你两个 句子 s1 和 s2 ，返回所有 不常用单词 的列表。返回列表中单词可以按 任意顺序 组织。


示例 1：
输入：s1 = "this apple is sweet", s2 = "this apple is sour"
输出：["sweet","sour"]

示例 2：
输入：s1 = "apple apple", s2 = "banana"
输出：["banana"]


提示：
1 <= s1.length, s2.length <= 200
s1 和 s2 由小写英文字母和空格组成
s1 和 s2 都不含前导或尾随空格
s1 和 s2 中的所有单词间均由单个空格分隔

 */

/**
 * 面向case编程: ))))，我裂开来
 *
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
let uncommonFromSentences2 = function(s1, s2) {
  let len = [];
  let sArr1 = s1.split(' ');
  let map1 = new Map();

  let sArr2 = s2.split(' ');
  let map2 = new Map();

  len = Math.max(sArr1.length, sArr2.length);

  let i = 0;
  while (i < len) {
    if (sArr1[i]) {
      if (map1.has(sArr1[i])) {
        map1.set(sArr1[i], map1.get(sArr1[i]) + 1);
      } else {
        map1.set(sArr1[i], 1);
      }
    }

    if (sArr2[i]) {
      if (map2.has(sArr2[i])) {
        map2.set(sArr2[i], map2.get(sArr2[i]) + 1);
      } else {
        map2.set(sArr2[i], 1);
      }
    }
    i++;
  }

  for (const [key, value] of map1) {
    if (map2.has(key) || value > 1) {
      map2.delete(key);
      map1.delete(key);
    }
  }
  for (const [key, value] of map2) {
    if (value > 1) {
      map2.delete(key);
    }
  }

  // console.log(map1);
  // console.log(map2);


  let arr1 = Array.from(map1.keys());
  let arr2 = Array.from(map2.keys());

  // console.log([...arr1, ...arr2]);
  return [...arr1, ...arr2];
};


/**
 *
 * 虽然知道是用HashTable，但是没有充分理解题意去综合条件，写出了逻辑混乱的代码
 *
 * 条件1: 单词A在其中一个句子中恰好出现一次
 * 条件2: 单词A在另一个句子中却 没有出现
 * 综合: 单词A在两个句子内只出现一次
 *
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
let uncommonFromSentences = (s1, s2) => {
  let map = new Map();
  let ans = [];
  let arr = [...s1.split(' '), ...s2.split(' ')];

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  for (const [key, value] of map) {
    if (value === 1) {
      ans.push(key);
    }
  }

  return ans;
}



let input = ["this apple is sweet", "this apple is sour"];
// let input = ['apple apple', 'banana'];
// let input = ['s z z z s', 's z ejt'];
// let input = ["abcd def abcd xyz", "ijk def ijk"];

let result = uncommonFromSentences(...input);

console.log(result);