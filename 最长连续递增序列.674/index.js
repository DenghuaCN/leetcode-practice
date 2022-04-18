/**
  给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

  连续递增的子序列 可以由两个下标 l 和 r（l < r）确定，如果对于每个 l <= i < r，都有 nums[i] < nums[i + 1] ，那么子序列 [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] 就是连续递增子序列。


  示例 1：
  输入：nums = [1,3,5,4,7]
  输出：3
  解释：最长连续递增序列是 [1,3,5], 长度为3。
  尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。

  示例 2：
  输入：nums = [2,2,2,2,2]
  输出：1
  解释：最长连续递增序列是 [2], 长度为1。
   

  提示：
  1 <= nums.length <= 10*4
  -10^9 <= nums[i] <= 10^9
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
let findLengthOfLCIS2 = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return 1;
  }

  let ans = [];

  let i = 0;
  let preMaxIndex = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[preMaxIndex] < nums[j]) {
      if (j === nums.length - 1 && nums[j] > nums[j - 1]) { // case: [1,3,5,7];
        ans.push(j - i + 1);
        break;
      }

      preMaxIndex = j;
      j++;
    } else {
      ans.push(preMaxIndex - i + 1);
      i = j;
      preMaxIndex = i;

      j = i + 1;
    }
  }

  // console.log(ans);
  return Math.max(...ans);
};


/**
 * 优化
 */
 let findLengthOfLCIS = function(nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return 1;
  }

  let preAns = 0;
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[j - 1] < nums[j]) {
      if (j - i + 1 > preAns) {
        preAns = j - i + 1;
      }
      j++;
    } else {
      if ((j-1) - i + 1 > preAns) {
        preAns = (j-1) - i + 1;
      }

      i = j;
      j++;
    }
  }


  return preAns;
};


// let input = [1,3,5,7];
// let input = [1,3,5,4,7];
// let input =  [2,2,2,2,2];
// let input = [1,3,5,4,7,8,9,10,22,36,31]; // 1,3,5  7,8,9,10,22,36,31
let input = [1];
// let input = [1,2];

let result = findLengthOfLCIS(input);

console.log(result);