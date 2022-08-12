/**
  给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

  示例 1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2]

  示例 2：
  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[9,4]
  解释：[4,9] 也是可通过的

  提示：
  1 <= nums1.length, nums2.length <= 1000
  0 <= nums1[i], nums2[i] <= 1000

 */

/**
 * API战士（哈希集合）
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection2 = function(nums1, nums2) {
  let setA = new Set(nums1);
  let setB = new Set(nums2);
  let intersection = new Set();

  for (const item of setA) {
    if (setB.has(item)) {
      intersection.add(item);
    }
  }
  return [...intersection];
};

/**
 * 排序后双指针(妙哇~)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
  nums1.sort((a, b) => {return a - b})
  nums2.sort((a, b) => {return a - b})

  let i = 0;
  let j = 0;
  let intersection = [];

  while (typeof nums1[i] === 'number'  && typeof nums2[j] === 'number') { // 该死的JS弱类型
    if (nums1[i] === nums2[j]) {
      if (!intersection.includes(nums1[i])) {
        intersection.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    }
  }

  return intersection;
};

let input = [[4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]]; // [ 4, 6, 7, 7, 7, 9 ] | [ 0, 0, 1, 2, 2, 4, 5, 6, 6 ]
let result = intersection(...input);

console.log(result);