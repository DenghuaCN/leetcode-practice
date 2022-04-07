/**
  给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

  字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

  示例 1:
  输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
  输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

  示例 2:
  输入: strs = [""]
  输出: [[""]]

  示例 3:
  输入: strs = ["a"]
  输出: [["a"]]

  提示：
  1 <= strs.length <= 10^4
  0 <= strs[i].length <= 100
  strs[i] 仅包含小写字母
 */

/**
 * 排序法
 * 由于字母异位词内每个字符出现次数相同，因此将单词按照a-z顺序排序后建立哈希映射，然后按照特征(排序后的单词是否相同) 归类即可
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams2 = function(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    let possibleKey = word.split('').sort().join('');

    if (map[possibleKey]) {
      map[possibleKey] = [...map[possibleKey], word];
    } else {
      map[possibleKey] = [word];
    }
  }
  return Object.values(map);
};

/**
 * 计数法 (妙哇！设计了一个非常妙的映射Bucket)
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
 let groupAnagrams3 = function(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    const WORD = strs[i];
    const codeBuffer = new Array(26).fill(0); // 26个字母，每个字母出现的次数

    let j = 0;
    while (j < WORD.length) {
      const CHAR = WORD[j];
      let index = CHAR.charCodeAt() - 'a'.charCodeAt(); // 'a': 97 'b': 98 'c':99 ...... 'z': 122 | diff: 0 <= diff < 26

      codeBuffer[index]++;
        /**
          如'eat','tea','ate'都映射到每个字母中的出现次数
          abcdefghijklmnopqrstuvwxyz
          10001000000000000001000000
          则能映射到【10001000000000000001000000】这个bucket的为字母异位词
         */
      j++;
    }
    // 不能使用join操作!!! 如'0,1,0,10' 与 '0,10,1,0’ 都将被join为 '01010'，不符合原意
    if (map[codeBuffer]) { // 直接使用数组做bucketName
      map[codeBuffer] = [...map[codeBuffer], WORD];
    } else {
      map[codeBuffer] = [WORD];
    }
  }

  return Object.values(map);
};


/**
 * 使用质数构建字母映射，质数*质数 = 质数
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
 let groupAnagrams = function(strs) {
  let primeNumber = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,101,103];
  let charMap = {
    'a': 2,
    'b': 3,
    'c': 5,
    'd': 7,
    'e': 11,
    'f': 13,
    'g': 17,
    'h': 19,
    'i': 23,
    'j': 29,
    'k': 31,
    'l': 37,
    'n': 41,
    'm': 43,
    'o': 47,
    'p': 53,
    'q': 59,
    'r': 61,
    's': 67,
    't': 71,
    'u': 73,
    'v': 79,
    'w': 83,
    'x': 89,
    'y': 101,
    'z': 103,
  }
  // 如何解决乘积导致Int溢出?

  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];

    let j = 0;
    let charTotalCode = 0;
    while (j < word.length) {
      // charTotalCode += word[j].charCodeAt();
      charTotalCode += obj[word[j]];
      j++;
    }

    if (map[charTotalCode]) {
      map[charTotalCode] = [...map[charTotalCode], word] // 发现一个字母异位词
    } else {
      map[charTotalCode] = [word];
    }
  }
  // console.log(map);
  return Object.values(map);
};


// let input = ["cab","tin","pew","duh","may","ill","buy","bar","max","doc"]
// let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
let input = ["bdddddddddd","bbbbbbbbbbc"];
// let input = ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];

let result = groupAnagrams(input);
console.log(result);