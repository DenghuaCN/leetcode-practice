/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

  说明：

  你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

  示例 1:

  输入: [2,2,1]
  输出: 1
  示例 2:

  输入: [4,1,2,1,2]
  输出: 4
 */

/**
 * 暴力
 * @param {number[]} nums
 * @return {number}
 */
 let singleNumber2 = function(nums) {
  // sort参数指定一个自定义排序的函数，!如果省略了该传值，数组的元素会先转换为string!，再根据每个字符在Unicode的值来排序
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && nums[i] !== nums[i + 1]) { // 情况1: [x, y, z, ......]
      return nums[i];
    } else if (i === nums.length - 1 && nums[i] !== nums[nums.length - 2]) { // 情况2: [......, x, y, z]
      return nums[nums.length - 1];
    } else if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) { // 情况3: [... x, y, z, ...]
      return nums[i];
    }
  }

  // 这个解法只适用于相同元素出现2次的情况
};


/**
 * hash
 */
let singleNumber = function(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (!map.has(element)) {
      map.set(element, 1);
      continue;
    }

    map.set(element, map.get(element) + 1);
  }

  for (const [key, value] of map) {
    if (value < 2) {
      return key;
    }
  }
};


let input = [2, 2, 1];
let result = singleNumber(input);

console.log(result);