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
let countKDifference2 = function(nums, k) {
  let results = [];

  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const otherElement = nums[j];
      const diff = Math.abs(otherElement - element);

      if (diff === k) {
        results.push([element, otherElement]);
      } else if (diff > k) {
        break;
      }
    }
  }

  return results.length;
};

/**
 * HashMap (绝了)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let countKDifference = function(nums, k) {
  let count = 0;
  let map = new Map();
  const LEN = nums.length;

  let i = 0;

  while (i < LEN) {
    const curElement = nums[i];

    let left = (map.get(curElement - k) || 0); // 将当前遍历的值 与 K运算后，在Map中作为key来查找，查找到说明存在一个符合条件的数值对，Map中查找操作操作: O(1)
    let right = (map.get(curElement + k) || 0); // 将当前遍历的值 与 K运算后，在Map中作为key来查找，查找到说明存在一个符合条件的数值对

    count += left;
    count += right;

    map.set(curElement, (map.get(curElement) || 0) + 1); // 每次将当前遍历到的元素添加到Map中

    i++;
  }

  return count;
};

let input = [
  [3,2,1,5,4],
  2
];
let result = countKDifference(...input);

console.log(result);
