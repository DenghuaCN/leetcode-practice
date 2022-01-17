/**
  编写一个函数来查找字符串数组中的最长公共前缀。

  如果不存在公共前缀，返回空字符串 ""。

  示例 1：

  输入：strs = ["flower","flow","flight"]
  输出："fl"
  示例 2：

  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
   

提示：
  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] 仅由小写英文字母组成
*/


let example = ["flower","flow","flight"]

/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  // 判定两种情况，结果集存在两种，1. 不存在任何长度至少为1的公共前缀字符串 2. 存在至少长度为1的公共前缀字符串

  strs.sort((a, b) => {return a.length - b.length}) // 按字符串长度生序排列

  let commonPreFix = [];
  let shortestStr = strs[0]; // 遍历最短字符串，每轮循环确定一个公共字符，最多 存在的公共前缀字符串 将等于 集合中最短的字符串

  for (let i = 0; i < shortestStr.length; i++) {
    let everyTimeBinary = shortestStr[i];

    for (let j = 0; j < strs.length; j++) {
      // 如果本轮循环有一个字符不想等，则返回
      if (everyTimeBinary !== strs[j][i]) {
        return commonPreFix.join('');
      }
    }
    // 每一轮内部循环结束，确定一个字符是否都存在于所有字符串集合中
    commonPreFix.push(everyTimeBinary);
  }

  return commonPreFix.join('');
};


let result = longestCommonPrefix(example);

console.log(result);