/**
  给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

  示例 1：
  输入：nums = [-4,-1,0,3,10]
  输出：[0,1,9,16,100]
  解释：平方后，数组变为 [16,1,0,9,100]
  排序后，数组变为 [0,1,9,16,100]

  示例 2：
  输入：nums = [-7,-3,2,3,11]
  输出：[4,9,9,49,121]
   
  提示：
  1 <= nums.length <= 10^4
  -10^4 <= nums[i] <= 10^4
  nums 已按 非递减顺序 排序
   
  进阶：
  请你设计时间复杂度为 O(n) 的算法解决本问题
 */

/**
 *
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function(nums) {
  let ans = [];

  let i = nums.length - 1;

  let head = 0;
  let tail = nums.length - 1;

  while (i >= 0) {
    let squareHead = nums[head] * nums[head]
    let squareTail = nums[tail] * nums[tail];

    if (squareHead > squareTail) {
      ans[i] = squareHead;
      head++;
    } else {
      ans[i] = squareTail;
      tail--;
    }
    i--;
  }

  return ans;
};

// let input =  [-4,-1,0,3,10];
let input = [-7,-3,2,3,11];


sortedSquares(input);