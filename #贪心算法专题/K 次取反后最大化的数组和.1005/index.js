/**
  给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：

  选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
  重复这个过程恰好 k 次。可以多次选择同一个下标 i 。

  以这种方式修改数组后，返回数组 可能的最大和 。

  示例 1：
  输入：nums = [4,2,3], k = 1
  输出：5
  解释：选择下标 1 ，nums 变为 [4,-2,3] 。

  示例 2：
  输入：nums = [3,-1,0,2], k = 3
  输出：6
  解释：选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。

  示例 3：
  输入：nums = [2,-3,-1,5,-4], k = 2
  输出：13
  解释：选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。
   
  提示：
  1 <= nums.length <= 10^4
  -100 <= nums[i] <= 100
  1 <= k <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let largestSumAfterKNegations = function(nums, k) {
  // 按照绝对值大小降序
  nums = nums.sort((a, b) => {
    if (Math.abs(a) > Math.abs(b)) {
      return -1;
    } else {
      return 1;
    }
  })

  let i = 0;
  while (i < nums.length) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1; // 将绝对值大的 负数 转换为 正数，同时消耗k次数
      k--;
    }
    i++;
  }

  console.log(nums, k);

  // 由于此前已经遍历数组将负数置为正数，此时如若 k 还未消耗完，最后一个数必定为负数。
  if (k % 2 === 1) {
    nums[nums.length - 1] *= -1;
  }

  let sum = nums.reduce((a, b) => {
    return a + b;
  }, 0);

  return sum;
};

// let input = [[4,2,3], 1];
// let input = [[3, -1, 0, -2], 2];
let input = [[2,-3,-1,5,-4], 2];
let result = largestSumAfterKNegations(...input);

console.log(result);


/**
 * 局部最优：让绝对值大的负数变为正数，当前数值达到最大，整体最优：整个数组和达到最大。
 * 当数组均为正整数时，k > 0，可牺牲最小的正数。
 */