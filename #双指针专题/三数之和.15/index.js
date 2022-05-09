/**
  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

  注意：答案中不可以包含重复的三元组。

  示例 1：
  输入：nums = [-1,0,1,2,-1,-4]
  输出：[[-1,-1,2],[-1,0,1]]

  示例 2：
  输入：nums = []
  输出：[]

  示例 3：
  输入：nums = [0]
  输出：[]

  提示：
  0 <= nums.length <= 3000
  -10^5 <= nums[i] <= 10^5
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  if (nums.length < 3) return [];

  let ans = [];
  nums = nums.sort((a, b) => {return a - b});

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) return ans;
    if (i > 0 && nums[i] === nums[i - 1]) continue; // -4  -1i  -1  0L  1R  2 与 -4  -1  -1i  0L  1R  2 重复

    const curNum = nums[i];

    let l = i + 1,
        r = nums.length - 1;
    while (l < r) {
      if (curNum + nums[l] + nums[r] > 0) {
        r--;
      } else if (curNum + nums[l] + nums[r] < 0) {
        l++;
      } else if (curNum + nums[l] + nums[r] === 0) {
        ans.push([curNum, nums[l], nums[r]])

        // -2i, -1L1, -1, -1L2, 3R2, 3, 3R1 如果不去重会导致重复添加
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return ans;
};

// let input = [-1,0,1,2,-1,-4];
// let input = [];
// let input = [0];
// let input = [0, -1, 1, -2, 0, 2];
let input = [-2, -1, -1, -1, 3, 3, 3];

let result = threeSum(input);

console.log(result);