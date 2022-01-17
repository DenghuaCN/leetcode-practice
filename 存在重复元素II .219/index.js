/**
  给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 !至多! 为 k。

  示例 1:
  输入: nums = [1,2,3,1], k = 3
  解释: nums[3] === nums[0]  |  (3 - 0 = 3 | 0 - 3 = (-3))
  输出: true

  示例 2:
  输入: nums = [1,0,1,1], k = 1
  解释: nums[2] === num[3] | (3 - 2 = 1 | 2 - 3 = (-1))
  输出: true

  示例 3:
  输入: nums = [1,2,3,1,2,3], k = 2
  输出: false

  示例 4:
  输入: nums = [99, 99], k = 2
  输出: true

 */

// 坑：注意给题中的“至多“可以翻译为 "差的绝对值不超过 k "，这题暴力会超时
// https://leetcode-cn.com/problems/contains-duplicate-ii/solution/hua-jie-suan-fa-219-cun-zai-zhong-fu-yuan-su-ii-by/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
let containsNearbyDuplicate = function(nums, k) {
  let mySet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (mySet.has(nums[i])) {
      return true;
    }

    mySet.add(nums[i])

    if (mySet.size > k) {
      mySet.delete(nums[i - k]);
    }
  }

  return false;
};

let result = containsNearbyDuplicate([1,2,1], 0);

console.log(result);