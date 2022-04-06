/**
  给你一个整数数组 nums ，另给你一个整数 original ，这是需要在 nums 中搜索的第一个数字。

  接下来，你需要按下述步骤操作：

  如果在 nums 中找到 original ，将 original 乘以 2 ，得到新 original（即，令 original = 2 * original）。
  否则，停止这一过程。
  只要能在数组中找到新 original ，就对新 original 继续 重复 这一过程。
  返回 original 的 最终 值。


  示例 1：
  输入：nums = [5,3,6,1,12], original = 3
  输出：24
  解释：
  - 3 能在 nums 中找到。3 * 2 = 6 。
  - 6 能在 nums 中找到。6 * 2 = 12 。
  - 12 能在 nums 中找到。12 * 2 = 24 。
  - 24 不能在 nums 中找到。因此，返回 24 。

  示例 2：
  输入：nums = [2,7,9], original = 4
  输出：4
  解释：
  - 4 不能在 nums 中找到。因此，返回 4 。
   
  提示：

  1 <= nums.length <= 1000
  1 <= nums[i], original <= 1000

 */

/**
 * 哈希集合
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
let findFinalValue2 = function(nums, original) {
  let set = new Set(nums);

  while (set.has(original)) {
    original = 2 * original;
  }

  return original;
};

/**
 * 递归
 */
let findFinalValue = function(nums, original) {
  let set = new Set(nums);

  let subFindFinalValue = (set, original) => {
    if (!set.has(original)) {
      return original;
    }

    original = 2 * original;
    return subFindFinalValue(set, original);
  }

  return subFindFinalValue(set, original);
};



// let input = [[5,3,6,1,12], 3];
let input = [[2,7,9], 4];
let result = findFinalValue(...input);

console.log(result);
