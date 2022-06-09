/**
  字符串 S 由小写字母组成。我们要把这个 字符串 划分 为尽可能多的 片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

  示例：
  输入：S = "ababcbaca defegde hijhklij"
  输出：[9,7,8]
  解释：
  划分结果为 "ababcbaca", "defegde", "hijhklij"。
  每个字母最多出现在一个片段中。
  像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
   
  提示：
  S的长度在[1, 500]之间。
  S只包含小写字母 'a' 到 'z' 。
 */

/**
 * @param {string} s
 * @return {number[]}
 */
let partitionLabels = function(s) {
  let ans = [];
  let arr = [];

  let sCharLastIndex = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt() - 'a'.charCodeAt();
    sCharLastIndex[index] = i;
  }
  // let sub = 0;

  let left = 0;
  let right = 0;
  for (let j = 0; j < s.length; j++) {
    right = Math.max(right, sCharLastIndex[(s[j].charCodeAt() - 'a'.charCodeAt())]);

    if (j === right) {
      ans.push(right - left + 1);
      // arr.push(s.substring(sub, j + 1));
      left = j + 1;
      // sub = j + 1;
    }
  }

  return ans;
};

let input = 'ababcbacadefegdehijhklij'

let result = partitionLabels(input);
console.log(result);

/**
 * 思路:
 *
 *
 */