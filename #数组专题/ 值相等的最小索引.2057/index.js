/**
  No.2057

  给你一个下标从 0 开始的整数数组 nums ，返回 nums 中满足 i mod 10 == nums[i] 的最小下标 i ；如果不存在这样的下标，返回 -1 。
  x mod y 表示 x 除以 y 的 余数 。

  示例 1：
  输入：nums = [0,1,2]
  输出：0
  解释：
  i=0: 0 mod 10 = 0 == nums[0].
  i=1: 1 mod 10 = 1 == nums[1].
  i=2: 2 mod 10 = 2 == nums[2].
  所有下标都满足 i mod 10 == nums[i] ，所以返回最小下标 0

  示例 2：
  输入：nums = [4,3,2,1]
  输出：2
  解释：
  i=0: 0 mod 10 = 0 != nums[0].
  i=1: 1 mod 10 = 1 != nums[1].
  i=2: 2 mod 10 = 2 == nums[2].
  i=3: 3 mod 10 = 3 != nums[3].
  2 唯一一个满足 i mod 10 == nums[i] 的下标

  示例 3：
  输入：nums = [1,2,3,4,5,6,7,8,9,0]
  输出：-1
  解释：不存在满足 i mod 10 == nums[i] 的下标

  示例 4：
  输入：nums = [2,1,3,5,2]
  输出：1
  解释：1 是唯一一个满足 i mod 10 == nums[i] 的下标

  提示：
  1 <= nums.length <= 100
  0 <= nums[i] <= 9
*/

/**
 * 其最小下标一定是第一个 x mod y === 10的元素，所以直接返回第一个即可。
 * 时间复杂度为 O(n)，即至少需要一次遍历
 *
 * @param {number[]} nums
 * @return {number}
 */
let smallestEqual = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i % 10 === nums[i]) {
      return i;
    }
  }

  return -1;
};


let input1 = [0, 1, 2];
let result1 = smallestEqual(input1);

let input2 = [4,3,2,1];
let result2 = smallestEqual(input2);

let input3 = [1,2,3,4,5,6,7,8,9,0];
let result3 = smallestEqual(input3);

let input4 = [2,1,3,5,2];
let result4 = smallestEqual(input4);