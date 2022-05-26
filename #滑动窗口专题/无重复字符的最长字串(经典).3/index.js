/**
  给定一个字符串 s ，请你找出其中不含有重复字符的 *最长子串* 的长度。

  示例 1:
  输入: s = "abcabcbb"
  输出: 3
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

  示例 2:
  输入: s = "bbbbb"
  输出: 1
  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

  示例 3:
  输入: s = "pwwkew"
  输出: 3
  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
       请注意，你的答案必须是子串的*长度*，"pwke" 是一个子序列，不是子串。
   
  提示：
  0 <= s.length <= 5 * 10^4
  s 由英文字母、数字、符号和空格组成
*/

/**
 * 暴力Sliding Window
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring2 = function(s) {
  if (s.length === 0) {
    return 0;
  }

  let sArr = s.split('');
  let map = new Map();
  let longSubWords = [];

  let getMapWords = () => {
    let arr = [];
    for (let [key, value] of map) {
      arr.push(key);
    }
    return arr.join('');
  }


  let right = 0; // 使用快指针遍历字符串
  while (right <= sArr.length - 1) {
    const EVERY_TIME_CHAR = sArr[right];

    // 当哈希表遇到第一个重复字符的时候，就能确定一个 无重复子串
    if (map.has(EVERY_TIME_CHAR)) {
      let repeatCharIndex = map.get(EVERY_TIME_CHAR);
      right = repeatCharIndex + 1; // 初始化快指针到索引 + 1的位置

      longSubWords.push(getMapWords()); // 将哈希表中的无重复子串收集到数组内存放
      map.clear(); // 初始化Map，准备下一次收集
      continue;
    }

    map.set(EVERY_TIME_CHAR, right);// 以字符为key，索引为value建立哈希表

    right += 1;
  }

  if (map.size > 0) {
    longSubWords.push(getMapWords());
  }


  let max = 0;
  for (let i = 0; i < longSubWords.length; i++) {
    if (longSubWords[i].length > max) {
      max = longSubWords[i].length;
    }
  }

  return max;
};

/**
 * 优化
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
  let sArr = s.split('');

  let max = -1, // 计数
      slow = 0, // 慢指针
      fast = 0, // 快指针
      map = new Map();

  if (s.length === 0) return 0;

  while (fast < sArr.length) { // 使用快指针扫描输入字符串
    const EVERY_TIME_CHAR = sArr[fast];

    if (map.has(EVERY_TIME_CHAR)) { // 如果哈希表中存在重复字符，更新一次计数。
      max = map.size > max? map.size : max;

      slow = map.get(EVERY_TIME_CHAR) + 1;
      fast = slow;

      map.clear();

      continue;
    }

    map.set(EVERY_TIME_CHAR, fast); // 以字符为key，索引为value建立哈希表

    fast += 1;
  }

  max = Math.max(max, map.size);

  return max;
};


let input = "pwwk";
// let input = "au"
// let input = 'abcabcbb';
// let input = 'dvdf';
let result = lengthOfLongestSubstring2(input)

console.log(result);