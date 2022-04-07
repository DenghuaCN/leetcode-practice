/**
  给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：

  0 <= i, j, k, l < n
  nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
  ?
  示例 1：
  输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
  输出：2
  解释：
  两个元组如下：
  1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
  2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

  示例 2：
  输入：nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
  输出：1

  提示：
  n == nums1.length
  n == nums2.length
  n == nums3.length
  n == nums4.length
  1 <= n <= 200
  -2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
 */

/**
 * 参考题解
 * 分组 + 哈希，找出构成 Map1 + Map2 = -(Map3 + Map4)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
let fourSumCount = function(nums1, nums2, nums3, nums4) {
  let ans = 0;

  let groupMap1 = new Map();  // key: nums1[i] + nums2[i]  value: (nums1[i] + nums2[i]) 次数
      groupMap1 = new Map();

  /**
      对于 A 和 B，我们使用二重循环对它们进行遍历，得到所有 A[i]+B[j] 的值并存入哈希映射中。
      对于哈希映射中的每个键值对，每个键表示一种 A[i]+B[j]，对应的值为 A[i]+B[j] 出现的次数。
   */
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      groupMap1.set(sum, (groupMap1.get(sum) || 0) + 1);
    }
  }

  /**
   * 对于 CC 和 DD，我们同样使用二重循环对它们进行遍历
   * 当遍历到 C[k]+D[l] 时，如果 -(C[k]+D[l])出现在哈希映射中，那么将 -(C[k]+D[l])对应的值累加进答案中。
   */

  for (let x = 0; x < nums3.length; x++) {
    for (let y = 0; y < nums4.length; y++) {
      let absNum = -(nums3[x] + nums4[y]);

      if (groupMap1.has(absNum)) {
        ans += groupMap1.get(absNum);
      }
    }
  }

  return ans;
};

// let input = [[1, 2], [-2, -1], [-1, 2], [0, 2]];
// let input = [[0], [0], [0], [0]];
let input = [[-1,-1], [-1,1], [-1,1], [1,-1]];

let result = fourSumCount(...input);

console.log(result);