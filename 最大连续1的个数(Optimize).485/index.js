/**
  给定一个二进制数组， 计算其中最大连续 1 的个数

  输入：[1,1,0,1,1,1]
  输出：3
  解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.

  提示：
  输入的数组只包含 0 和 1 。
  输入数组的长度是正整数，且不超过 10,000。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let findMaxConsecutiveOnes = function(nums) {
  let left = 0;
  let right = 0;
  let results = [0]; // 初始不能为空数组，否则Math.max求值为 -infinity

  for (let i = 0; i < nums.length; i++) {
    if (nums[right] !== 1) {
      right = right + 1;
      left = right;
      continue;
    }

    right += 1;
    results[results.length] = right - left;
  }

  return Math.max(...results)
};

let input = [1,0,1,1,0,1];
let output = findMaxConsecutiveOnes(input);

/* 考点: 数组，双指针(快慢指针) */