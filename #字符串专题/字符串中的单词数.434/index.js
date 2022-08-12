/**
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。


来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/number-of-segments-in-a-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {number}
 */
let countSegments = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if ((i === 0 || s[i - 1] === ' ') && s[i] !== ' ') { // 判定每个单词的第一个下标，为字符串初始下标 或者 当前下标索引到的字符不为空格且上一个索引位置的字符为空格
      count++;
    }
  }

  return count;
};

// let input = "Hello, my name is John";
// let input = "love live! mu'sic forever";
// let input = "";
let input = "                ";
let result = countSegments(input);

console.log(result);