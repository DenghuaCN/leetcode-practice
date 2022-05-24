/**
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:
  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]

  说明:
  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。

  提示:
  1 <= nums.length <= 10^4
  -231 <= nums[i] <= 231 - 1
 */

/**
 * 原地操作
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes2 = function(nums) {
  const LENGTH = nums.length;
  let left = 0;  // left指针指用于循环数组
  let right = 1; // right指针用于从尾部开始搜寻非0数字

  while (left < LENGTH) {
    left += 1;

    if (nums[LENGTH - right] !== 0) {
      let notZeroNumber = nums[LENGTH - right];

      nums.splice(LENGTH - right, 1); // 删除此非0数字

      nums.unshift(notZeroNumber); // 推到数组头部
      continue;
    }

    right += 1; // right指针左移
  }

  return nums;
};

/**
 * API战士: )
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 let moveZeroes = function(nums) {
  let zeroIndex = [];

  let i = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      zeroIndex.push(i);
    }
    i++;
  }

  console.log(nums);

  let j = 0;
  while (j < zeroIndex.length) {
    nums.splice(zeroIndex[j], 1, null);
    // delete nums[zeroIndex[j]]
    j++;

    console.log(nums);
  }


};


// let input = [0,0,1];
let input = [0,1,0,3,12];
// let input = [0];
// let input = [45192,0,-659,-52359,-99225,-75991,0,-15155,27382,59818,0,-30645,-17025,81209,887,64648];

let output = moveZeroes(input);
console.log(output);