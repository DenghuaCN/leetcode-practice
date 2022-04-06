/**
  给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），并以数组形式返回。你可以按 任意顺序 返回答案。

  示例 1：
  输入：words = ["bella","label","roller"]
  输出：["e","l","l"]

  示例 2：
  输入：words = ["cool","lock","cook"]
  输出：["c","o"]

  提示：
  1 <= words.length <= 100
  1 <= words[i].length <= 100
  words[i] 由小写英文字母组成
 */

/**
 * 参考: https://leetcode-cn.com/problems/find-common-characters/solution/1002-cha-zhao-chang-yong-zi-fu-ha-xi-fa-jing-dian-/
 * @param {string[]} words
 * @return {string[]}
 */
let commonChars = function(words) {

	let res = []
	let size = 26
	let firstHash = new Array(size).fill(0);

  let aCharCode = 'a'.charCodeAt();
  let firstWord = words[0];

  // 统计第一单词26个字母出现的次数
  for (let i = 0; i < firstWord.length; i++) {
    let index = firstWord[i].charCodeAt(); // Genius : )

    // 根据每个字母的码点差值作为索引
    firstHash[index - aCharCode] += 1;
  }


  // 统计剩下的单词
  for (let i = 1; i < words.length; i++) {
    let curWord = words[i];
    let otherHash = new Array(26).fill(0);

    for (let j = 0; j < curWord.length; j++) {
      let curChar = curWord[j];

      let index = curChar.charCodeAt();
      otherHash[index - aCharCode] += 1; // 索引为码点差值，[0]: 97('a') ~ [25]: 122('z')
    }

    // 没统计一个单词的字符出现次数后，取每个字符交集的最小值
    for (let x = 0; x < 26; x++) {
      firstHash[x] = Math.min(firstHash[x], otherHash[x]);
    }
  }

	for (let i = 0; i < size; i++) {

    // 每个字符最少出现次数
		while (firstHash[i] > 0) {
      let charCode = i + aCharCode;
			res.push(String.fromCharCode(charCode))  // Genius : )
			firstHash[i]--
		}
	}

  return res;
};

let input = ["bella","label","roller"];
// let input = ["bella"];
// let input = ["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"];

let result = commonChars(input);

console.log(result);