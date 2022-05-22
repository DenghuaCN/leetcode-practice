/**
给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

示例 1：
输入：nums = [1,3,4,2,2]
输出：2

示例 2：
输入：nums = [3,1,3,4,2]
输出：3
 
提示：
1 <= n <= 10^5
nums.length == n + 1
1 <= nums[i] <= n
nums 中 只有一个整数 出现 两次或多次 ，其余整数均只出现 一次

进阶：
如何证明 nums 中至少存在一个重复的数字?
你可以设计一个线性级时间复杂度 O(n) 的解决方案吗？

 */

/**
 * 空间换时间 O(n)
 * @param {number[]} nums
 * @return {number}
 */
let findDuplicate2 = function(nums) {
  let nCount = new Map();

  let i = 0;
  while (i < nums.length) {
    if (nCount.has(nums[i])) {
      return nums[i];
    } else {
      nCount.set(nums[i], 1);
    }
    i++;
  }
};

/**
 * 不使用Map，但依旧需要遍历一次数组，O(n)
 * @param {number[]} nums
 * @return {number}
 */
let findDuplicate = function(nums) {
  let i = 0;
  while (i < nums.length) {

    // 假设数组种不存在重复数，则 (nums[i] - 1)也不会重复。这个思路巧妙在，将重复的数作为索引，如果数组中这个索引的值被写入第二次，那么此数值重复。
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      return Math.abs(nums[i]);
    } else {
      nums[index] *= -1;
    }

    i++;
  }
};
// let input = [3,1,3,4,2];
let input = [1,3,4,2,2];
let result = findDuplicate(input);

console.log(result);