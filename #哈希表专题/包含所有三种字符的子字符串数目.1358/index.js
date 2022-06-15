/**
  给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

  请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。 a|b|c >= 1

  示例 1：
  输入：s = "abcabc" // abc abca abcab abcabc 4   bca bcab bcabc 3 cab cabc 2 abc 1
  输出：10
  解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。

  示例 2：
  输入：s = "aaacb"
  输出：3
  解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。

  示例 3：
  输入：s = "abc"
  输出：1

  提示：
  3 <= s.length <= 5 x 10^4
  s 只包含字符 a，b 和 c 。
 */

/**
 * TLE
 * @param {string} s
 * @return {number}
 */
let numberOfSubstrings2 = function(s) {
  let slideWindowSet = new Set(); // 窗口内查询是否'a,b,c'，可使用哈希表加快查询，当窗口移出一个字符或者移入的时候需要动态更新
  let ans = 0;

  // 双指针滑动窗口，先寻找一个最小'abc'的可行解，之后扩大窗口寻找更多可行解。
  let i = 0;
  while (i < s.length) {

    let j = i;
    let count = 0; // 内部循环收集到的子串数量
    while (j < s.length) { // 3 <= s.length
      slideWindowSet.add(s[j]);

      if (slideWindowSet.size === 3) { // 一旦窗口中含有abc三种字符，则窗口之后向右扩大也必定满足要求，直接累加即可，节省之后的循环时间。
        count += s.length - j;
        /**
         * 直接累加即可，一个个切割写入会TLE
         */
        break;
      }
      j++; // 窗口向右扩大
    }

    ans += count;
    slideWindowSet.clear(); // 窗口重置
    i++;
  }

  return ans;
};

/**
 * 优化
 * 参考: https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/solution/si-kao-de-guo-cheng-bi-da-an-zhong-yao-xiang-xi-tu/
 * @param {string} s
 * @return {number}
 */
 let numberOfSubstrings = function(s) {
  let ans = 0;
  let count = [0, 0, 0];

  // 双指针滑动窗口，先寻找一个最小'abc'的可行解，之后扩大窗口寻找更多可行解。
  let left = 0; // 窗口左端
  let right = 0; // 窗口右端

  while (right < s.length) {
    count[s[right].charCodeAt() - 'a'.charCodeAt()]++; // 收集计数

    while (count[0] >= 1 && count[1] >= 1 && count[2] >= 1) { // 如果[left, right]满足条件，则[left, right+1]必定满足
      ans += s.length - right;

      // 收缩窗口左端，对应字符的计数减1
      count[s[left].charCodeAt() - 'a'.charCodeAt()]--;
      left++;
    } // 不满足则继续扩大窗口右端

    right++;
  }

  return ans;
};


// let input = 'abcbc';
// let input = 'aaacb';
// let input = 'abc';
let input = 'abababababababababababbaabc';

let r = numberOfSubstrings(input);
console.log(r);