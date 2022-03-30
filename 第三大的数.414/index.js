/**
  给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

  示例 1：
  输入：[3, 2, 1]
  输出：1
  解释：第三大的数是 1 。

  示例 2：
  输入：[1, 2]
  输出：2
  解释：第三大的数不存在, 所以返回最大的数 2 。

  示例 3：
  输入：[2, 2, 3, 1]
  输出：1
  解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
  此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。

  提示：
  1 <= nums.length <= 10^4
  -2^31 <= nums[i] <= 2^31 - 1

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function(nums) {
  nums.sort((a, b) => {return b - a})
  let newNums = Array.from(new Set(nums));

  if (newNums.length >= 3) {
    return newNums[2];
  } else {
    return newNums[0];
  }
};

let input = [3, 2, 1]
let result = thirdMax(input);
console.log(result);