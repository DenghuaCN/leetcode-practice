/**
  给你一个整数数组 nums 。数组中唯一元素是那些只出现 恰好一次 的元素。

  请你返回 nums 中唯一元素的 和 。

  示例 1：
  输入：nums = [1,2,3,2]
  输出：4
  解释：唯一元素为 [1,3] ，和为 4 。

  示例 2：
  输入：nums = [1,1,1,1,1]
  输出：0
  解释：没有唯一元素，和为 0 。

  示例 3 ：
  输入：nums = [1,2,3,4,5]
  输出：15
  解释：唯一元素为 [1,2,3,4,5] ，和为 15 。
   
  提示：
  1 <= nums.length <= 100
  1 <= nums[i] <= 100

 */

/**
 * HashMap (典型空间换时间)
 *
 * @param {number[]} nums
 * @return {number}
 */
let sumOfUnique = function(nums) {
  let myHash = new Set();
  let repeatEle = new Set(); // 此集合用于存储已重复的元素
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (repeatEle.has(nums[i])) {
      continue;
    }

    if (myHash.has(nums[i])) {
      sum = sum - nums[i];

      repeatEle.add(nums[i]);
      myHash.delete(nums[i]);
      continue;
    }

    sum += nums[i];
    myHash.add(nums[i])
  }

  return sum;
};


let input = [1,2,3,4,5]
let result = sumOfUnique(input);


// 考点： Hash