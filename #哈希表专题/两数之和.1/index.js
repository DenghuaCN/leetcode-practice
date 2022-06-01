/**
  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

  你可以按任意顺序返回答案。

  示例 1：
  输入：nums = [2,7,11,15], target = 9
  输出：[0,1]
  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

  示例 2：
  输入：nums = [3,2,4], target = 6
  输出：[1,2]

  示例 3：
  输入：nums = [3,3], target = 6
  输出：[0,1]
   
  提示：

  2 <= nums.length <= 10^4
  -10^9 <= nums[i] <= 10^9
  -10^9 <= target <= 10^9
  只会存在一个有效答案
  进阶：你可以想出一个时间复杂度小于 O(n2) 的算法吗？
 */

/**
 * 暴力
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum2 = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

/**
 * 哈希映射 O(m)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum3 = function(numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }

  for (let i = 0; i < numbers.length; i++) {
    let legalNumber = target - numbers[i];
    let legalIndex = map.get(legalNumber);

    if (typeof legalIndex === 'number' && legalIndex !== i) {
      let ans = [i, legalIndex]
      return ans;
    }
  }
};

/**
 * 优化哈希
 */
 let twoSum = function(numbers, target) {
  let map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let legalNumber = target - numbers[i];

    if (typeof map.get(legalNumber) === 'number') { // 索引为0会进不了return，使用类型判断
      return [i, map.get(legalNumber)];
    }
    map.set(numbers[i], i);
  }
  return [];
};

// let input = [[3,2,4], 6];
let input = [[3, 3], 6]; // case: [[3,2,4], 6]，key不能相等，即3+3 = 6  => [0, 0]
let result = twoSum(...input);

console.log(result);
