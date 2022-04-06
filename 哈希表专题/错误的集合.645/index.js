/**
  集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。

  给定一个数组 nums 代表了集合 S 发生错误后的结果。

  请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。

  示例 1：
  输入：nums = [1,2,2,4]
  输出：[2,3]

  示例 2：
  输入：nums = [1,1]
  输出：[1,2]

  提示：
  2 <= nums.length <= 10^4
  1 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findErrorNums = function(nums) {
  let allSum = 0;
  let numsSum = 0;
  let map = new Map();

  let i = 0;
  while (i <= nums.length) {
    if (i !== nums.length) {
      map.set(nums[i], (map.get(nums[i]) || 0) + 1);
      numsSum += nums[i];
    };

    allSum += i;
    i++;
  }

  let repeatNum = null;
  for (const [key, value] of map) {
    if (value > 1) {
      repeatNum = key;
      break;
    }
  }

  let diff = allSum - numsSum;

  return [repeatNum, repeatNum + diff];
};


// let input =  [1,2,2,4];
// let input =  [1,2,3,3,5];
// let input = [1,1]
// let input = [2,2]
let input = [3,2,3,4,6,5];

let result = findErrorNums(input);

console.log(result);