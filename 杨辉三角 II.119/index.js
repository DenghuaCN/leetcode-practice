/**
  给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

  在「杨辉三角」中，每个数是它左上方和右上方的数的和。

  示例 1:
  输入: rowIndex = 3
  输出: [1,3,3,1]

  示例 2:
  输入: rowIndex = 0
  输出: [1]

  示例 3:
  输入: rowIndex = 1
  输出: [1,1]
   
  提示:
  0 <= rowIndex <= 33

  进阶：
  你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 */

/**
 * 未优化
 * @param {number} rowIndex
 * @return {number[]}
 */
 let getRow2 = function(rowIndex) {
  let numRows = rowIndex + 1;
  let result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }
    let everyTimeRows = [];

    for (let j = 0; j < numRows; j++) {
      let preRows = result[i - 1];

      let rightNum = preRows[j] || 0;
      let leftNum = preRows[j - 1] || 0;
      let sum = rightNum + leftNum;

      if (sum === 0) {
        continue
      }

      everyTimeRows.push(leftNum + rightNum);
    }
    result.push(everyTimeRows);
  }

  return result[result.length - 1];
};


/**
 * 优化(不存储所有的三角行，每次根据上一个三角行迭代，完成之后替换原来的三角行)
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
 let getRow = function(rowIndex) {
  let numRows = rowIndex + 1;
  let previousResult = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      previousResult.push(1);
      continue;
    }

    let everyTimeRows = [];

    for (let j = 0; j < numRows; j++) {
      let rightNum = previousResult[j] || 0;
      let leftNum = previousResult[j - 1] || 0;
      let sum = rightNum + leftNum;

      if (sum === 0) {
        continue;
      }

      everyTimeRows.push(sum);
    }

    previousResult = everyTimeRows;
  }
  return previousResult;
};

let input = 3;
let result = getRow(input);

console.log(result);