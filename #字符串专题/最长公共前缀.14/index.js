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


/**
 * 暴力查找(On^2)
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  // 判定情况，结果集存在两种，1. 不存在任何长度至少为1的公共前缀字符串 2. 存在至少长度为1的公共前缀字符串

  // 按字符串长度升序处理输入集合
  strs.sort((a, b) => {return a.length - b.length})

  let commonPreFix = [];
  let shortestStr = strs[0]; // 遍历最短字符串，每轮循环确定一个公共字符

  for (let i = 0; i < shortestStr.length; i++) {
    let everyTimeBinary = shortestStr[i];

    for (let j = 0; j < strs.length; j++) {
      // 如果本轮循环有一个字符不匹配，则返回
      if (everyTimeBinary !== strs[j][i]) {
        return commonPreFix.join('');
      }
    }
    // 一轮内部循环结束，确定一个字符是否都存在于所有字符串集合中
    commonPreFix[i] = everyTimeBinary;
  }

  return commonPreFix.join('');
};


// let input = ["dog","racecar","car"];
let input = ["flower","flow","flight"]
let result = longestCommonPrefix(input);

console.log(result);