/**
  给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

  如果可以，返回 true ；否则返回 false 。

  magazine 中的每个字符只能在 ransomNote 中使用一次。

  示例 1：
  输入：ransomNote = "a", magazine = "b"
  输出：false

  示例 2：
  输入：ransomNote = "aa", magazine = "ab"
  输出：false

  示例 3：
  输入：ransomNote = "aa", magazine = "aab"
  输出：true
   
  提示：

  1 <= ransomNote.length, magazine.length <= 10^5
  ransomNote 和 magazine 由小写英文字母组成
 */

/**
 * hash
 * O(n + m) n: ransomNote不相同字符个数 m: magazine的字符长度
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
  let ransomNoteMap = new Map();
  let ransomNoteArr = ransomNote.split('');
  let magazineArr = magazine.split('');


  for (let i = 0; i < ransomNoteArr.length; i++) {
    const curChar = ransomNoteArr[i];

    if (ransomNoteMap.has(curChar)) {
      ransomNoteMap.set(curChar, ransomNoteMap.get(curChar) + 1);
      continue;
    }

    ransomNoteMap.set(curChar, 1);
  }

  let maxTime = ransomNoteMap.size;
  let time = 0;

  for (let j = 0; j < magazineArr.length; j++) {
    const curChar = magazineArr[j];
    if (ransomNoteMap.has(curChar)) {

      if (ransomNoteMap.get(curChar) === 1) {
        ransomNoteMap.delete(curChar); // 已经满足最小匹配次数
        time++;
      }
      ransomNoteMap.set(curChar, ransomNoteMap.get(curChar) - 1);
    }
  }

  if (time === maxTime) {
    return true;
  }

  return false;
};

let input = ['aa', 'ab'];
let result = canConstruct(...input);

console.log(result);