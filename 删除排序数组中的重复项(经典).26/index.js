/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * 快慢指针1
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates2 = (nums) => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 0;


  for (let i = 0; i < nums.length; i++) {
    right++;

    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  let finallyArr = nums.slice(0, left);

  return finallyArr.length;
}

/**
 * 快慢指针2
 * @param {number[]} nums
 * @return {number}
 */
 let removeDuplicates = (nums) => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let len = nums.length;
  let left = 0;
  let right = 0;

  while (right < len) {
    right++;

    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  let finallyArr = nums.slice(0, left);
  return finallyArr.length;
}


let input = [-1, -2, 0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 4, 5, 6]; // 9
// let input = [0, 0, 1, 2]; // 3


let result = removeDuplicates(input);
console.log(result);
