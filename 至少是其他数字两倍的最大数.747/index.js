/**
  给你一个整数数组 nums ，其中 *总是存在唯一的* 一个最大整数 。

  请你找出数组中的最大元素并检查它是否 至少是数组中每个其他数字的两倍 。如果是，则返回 最大元素的下标 ，否则返回 -1 。

  示例 1：
  输入：nums = [3,6,1,0]
  输出：1
  解释：6 是最大的整数，对于数组中的其他整数，6 大于数组中其他元素的两倍。6 的下标是 1 ，所以返回 1 。

  示例 2：
  输入：nums = [1,2,3,4]
  输出：-1
  解释：4 没有超过 3 的两倍大，所以返回 -1 。

  示例 3：
  输入：nums = [1]
  输出：0
  解释：因为不存在其他数字，所以认为现有数字 1 至少是其他数字的两倍。

  提示：
  1 <= nums.length <= 50
  0 <= nums[i] <= 100
  nums 中的最大元素是唯一的
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
let dominantIndex2 = function(nums) {
  if (nums.length === 1) return 0;

  // 既然总是存在唯一的最大整数，可以将数组排序后取出
  let sortNums = [...nums];

  sortNums.sort((a, b) => {
    return a - b;
  })

  let maxNum = sortNums[sortNums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i] * 2 && nums[i] !== maxNum) {
      return -1;
    }
  }

  return nums.indexOf(maxNum);
};


/**
 * 优化1
 *
 * @param {number[]} nums
 * @return {number}
 */
 let dominantIndex3 = function(nums) {
  if (nums.length === 1) return 0;

  // 既然总是存在唯一的最大整数，可以将数组排序后取出
  let sortNums = [...nums];

  sortNums.sort((a, b) => {
    return a - b;
  })

  let maxNum = sortNums[sortNums.length - 1];
  let secondMaxNum = sortNums[sortNums.length - 2];

  if (secondMaxNum * 2 > maxNum) { // 如果倒数第二个数 * 2大于maxNum， 则直接返回-1
    return -1;
  }

  return nums.indexOf(maxNum);
};

/**
 * 优化2 (双指针) 一轮循环中拿到最大和第二大的数在做比较 0(n)
 *
 * @param {number[]} nums
 * @return {number}
 */
 let dominantIndex = function(nums) {
  if (nums.length === 1) return 0;

  const LEN = nums.length;

  let right = 0, // 右指针
      maxNum = 0, // 最大的数
      maxNumIndex = 0 // 最大的数索引
      secondMax = 0; // 第二大的数


  while (right < LEN) {
    let curElement = nums[right];

    if (curElement > maxNum) {
      let tmp = maxNum;

      maxNum = curElement;
      maxNumIndex = right;

      secondMax = tmp;
    }


    if (curElement < maxNum && curElement > secondMax) {
      secondMax = curElement;
    }

    right++;
  }

  if (secondMax * 2 > maxNum) {
    return -1;
  }

  return maxNumIndex;
};



let input = [3, 6, 1, 0];
let result = dominantIndex(input);

console.log(result);