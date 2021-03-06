/**
  给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  子数组 是数组中的一个连续部分。

  示例 1：
    输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

  示例 2：
    输入：nums = [1]
    输出：1

  示例 3：
    输入：nums = [5,4,-1,7,8]
    输出：23 [5,4,-1,7,8]

  提示：
    1 <= nums.length <= 10^5
    -10^4 <= nums[i] <= 10^4
   
  进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/


//

/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];

  nums.forEach((x) => {
      pre = Math.max(pre + x, x); // 将之前的数与之后的数相加
      maxAns = Math.max(maxAns, pre); // 相加的数与之前的数比较，如果相加之后大于被加数，则可作为最终连续子数组一个部分

      console.log(pre, maxAns);
  });

  return maxAns;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
// let input = [-1]; // -1
// let input = [5,4,-1,7,8]; // 23
// let input = [-1, -2]; // -1
// let input = [1, 2, -1]; // 3


let output = maxSubArray(input);
console.log(output);

// 考点： 贪心 动态规划