/**
  给你一个整数数组 nums 和一个整数 k ，请你返回数对 (i, j) 的数目，满足 i < j 且 |nums[i] - nums[j]| == k 。

  |x| 的值定义为：

  如果 x >= 0 ，那么值为 x 。
  如果 x < 0 ，那么值为 -x 。

  示例 1：
  输入：nums = [1,2,2,1], k = 1
  输出：4
  解释：差的绝对值为 1 的数对为：
  - [1* ,2* ,2 , 1]
  - [1*, 2, 2*, 1]
  - [1, 2*, 2, 1*]
  - [1, 2, 2*, 1*]

  示例 2：
  输入：nums = [1,3], k = 3
  输出：0
  解释：没有任何数对差的绝对值为 3 。

  示例 3：
  输入：nums = [3,2,1,5,4], k = 2
  输出：3
  解释：差的绝对值为 2 的数对为：
  - [3*, 2, 1*, 5, 4]
  - [3*, 2, 1, 5*, 4]
  - [3, 2*, 1, 5, 4*]
   
  提示：

  1 <= nums.length <= 200
  1 <= nums[i] <= 100
  1 <= k <= 99
 */

/**
 * 暴力
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let countKDifference = function(nums, k) {
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const otherElement = nums[j];

      if (Math.abs(otherElement - element) === k) {
        results.push([element, otherElement]);
      }
    }
  }

  return results.length;
};

let input = [
  [3,2,1,5,4],
  2
];
let result = countKDifference(...input);



/**
 * 暴力负优化(I can't believe that)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 let countKDifference2 = function(nums, k) {
  let results = [];

  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    let j = i + 1;

    while (j < nums.length) {
      const otherElement = nums[j];
      const diff = Math.abs(otherElement - element);

      if (diff === k) {
        results.push([element, otherElement]);
      } else if (diff > k) {
        break;
      }

      j++;
    }
  }

  return results.length;
};