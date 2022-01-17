/**
  给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：
    !!! 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
    如果 s 中存在这样的子串，我们保证它是唯一的答案。

  示例 1：
    输入：s = "ADOBECODEBANC", t = "ABC"
    输出："BANC"


  示例 2：
    输入：s = "a", t = "a"
    输出："a"

  示例 3:
    输入: s = "a", t = "aa"
    输出: ""
    解释: t 中两个字符 'a' 均应包含在 s 的子串中，
    因此没有符合条件的子字符串，返回空字符串。
   
  提示：
    1 <= s.length, t.length <= 105
    s 和 t 由英文字母组成
 */
/**\
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
let minWindow = function(s, t) {
  let left = 0, // 左指针
      right = 0, // 右指针
      match = 0, // 匹配次数
      start = 0; // 最终集合的起始位置

  let minLen = Number.MAX_SAFE_INTEGER; // 最终集合的长度

  let needs = {}; // { char1: char1需要出现的次数, char2: char2需要出现的次数, ......  }
  let window = {}; // { char1: 0, char2: 0, ....... }


  for (const character of t) {
    if (needs[character]) {
      needs[character] += 1;
    } else {
      needs[character] = 1;
      window[character] = 0;
    }
  }

  let needsTotal = Object.keys(needs).length; // match需要匹配的次数

  // console.log('需要的字符Map', needs, 'needsTotal:', needsTotal);
  // console.log('当前窗口下包含需要字符数量的Map', window);

  // 扩大右窗口，首先求一个符合要求的可行解。
  while (right < s.length) {
    let char = s[right];
    let isExistSingleChar = needs.hasOwnProperty(char);

    if (isExistSingleChar) { // 一旦存在一个出现在给定目标字符串内的字符，则更新Map
      window[char] += 1;

      if (window[char] === needs[char]) { // 如果这个字符的出现次数 === 目标字符串这个字符需要出现的次数
        // 一个字符的数量已经符合要求
        match += 1; // 更新match
      }
    }

    right += 1;


    // 当window中的各字符出现次数 >= 目标值每个字符最少出现的次数，说明已找到一个可行解，则可以开始收缩左窗口，寻找最优解

    // console.log(right);
    while (match === needsTotal) {

      // 每次移动窗口都更新一次当前可行解，当下一次移动窗口不再满足可行解的时候，上一次可行解 就是 最优解
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }

     // 收缩左窗口
      let char2 = s[left];
      let isExistSingleChar = needs.hasOwnProperty(char2);

      if (isExistSingleChar) { // 如果收缩左窗口时，匹配到一个目标值内的字符，判断是否继续符合可行解的条件，符合则可以继续收缩
        window[char2] -= 1; //
        // 字符 char2 出现次数不再符合最低要求
        if (window[char2] < needs[char2]) {
          match -= 1;
        }
      }

      left += 1;
    }
  }

  // console.log(start, minLen);

  return minLen === Number.MAX_SAFE_INTEGER ? "" : s.substring(start, (start + minLen)); // 注意substring第二个参数接收的是索引
};


let input = "a";

let result = minWindow(input, 'aa');

console.log(result);