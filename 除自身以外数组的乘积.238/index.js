/**
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。


示例 1:
输入: nums = [1,2,3,4]
输出: [24,12,8,6]

示例 2:
输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 
进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。）
 */

/**
  参考评论:

  原数组：       [1       2       3       4]
  左部分的乘积：   1       1      1*2    1*2*3
  右部分的乘积： 2*3*4    3*4      4       1
  结果：       1*2*3*4  1*3*4   1*2*4  1*2*3*1
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
  if (nums.length === 0) {
    return [];
  }

  let ans = [];

  // 计算左半边的值（对于 第i项，计算[0, i]范围内的阶乘）
  let left = 1;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      left = left * nums[i - 1];
    }
    ans[i] = left;
  }

  // 计算右半边的值
  let right = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    if (j < nums.length - 1) {
      right = right * nums[j + 1];
    }

    // 将之前左半边的值和右半边的值相乘
    ans[j] = ans[j] * right;
  }

  return ans;
};

let input= [1,2,3,4];
let result = productExceptSelf(input);

console.log(result);