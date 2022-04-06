/**
  一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

  示例 1:
  输入: [0,1,3]
  输出: 2

  示例 2:
  输入: [0,1,2,3,4,5,6,7,9]
  输出: 8

  限制：
  1 <= 数组长度 <= 10000

 */


/**
 * 执行用时: 50ms~70ms
 * 哈希集合
 * @param {number[]} nums
 * @return {number}
 */
 let missingNumber2 = function(nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  let j = 0;
  while (j <= nums.length) {
    if (!set.has(j)) return j;
    j++;
  }
};

/**
 * 执行用时: 280ms+
 * 使用includes方法会比哈希集合慢很多，因为哈希集合的查找可以达到O(1)
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber3 = function(nums) {
  for (let i = 0; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }
};

/**
 * 数学方法
 */
let missingNumber = function(nums) {
  let NumsSum = 0;
  let allSum = 0;

  let i = 0;
  while (i <= nums.length) {
    if (i !== nums.length) { // 注意指针越界
      NumsSum += nums[i];
    }

    allSum += i;
    i++;
  }
  return allSum - NumsSum;
};

let input = [0,1,2,3,4,5,6,7,9]
let result = missingNumber(input);

console.log(result);