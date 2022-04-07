/**
  给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。

  示例 1：
  输入：[3,2,3]
  输出：[3]

  示例 2：
  输入：nums = [1]
  输出：[1]

  示例 3：
  输入：[1,1,1,3,3,2,2,2]
  输出：[1,2]
   
  提示：
  1 <= nums.length <= 5 * 10^4
  -10^9 <= nums[i] <= 10^9
   
 */

/**
 * 哈希映射 + 暴力
 *
 * @param {number[]} nums
 * @return {number[]}
 */
let majorityElement = function(nums) {
  let ans = [];
  let map = new Map();

  let i = 0;
  while (i < nums.length) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
    i++;
  }


  let average = Math.floor(nums.length / 3);

  for (let [key, value] of map) {
    if (value > average) {
      ans.push(key);
    }
  }

  return ans;
};

// let input = [3,2,2,3];
let input = [1,1,1,3,3,2,2,2];
let result = majorityElement(input);
console.log(result);