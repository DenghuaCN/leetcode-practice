/**
  给你一个正整数组成的数组 nums ，返回 nums 中一个 升序 子数组的最大可能元素和。

  子数组是数组中的一个连续数字序列。

  已知子数组 [nums[l], nums[l+1], ..., nums[r-1], nums[r]] ，若对所有 i（l <= i < r），nums[i] < nums[i+1] 都成立，则称这一子数组为 升序 子数组。注意，大小为 1 的子数组也视作 升序 子数组。

  示例 1：
  输入：nums = [10,20,30,5,10,50]
  输出：65
  解释：[5,10,50] 是元素和最大的升序子数组，最大元素和为 65 。

  示例 2：
  输入：nums = [10,20,30,40,50]
  输出：150
  解释：[10,20,30,40,50] 是元素和最大的升序子数组，最大元素和为 150 。

  示例 3：
  输入：nums = [12,17,15,13,10,11,12]
  输出：33
  解释：[10,11,12] 是元素和最大的升序子数组，最大元素和为 33 。

  示例 4：
  输入：nums = [100,10,1]
  输出：100
   
  提示：
  1 <= nums.length <= 100
  1 <= nums[i] <= 100

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 let maxAscendingSum = function(nums) {

  let everyTimeSum = nums[0];
  let previousNum = nums[0];
  let results = [];

  for (let i = 1; i < nums.length; i++) {

    if (nums[i] > previousNum) { // 这里要注意不能取大于等于
      everyTimeSum += nums[i];
    } else {
      results.push(everyTimeSum);
      everyTimeSum = nums[i];
    }

    previousNum = nums[i];
  }
  results.push(everyTimeSum);

  return Math.max(...results);
};

let input = [3,6,10,1,8,9,9,8,9]
let result = maxAscendingSum(input);

console.log(result);