/**
  给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

  如果数组中不存在目标值 target，返回 [-1, -1]。

  进阶：

  你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
   

  示例 1：

  输入：nums = [5,7,7,8,8,10], target = 8
  输出：[3,4]
  示例 2：

  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]
  示例 3：

  输入：nums = [], target = 0
  输出：[-1,-1]
   

  提示：

  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums 是一个非递减数组
  -109 <= target <= 109
 */

/**
 * API战士
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange2 = function(nums, target) {
  let start = nums.indexOf(target);
  let end = nums.lastIndexOf(target);

  if (start === -1) {
    return [-1, -1];
  }

  return [start, end];
};

/**
 * 二分查找
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let searchRange = function(nums, target) {
  let firstElement = nums[0];
  let lastElement = nums[nums.length - 1];

  if (target < firstElement || target > lastElement) { // 由于是有序数组，超出边界将直接返回[-1,-1]
    return [-1, -1];
  }

	let L = 0;
	let R = nums.length - 1;


  // O(log n)  n:给定数组长度
	while (L < R) { // 循环停止条件为: 左右指针交叉，不再通过M指针来寻找索引
		M = Math.floor((L + R) / 2);

		if (nums[M] < target) {
			L = M + 1;
		} else {
			R = M; // 当左指针指向目标值时，循环将开始收敛右指针
		}
	}

  // O(m)  m:目标元素重复次数
  if (nums[L] === target) { // 如果目标值位于区间内，但并不存在于数组中的情况
    let i = L;

    while (i < nums.length) {
      const curElement = nums[i];

      if (curElement !== target) {
        break;
      }

      i++;
    }

    return [L, i - 1];
  }

  return [-1, -1];
};

let input = [[1], 0];
let result = searchRange(...input);

console.log(result);
