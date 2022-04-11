/**
  给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 一次 或 两次 。请你找出所有出现 两次 的整数，并以数组形式返回。

  你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间的算法解决此问题。

  示例 1：
  输入：nums = [4,3,2,7,8,2,3,1]
  输出：[2,3]

  示例 2：
  输入：nums = [1,1,2]
  输出：[1]

  示例 3：
  输入：nums = [1]
  输出：[]

  提示：
  n == nums.length
  1 <= n <= 10^5
  1 <= nums[i] <= n
  nums 中的每个元素出现 一次 或 两次
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDuplicates = function(nums) {
  const LEN = nums.length;
  let map = new Map();
  let ansSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];

    if (map.has(key)) {
      map.set(key, map.get(key) + 1);

      // 动态维护哈希集合
      if (map.get(key) === 2) {
        ansSet.add(key);
      } else if (map.get(key) > 2) {
        ansSet.delete(key);
      }
    } else {
      map.set(key, 1);
    }
  }

  return Array.from(ansSet);
};


let input = [4,3,2,7,8,2,3,1];
// let input = [1,1,2];
// let input = [1];

let result = findDuplicates(input);

console.log(result);