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
 * 暴力Sliding Window | 时空复杂度表现不佳
 *
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring2 = function(s) {
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
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


  let left = 0;
  let right = 0;
  while (right <= sArr.length - 1) {

    if (map.has(sArr[right])) {
      let repeatCharIndex = map.get(sArr[right]); // 拿到重复的字符在Map中的索引
      left = repeatCharIndex + 1; // 初始化指针到索引 + 1的位置
      right = repeatCharIndex + 1; // 初始化指针到索引 + 1的位置

      longSubWords.push(getMapWords());
      map = new Map(); // 初始化Map
      continue;
    }

    map.set(sArr[right], right); // key: 字符  value: 字符索引
    right += 1;
  }

  if (map.size > 0) {
    longSubWords.push(getMapWords());
  }

  console.log(longSubWords);

  let minCount = Number.MIN_VALUE;
  for (let i = 0; i < longSubWords.length; i++) {
    const everyTimeSubWordsLength = longSubWords[i].length;

    if (everyTimeSubWordsLength > minCount) {
      minCount = everyTimeSubWordsLength;
    }
  }

  return minCount;
};


// let input = "dvdf"
// let input = "au"
// let input = 'abcabcbb';
let result = lengthOfLongestSubstring(input)

console.log(result);