/**
  给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
  返回这三个数的和。
  假定每组输入只存在恰好一个解。

  示例 1：
  输入：nums = [-1,2,1,-4], target = 1  // -4* -1* 1 2*
  输出：2
  解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

  示例 2：
  输入：nums = [0,0,0], target = 1
  输出：0
   
  提示：
  3 <= nums.length <= 1000
  -1000 <= nums[i] <= 1000
  -10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let ans = nums[0] + nums[1] + nums[2];

  let i = 0;
  while (i < nums.length - 2) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (Math.abs(target - sum) < Math.abs(target - ans)) {  // 更接近，更新答案
        ans = sum;
      }

      if (sum > target) { // 大于目标值，右指针收缩
        right--;
        // 过滤(负优化)
        // while (nums[right] === nums[right - 1]) {
        //   right--;
        // }
        // right = right - 1;
      } else if (sum < target) { // 小于目标值，左指针收缩
        left++;
        // 过滤(负优化)
        // while (nums[left] === nums[left + 1]) {
        //   left++
        // }
        // left = left + 1;
      } else {
        return sum;
      }
    }

    i++;
  }

  return ans
};

// let input = [[-1,2,1,-4], 1]; // -4* -1* 1 2*
// let input = [[0,0,0], 1];
let input = [[1,1,-1,-1,3], -1] // -1 -1 1 1 3

let r = threeSumClosest(...input);
console.log(r);
