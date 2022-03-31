/**
  数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？

  注意：本题相对书上原题稍作改动

  示例 1：
  输入：[3,0,1]
  输出：2
   
  示例 2：
  输入：[9,6,4,2,3,5,7,0,1]
  输出：8
*/

/**
 * 排序
 *
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber2 = function(nums) {
  nums.sort((a, b) => (a - b));

  let i = 0;
  while (i <= nums.length) {
    if (i !== nums[i]) {
      return i;
    }
    i++;
  }
};


/**
 * 数学 缺失的数字 = n的阶加 - (nums的阶加)
 */
let missingNumber3 = (nums) => {
  let nSum = 0;
  let numsSum = 0;

  const len = nums.length;
  let i = 0;
  while (i < len) {
    numsSum += nums[i];
    nSum += i;
    i++;
  }
  nSum += i;

  return nSum - numsSum;
}

/**
 * 再优化
 * 公式： result = n * ( n + 1) / 2 - sum;
 */
let missingNumber = (nums) => {
  let len = nums.length;

  let numsSum = 0; // n的阶加
  let nSum = len * ( len + 1) / 2; // 数组的阶加

  for (let i = 0; i < len; i++) {
    numsSum += nums[i];
  }

  return nSum - numsSum;
}



let input = [3,0,1];
// let input = [8,6,4,2,3,5,7,0,1]
// let input = [0]; // case1 n为nums.length
let result = missingNumber(input);

console.log(result);