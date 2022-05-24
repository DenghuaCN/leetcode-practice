/**
  给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

  示例 1:
  输入: nums = [1,2,3,4,5,6,7], k = 3
  输出: [5,6,7,1,2,3,4]
  解释:
  向右轮转 1 步: [7,1,2,3,4,5,6]
  向右轮转 2 步: [6,7,1,2,3,4,5]
  向右轮转 3 步: [5,6,7,1,2,3,4]

  示例 2:
  输入：nums = [-1,-100,3,99], k = 2
  输出：[3,99,-1,-100]
  解释:
  向右轮转 1 步: [99,-1,-100,3]
  向右轮转 2 步: [3,99,-1,-100]

  提示：
  1 <= nums.length <= 10^5
  -2^31 <= nums[i] <= 2^31 - 1
  0 <= k <= 10^5
   
  进阶：
  尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
  你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

 */

/**
 * 超时
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate2 = function(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  while (nums.length - k > 0) {
    nums.push(nums.shift());
    k++;
  }

  return nums;
};


let rotate3 = function(nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  let ans = [];

  let i = nums.length - k;
  while (i < nums.length) {
    ans.push(nums[i]);
    i++;
  }

  let j = 0;
  while (j < nums.length - k) {
    ans.push(nums[j]);
    j++;
  }

  for (let i = 0; i < ans.length; i++) {
    nums[i] = ans[i];
  }

  return nums;
};

/**
 * 官方题解
 */
let rotate = function(nums, k) {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
      newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
      nums[i] = newArr[i];
  }

  return nums;
};



let input = [[1,2,3,4,5,6,7], 3];
// let input = [[-1,-100,3,99], 2];
// let input = [[1,2], 3]
// let input = [[1,2], 5];

let result = rotate2(...input);

console.log(result);
