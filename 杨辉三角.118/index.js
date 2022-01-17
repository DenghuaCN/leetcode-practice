/**
  给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行

  在「杨辉三角」中，每个数是它左上方和右上方的数的和。

  示例 1:
  输入: numRows = 5
  输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

  示例 2:
  输入: numRows = 1
  输出: [[1]]
   
  !提示:
  1 <= numRows <= 30

 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
  let result = [];

  for (let i = 0; i < numRows; i++) {
    // 如果不存在则上一个三角行不存在，初始化
    if (i === 0) {
      result.push([1]);
      continue;
    }
    let everyTimeRows = [];

    for (let j = 0; j < numRows; j++) {
      // 获取上一行三角
      let preRows = result[i - 1];

      let rightNum = preRows[j] || 0;
      let leftNum = preRows[j - 1] || 0;
      let sum = rightNum + leftNum;

      if (sum !== 0) {
        everyTimeRows.push(leftNum + rightNum);
      }
    }
    result.push(everyTimeRows);
  }

  return result;
};


let input = 4;
let result = generate(input);

console.log(result);