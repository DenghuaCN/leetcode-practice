/**
  给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
  返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

  示例 1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2,2]

  示例 2:
  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[4,9]

  提示：
  1 <= nums1.length, nums2.length <= 1000
  0 <= nums1[i], nums2[i] <= 1000

  进阶：

  如果给定的数组已经排好序呢？你将如何优化你的算法？
  如果 nums1 的大小比 nums2 小，哪种方法更优？
  如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 */

/**
 * 暴力
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect2 = function(nums1, nums2) {

  let results = [];
  let longArr;
  let shortArr;

  if (nums1.length > nums2.length) {
    longArr = nums1;
    shortArr = nums2;
  } else {
    longArr = nums2;
    shortArr = nums1;
  }

  for (let i = 0; i < shortArr.length; i++) {
    for (let j = 0; j < longArr.length; j++) {
      if (shortArr[i] === longArr[j]) {
        results.push(shortArr[i]);
        shortArr.splice(i, 1);
        longArr.splice(j, 1);
        i--;
        break;
      }
    }
  }

  return results;
};

/**
 * hashMap
 */
let intersect = function(nums1, nums2) {
  let map = new Map();
  let results = [];

  if (nums1.length > nums2.length) {
    longArr = nums1;
    shortArr = nums2;
  } else {
    longArr = nums2;
    shortArr = nums1;
  }

  for (let i = 0; i < longArr.length; i++) {
    let KEY = longArr[i];
    map.set(KEY, (map.get(KEY) || 0) + 1);
  }

  for (let j = 0; j < shortArr.length; j++) {
    let KEY = shortArr[j];
    let KEY_TIME = map.get(KEY);

    if (KEY_TIME > 0) {
      results.push(KEY);
      map.set(KEY, KEY_TIME - 1);
    }
  }

  return results;
};

// let input = [[3, 1, 2], [1, 1]];
let input = [[4,9,5],[9,4,9,8,4]];
let result = intersect(...input);

console.log(result);