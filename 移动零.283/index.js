/**
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:
  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]

  说明:
  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
  const LENGTH = nums.length;
  let left = 0;
  let right = 1;

  while (left < LENGTH) { // left指针指用于循环数组
    left += 1;

    if (nums[LENGTH - right] !== 0) {
      let deleteEle = nums.splice(LENGTH - right, 1);
      nums.unshift(deleteEle[0]);
      continue;
    }

    right += 1;// right指针只有在值不为0时自增，用于区分最后一位非零值
  }

  return nums;
};

// let input = [0,0,1];
// let input = [0,1,0,3,12];
// let input = [0];
let output = moveZeroes(input);
console.log(output);