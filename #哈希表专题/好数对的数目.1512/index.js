/**
  给你一个整数数组 nums 。
  如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。
  返回好数对的数目。

  示例 1：
  输入：nums = [1,2,3,1,1,3]
  输出：4
  解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始

  示例 2：
  输入：nums = [1,1,1,1]
  输出：6
  解释：数组中的每组数字都是好数对

  示例 3：
  输入：nums = [1,2,3]
  输出：0
   
  提示：
  1 <= nums.length <= 100
  1 <= nums[i] <= 100
 */

/**
 * 暴力
 * 思路: 由于条件 i < j，所以扫描时每一个j的起点设置为 j = i+1，满足nums[i] = nums[j]即可收集一对
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs2 = function(nums) {
  let ans = [];

  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j]) {
        ans[ans.length] = [i,j];
      }
      j++;
    }
    i++;
  }

  return ans.length;
};

/**
 * O(n)
 * 组合计数
 */
let numIdenticalPairs = function(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  console.log(map);

  let ans = 0;
  for (const [key,value] of map) {
    ans += (value * (value - 1)) / 2;
  }

  return ans;
};


// let input = [1,2,3,1,1,3];
// let input = [1,1,1,1];
let input = [1,2,3];
let r = numIdenticalPairs(input);

console.log(r);