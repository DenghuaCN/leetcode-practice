/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [-1, -2, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6]; // 9
let nums2 = [0, 0, 1, 2]; // 3

let removeDuplicates = function(nums) {
    if (!nums || nums.length === 0) {
      return 0
    }

    let left = 0;
    let right = 0;

    for (let i = 0; i < nums.length; i++) {
      right += 1;

      if (nums[left] === nums[right]) {
        continue;
      } else if (nums[left] !== nums[right]) {
        left += 1;
        nums[left] = nums[right]
      }

    }

    // console.log('left', left); // 最后Left指针会指向数组中最后一个不重复的元素，Left即为不重复元素集合的最后一个元素下标
    return left;
};

removeDuplicates(nums);

/* 考点: 数组，双指针(快慢指针) */