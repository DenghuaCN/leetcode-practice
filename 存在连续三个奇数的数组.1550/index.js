/**
  给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false 。

  示例 1：
  输入：arr = [2,6,4,1]
  输出：false
  解释：不存在连续三个元素都是奇数的情况。

  示例 2：
  输入：arr = [1,2,34,3,4,5,7,23,12]
  输出：true
  解释：存在连续三个元素都是奇数的情况，即 [5,7,23] 。

  提示：
  1 <= arr.length <= 1000
  1 <= arr[i] <= 1000

 */

/**
 * 暴力枚举
 *
 * @param {number[]} arr
 * @return {boolean}
 */
let threeConsecutiveOdds = function(arr) {

  let left = 0;
  let right = left + 2;

  while (right < arr.length) {
    if ((arr[left] * arr[left + 1] * arr[right]) % 2 === 1) { // n个奇数的乘积是奇数，n个偶数的乘积是偶数；算式中有一个是偶数，则乘积是偶数；
      return true;
    }

    left++;
    right = left + 2;
  }

  return false;
};


let input = [2,6,4,1];
let result = threeConsecutiveOdds(input);

console.log(result);
