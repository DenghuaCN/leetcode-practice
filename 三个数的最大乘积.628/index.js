/**
  给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

  示例 1：
  输入：nums = [1,2,3]
  输出：6

  示例 2：
  输入：nums = [1,2,3,4]
  输出：24

  示例 3：
  输入：nums = [-1,-2,-3]
  输出：-6
   
  提示：

  3 <= nums.length <= 10^4
  -1000 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumProduct = function(nums) {
  nums.sort((a, b) => {return a - b});
  const n = nums.length;

  console.log(nums);

  let num2 = nums[n - 1] * nums[n - 2] * nums[n - 3]; // 如果数组中全是非负数，则排序后最大的三个数相乘即为最大乘积；如果全是非正数，则最大的三个数相乘同样也为最大乘积。
  let num1 = nums[0] * nums[1] * nums[n - 1]; // 如果数组中有正数有负数，则最大乘积 *既可能* 是三个最大正数的乘积，也可能是两个最小负数（即绝对值最大）与最大正数的乘积。 ps: 为什么是两个负数搭一个正数而不是一个负数搭两个正数，因为(负 * 正 * 正 => 负) 小于 (负 * 负 * 正 => 正)

  return Math.max(num1, num2);
};

let input = [-100,-4,-1,2,3,4]
// let input = [1,2,3,4];
// let input = [-100, -2, 0, 1, 102];
let result = maximumProduct(input);
console.log(result);