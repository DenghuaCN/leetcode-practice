/**
  实现 strStr() 函数。

  给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
  如果不存在，则返回  -1 。

  说明：
  当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
  对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。

  示例 1：
  输入：haystack = "hello", needle = "ll"
  输出：2

  示例 2：
  输入：haystack = "aaaaa", needle = "bba"
  输出：-1
   
  提示：
  1 <= haystack.length, needle.length <= 10^4
  haystack 和 needle 仅由小写英文字符组成
 */

/**
 * Brute-force
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr2 = function(haystack, needle) {
  if (needle.length === 0) return 0;

  let standard = 0;
  while (standard < haystack.length) {
    let match = true;

    let i = 0;
    while (i < needle.length) {
      if (haystack[standard + i] !== needle[i]) {
        match = false;
        break;
      }
      i++;
    }
    if (match) {
      return standard;
    }

    standard++;
  }

  return -1;
}


/**
 * Knuth-Morris-Pratt (参考： https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC)

 * 将Brute-force的O(n * m)优化至O(n + m);
 * 其中建立匹配表的复杂度是O(n)，n为模式串的长度。
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
  // 计算模式串needle的前缀表（即部分匹配表，也叫匹配函数）
  const prefixTable = (needle) => {
    let arr = [];
    let j = -1;
    arr[0] = j; //  第一个字符的最长相等 前后缀 长度必定为0，由于采用统一减一模式，初始化为-1。

    for (let i = 1; i < needle.length; i++) {  // fast指针从第二个字符开始比对
        while (j >= 0 && needle[i] !== needle[j + 1]) { // 当发现前后缀不相同
          j = arr[j]; // 将j指针回退
        }

        if (needle[i] === needle[j + 1]) {
          j++;  // 如: a与aa，aa的最长相等前后缀长度比a增加1
        }
        arr[i] = j; // 将s[0] ~ s[j]的最长相等前后缀长度写入;
    }

    return arr;
  }

  // 生成匹配表
  let next = prefixTable(needle);

  let i = 0,
      j = -1;
  while (i < haystack.length) {

    // 如果不匹配，要在next匹配表中找出下一个匹配的位置
    while (j >= 0 && haystack[i] !== needle[j + 1]) {
      j = next[j];
    }

    if (haystack[i] === needle[j + 1]) { // 匹配成功某一个字符，i指针与j指针同时移动
      j++;
    }

    if (j === needle.length - 1) { // j指针指向模式串末尾，完全匹配
      return (i - needle.length + 1);
    }

    i++;
  }


  return -1;
}


// let input = ['hello', 'll'];
// let input = ['aaaaa', 'bba'];
// let input = ['sdfjeiowfj', 'owfj'];
let input = ['aabaabaafa', 'aabaaf']
let result = strStr(...input);

console.log(result);
