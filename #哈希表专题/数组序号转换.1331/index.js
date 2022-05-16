/**
给你一个整数数组 arr ，请你将数组中的每个元素替换为它们排序后的序号。

序号代表了一个元素有多大。序号编号的规则如下：

序号从 1 开始编号。
一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。
每个数字的序号都应该尽可能地小。
 
示例 1：
输入：arr = [40,10,20,30]
输出：[4,1,2,3]
解释：40 是最大的元素。 10 是最小的元素。 20 是第二小的数字。 30 是第三小的数字。

示例 2：
输入：arr = [100,100,100]
输出：[1,1,1]
解释：所有元素有相同的序号。

示例 3：
输入：arr = [37,12,28,9,100,56,80,5,12]
输出：[5,3,4,2,8,6,7,1,3]
 

提示：
0 <= arr.length <= 10^5
-10^9 <= arr[i] <= 10^9

 */

/**
 * 排序 -> 哈希映射 -> 记录答案
 * @param {number[]} arr
 * @return {number[]}
 */
let arrayRankTransform2 = function(arr) {
  sortArr = [...arr];
  sortArr.sort((a, b) => {
    return a - b;
  })

  let map = new Map();
  let preMin = 0;

  for (let i = 0; i < sortArr.length; i++) {
    if (!map.has(sortArr[i])) {
      preMin++;
      map.set(sortArr[i], preMin);
    }
  }

  let ans = [];

  let j = 0;
  while (j < arr.length) {
    ans[j] = map.get(arr[j]);
    j++;
  }

  return ans;
};


/**
 * 排序 -> 二分搜索
 * 问题： 比上面的方法慢 20ms 左右?
 *
 * @param {number[]} arr
 * @return {number[]}
 */
 let arrayRankTransform = function(arr) {
  let sortArr = Array.from(new Set(arr)); // 去重后排序
  sortArr.sort((a, b) => {
    return a - b;
  })

  let BinarySearch = (n, arr) => {
    let L = 0;
    let R = arr.length - 1;

    while (L <= R) {
      const M = Math.floor((L + R) / 2);
      if (arr[M] === n) {
        return M;
      } else if (arr[M] < n) {
        L = M + 1;
      } else if (arr[M] > n) {
        R = M - 1;
      }
    }
    return -1;
  }

  let ans = [];
  let ansMap = new Map(); // 使用哈希记录答案，避免重复查询

  let i = 0;
  while (i < arr.length) {
    if (ansMap.has(arr[i])) {
      ans[i] = ansMap.get(arr[i]);
    } else {
      let index = BinarySearch(arr[i], sortArr); // 注意这里二分的数组是排序后的不是原数组

      ans[i] = index + 1;
      ansMap.set(arr[i], index + 1);
    }
    i++;
  }

  return ans;
};



// let input = [40,10,20,30];
// let input = [100,100,100];
let input = [37,12,28,9,100,56,80,5,12];
let result = arrayRankTransform(input);

console.log(result);