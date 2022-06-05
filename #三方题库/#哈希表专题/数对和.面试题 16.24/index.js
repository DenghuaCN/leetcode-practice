/**
设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。

示例 1:
输入: nums = [5,6,5], target = 11
输出: [[5,6]]

示例 2:
输入: nums = [5,6,5,6], target = 11
输出: [[5,6],[5,6]]

提示：
nums.length <= 100000

*/

/**
 * 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
let pairSums2 = function(nums, target) {
  nums = nums.sort((a, b) => {return a - b});
  let ans = []

  let i = 0;
  let r = nums.length - 1;
  while (i < r) {
    if (nums[i] + nums[r] === target) {
      ans.push([nums[i], nums[r]]);
      i++;
      r--;
    } else if (nums[i] + nums[r] > target) {
      r--
    } else {
      i++;
    }
  }

  return ans;
};


/**
 * 哈希
 */
let pairSums = function(nums, target) {
  let res = [], map = new Map(),
      len = nums.length;

  for(let i = 0; i < len; i++) {
      let  cur = nums[i],
           other = target - cur;

      // 如果存在成整数对
      if (map.get(other) > 0) {
        map.set(other, map.get(other) - 1);
        res.push([other, cur]);
      } else {
        // 不存在则做计数
        map.set(cur, (map.get(cur) || 0) + 1);
      }
  }

  return res;
};


// let input = [[5,6,5], 11]; // 5, 5, 6
// let input = [[5,6,5,6], 11]
// let input = [[-2,-1,0,3,5,6,7,9,13,14], 12];
// let input = [[5, 6, 3, -6, 2, 1, 1, 0, 8, 0], 2];
let input = [[100, -100, -100, -100], 0];

let result = pairSums(...input);

console.log(result);