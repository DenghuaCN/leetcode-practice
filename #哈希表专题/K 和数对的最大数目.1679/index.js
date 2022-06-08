/**
  给你一个整数数组 nums 和一个整数 k 。

  每一步操作中，你需要从数组中选出和为 k 的 (两个) 整数，并将它们移出数组。

  返回你可以对数组执行的最大操作数。

  示例 1：
  输入：nums = [1,2,3,4], k = 5
  输出：2
  解释：开始时 nums = [1,2,3,4]：
  - 移出 1 和 4 ，之后 nums = [2,3]
  - 移出 2 和 3 ，之后 nums = []
  不再有和为 5 的数对，因此最多执行 2 次操作。

  示例 2：
  输入：nums = [3,1,3,4,3], k = 6
  输出：1
  解释：开始时 nums = [3,1,3,4,3]：
  - 移出前两个 3 ，之后nums = [1,4,3]
  不再有和为 6 的数对，因此最多执行 1 次操作。
   
  提示：
  1 <= nums.length <= 10^5
  1 <= nums[i] <= 10^9
  1 <= k <= 10^9
 */

/**
 *
 * TwoSum拓展题
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let maxOperations = function(nums, k) {
  let map = new Map();

  // 计数器
  let i = 0;
  while (i < nums.length) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    i++;
  }

  let ans = [];

  // 思路：
  // 对于不同的[value, otherValue]，只能构成min(value, otherValue)个数对
  // 对于相同的[value, value]，能构成的最多数对为: (valueCounter - (valueCounter % 2)) / 2
  for (let [key, counter] of map) {
    let otherKey = k - key;

    if (map.get(otherKey) && key !== otherKey) { // 组合相同
      let min = Math.min(counter, map.get(otherKey));

      for (let i = 0; i < min; i++) {
        ans.push([key, otherKey])
      }

      map.delete(key);
      map.delete(otherKey);
    } else if (key === otherKey) { // 组合不同
      let combination = Math.floor(counter / 2);

      for (let i = 0; i < combination; i++) {
        ans.push([key, otherKey])
      }

      map.delete(key);
    }
  }

  return ans.length;
};


let input = [[1,2,3,4], 5];
// let input = [[3,1,3,4,3], 6];
let result = maxOperations(...input);

console.log(result);