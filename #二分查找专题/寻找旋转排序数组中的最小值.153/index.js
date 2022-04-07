/**
  已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
  若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
  若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
  注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

  给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

  你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

  示例 1：
  输入：nums = [3,4,5,1,2]
  输出：1
  解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

  示例 2：
  输入：nums = [4,5,6,7,0,1,2]
  输出：0
  解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。

  示例 3：
  输入：nums = [11,13,15,17]
  输出：11
  解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。

  提示：
  n == nums.length
  1 <= n <= 5000
  -5000 <= nums[i] <= 5000
  nums 中的所有整数 互不相同
  nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转

 */

/**
 * 二分 (https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/)
 *
 * 考虑数组中的最后一个元素 last：
 * 1. 最小值 (右侧) 的元素（不包括最后一个元素本身），它们的值一定都严格小于 last;
 * 2. 而在最小值 (左侧) 的元素，它们的值一定都严格大于 last。因此，
 *
 *  if (nums[middle] < nums[high]) {
 *    处于右边的范围，忽略middle右边
 *  } else {
 *    处于左边的范围，忽略middle左边
 *  }
 *
 * @param {number[]} nums
 * @return {number}
 */
let findMin = function(nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let middle = Math.floor((low + high) / 2);

    if (nums[middle] < nums[high]) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  // console.log(high === low); //最后两个指针 都指向最小值

  return nums[low];
};

let input = [4,5,6,7,0,1,2]
let result = findMin(input);

console.log(result);