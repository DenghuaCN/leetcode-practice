/**
  .55给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

  数组中的每个元素代表你在该位置可以跳跃的最大长度。

  判断你是否能够到达最后一个下标。
   
  示例 1：
  输入：nums = [2,3,1,1,4]
  输出：true
  解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

  示例 2：
  输入：nums = [3,2,1,0,4]
  输出：false
  解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
   
  提示：
  1 <= nums.length <= 3 * 10^4
  0 <= nums[i] <= 10^5
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
  let range = 0;

  let i = 0;
  while (i <= range) {
    let newRange = nums[i] + i; // 更新i能在range内移动的范围

    range = Math.max(newRange, range); // i每次移动只能在range的范围内移动，每移动一个元素，range得到该元素数值（新的覆盖范围）的补充，让i继续移动下去。

    if (range >= nums.length - 1) {
      return true;
    }
    i++;
  }

  return false;
};

// let input = [2,3,1,1,4];
let input = [3,2,1,0,4];
let result = canJump(input);

console.log(result);

/**
 * 思路：
 *
 * 局部最优解: 不需要思考每个步骤跳几步，只需要记录每次长度能覆盖的范围即可。
 *
 */