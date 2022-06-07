/**
  给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，
  使得从 1 到 n 的 min(ai, bi) 总和最大。

  返回该 最大总和 。

   
  示例 1：
  输入：nums = [1,4,3,2]
  输出：4
  解释：所有可能的分法（忽略元素顺序）为：
  1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
  2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
  3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
  所以最大总和为 4

  示例 2：
  输入：nums = [6,2,6,5,1,2]
  输出：9
  解释：最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9

  提示：
  1 <= n <= 10^4
  nums.length == 2 * n
  -10^4 <= nums[i] <= 10^4
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
let arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => {return a - b});

  let ans = 0;

  let i = 0;
  while (i < nums.length) {
    ans += nums[i];
    i += 2;
  }

  return ans;
};

/**
 * 摘自题解评论区
 * 一个朴素（贪心）的理解：
 *
 * 假设排完序的结果为a1<=b1<=a2<=b2<=...<=an<=bn
 * 那么a1应该跟谁一组呢？
 *
 * a1作为全局最小值，无论跟谁一组a1都会被累加进答案，
 * 相反，a1的搭档会被永久排除。
 * 既然如此，莫不如排除一个较小的数，即给a1找一个“最小的搭档”b1。
 *
 * 当a1、b1被处理之后，a2同理分析。
 * 所以，最终选择a1,a2,...,an会得到最好的结果。
 */


let input = [6,2,6,5,1,2];
let result = arrayPairSum(input);

console.log(result);