/**
  给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
  子数组 是数组中的一个连续部分。

  示例 1：
    输入：nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    输出：6
    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

  示例 2：
    输入：nums = [1]
    输出：1

  示例 3：
    输入：nums = [5,4,-1,7,8]
    输出：23 [5,4,-1,7,8]

  提示：
    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
   
  进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
*/


//

/**
 * 暴力法 O(n^3)
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArraySlowly = function(nums) {
  let max = Math.max(...nums); // 默认应以数组中最大的整数作为默认值，不能使用0作为默认值 case: [-1] case: [-1, -2]
  let len = nums.length;

  let k = 1; // 窗口范围 1 <= k <= nums.length
  /**
   * k = 1 窗口循环5次 确定此数组在 K 范围下的最大值
   * k = 2 窗口循环4次 ...
   * k = 3 窗口循环3次 ...
   * k = 4 窗口循环2次 ...
   * k = 5 窗口循环1次 ...
   */

  while (k <= nums.length) { // 此轮确定 k 的范围

    // 此轮确定 数组在这个 范围(k) 内 应循环 多少次得到此k值下的的最大值
    for (let i = 0; i < len - k + 1; i++) {
      // 此轮用于累计这个范围(k)下所有轮次窗口的计数
      let everyTimeTotal = 0;

      for (let j = 0; j < k; j++) {
        everyTimeTotal = everyTimeTotal + nums[j + i]; // +i 是因为需要移动窗口 [5,4,-1,7,8] -> (5 + 4) -> (4 + -1) -> (-1 + 7) -> (7 + 8)
      }

      max = Math.max(everyTimeTotal, max);
      // console.log(`K: ${k}, 此轮k值循环下，得到的最大值为${everyTimeTotal}, 最大值为${max}`);
    }

    k += 1; // 增大窗口范围
  }

  console.log(max);
  // return max;
};


/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

// let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// let input = [-1];
// let input = [5,4,-1,7,8];
// let input = [-1, -2];
// let input = [1, 2, -1];

let output = maxSubArray(input);


// 考点： 贪心 动态规划