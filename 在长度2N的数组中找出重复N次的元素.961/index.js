/**
  给你一个整数数组 nums ，该数组具有以下属性：

  nums.length == 2 * n.
  nums 包含 n + 1 个 不同的 元素
  nums 中恰有一个元素重复 n 次
  找出并返回重复了 n 次的那个元素。

  示例 1：
  输入：nums = [1,2,3,3]
  输出：3

  示例 2：
  输入：nums = [2,1,2,5,3,2]
  输出：2

  示例 3：
  输入：nums = [5,1,5,2,5,3,5,4] |  n = 4 | 包含5个不同元素 | 有一元素重复4次
  输出：5

   
  提示：

  2 <= n <= 5000 // n >= 2, 即最小给定数组长度为 4
  nums.length == 2 * n
  0 <= nums[i] <= 104
  nums 由 n + 1 个 不同的 元素组成，且其中一个元素恰好重复 n 次

  考点： Hash
 */

/**
 * 解法1: 哈希表(由于非重复元素只会出现一次，可以使用一个Set结构维护一个哈希)
 *
 * @param {number[]} nums
 * @return {number}
 */
let repeatedNTimes = function(nums) {
  let setHash = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (setHash.has(nums[i])) {
      return nums[i];
    }
    setHash.add(nums[i])
  }
}

let input = [2,1,2,5,3,2];
let result = repeatedNTimes(input);

/**
 * 解法2: 暴力法枚举 O(2n)
 *
 * @param {number[]} nums
 * @return {number}
 */
let repeatedNTimes2 = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  })

  let left = 0;

  while (left < nums.length) {
    if (nums[left] === nums[left + 1]) {
      return nums[left]
    }

    left++;
  }
};
