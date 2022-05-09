/**
给你一个二维整数数组 nums ，其中 nums[i] 是由 *不同正整数* 组成的一个*非空数组* ，按 升序排列 返回一个数组，数组中的每个元素在 nums 所有数组 中都出现过。

示例 1：
输入：nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
输出：[3,4]
解释：
nums[0] = [3,1,2,4,5]，nums[1] = [1,2,3,4]，nums[2] = [3,4,5,6]，在 nums 中每个数组中都出现的数字是 3 和 4 ，所以返回 [3,4] 。

示例 2：
输入：nums = [[1,2,3],[4,5,6]]
输出：[]
解释：
不存在同时出现在 nums[0] 和 nums[1] 的整数，所以返回一个空列表 [] 。

提示：
1 <= nums.length <= 1000
1 <= sum(nums[i].length) <= 1000
1 <= nums[i][j] <= 1000
nums[i] 中的所有值 互不相同

 */

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
let intersection = function(nums) {
  let ans = [];

  let arrSet = nums.map((arr) => {
    return new Set(arr);
  })

  for (const item of arrSet[0]) {
    let isPass = true;

    let i = 1;
    while (i < arrSet.length) {
      if (!arrSet[i].has(item)) {
        isPass = false;
        break;
      }
      i++;
    }

    if (isPass) {
      ans.push(item);
    }
  }

  return ans.sort((a,b) => {return a - b});
};

// let input = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]];
let input = [[1,2,3],[4,5,6]];
let result = intersection(input);

console.log(result);