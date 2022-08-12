/**
  给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请
  你找出并返回满足下述全部条件且不重复的四元组 
  [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

    * 0 <= a, b, c, d < n
    * a、b、c 和 d 互不相同
    * nums[a] + nums[b] + nums[c] + nums[d] == target

    你可以按 任意顺序 返回答案 。

  示例 1：
  输入：nums = [1,0,-1,0,-2,2], target = 0
  输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  示例 2：
  输入：nums = [2,2,2,2,2], target = 8
  输出：[[2,2,2,2]]
   
  提示：
  1 <= nums.length <= 200
  -10^9 <= nums[i] <= 10^9
  -10^9 <= target <= 10^9
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let fourSum = function(nums, target) {
  let ans = [];

  nums = nums.sort((a, b) => {return a - b});

  // 四数之和
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const LOOP1_NUM = nums[i];

    // 三数之和
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      const LOOP2_NUM = nums[j];

      // 双数之和
      let L = j + 1;
      let R = nums.length - 1;
      while (L < R) {

        if (LOOP1_NUM + LOOP2_NUM + nums[L] + nums[R] < target) {
          L++;
        } else if (LOOP1_NUM + LOOP2_NUM + nums[L] + nums[R] > target) {
          R--;
        }
        else if (LOOP1_NUM + LOOP2_NUM + nums[L] + nums[R] === target) {
          // 收集答案
          ans.push([LOOP1_NUM, LOOP2_NUM, nums[L], nums[R]]);
          // 过滤
          while (L < R && nums[L] === nums[L + 1]) {
            L++;
          }
          while (L < R && nums[R] === nums[R - 1]) {
            R--;
          }
          L = L + 1;
          R = R - 1;
        }

      }
    }
  }
  return ans;
};

let input = [[1,0,-1,0,-2,2], 0]; // -2 -1 0 0 1 2
// let input = [[2,2,2,2,2], 8];
let result = fourSum(...input);

console.log(result);