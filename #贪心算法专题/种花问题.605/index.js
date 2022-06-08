/**
  假设有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

  给你一个整数数组  flowerbed 表示花坛，由若干 0 和 1 组成，其中 0 表示没种植花，1 表示种植了花。另有一个数 n ，
  能否在不打破种植规则的情况下种入 n 朵花？能则返回 true ，不能则返回 false。

  示例 1：
  输入：flowerbed = [1,0,0,0,1], n = 1
  输出：true

  示例 2：
  输入：flowerbed = [1,0,0,0,1], n = 2
  输出：false
   
  提示：
  1 <= flowerbed.length <= 2 * 10^4
  flowerbed[i] 为 0 或 1
  flowerbed 中不存在相邻的两朵花
  0 <= n <= flowerbed.length
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function(flowerbed, n) {
  let i = 0;
  while (i < flowerbed.length) {
    if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }

  if (n <= 0) {
    return true;
  }
  return false;
};

let input = [[1,0,0,0,1], 1];
// let input = [[1,0,0,0,1], 2];
// let input = [[0,1,0], 2]
// let input = [[0,1,0,1,0,1,0,0], 1];

let result = canPlaceFlowers(...input);

console.log(result);


/**
 * 局部最优解: 如 当前花坛的 相邻花坛 没有 种植花，则可种植。
 * 全局最优解: 凡事不构成竞争状态的花坛，都能够种植。
 */