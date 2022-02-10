/**
  给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

  示例 1：
  输入：n = 2
  输出：["1/2"]
  解释："1/2" 是唯一一个分母小于等于 2 的最简分数。

  示例 2：
  输入：n = 3
  输出：["1/2","1/3","2/3"]

  示例 3：
  输入：n = 4
  输出：["1/2","1/3","1/4","2/3","3/4"]
  解释："2/4" 不是最简分数，因为它可以化简为 "1/2" 。

  示例 4：
  输入：n = 1
  输出：[]
   
  提示：

  1 <= n <= 100
 */

/**
 * @param {number} n
 * @return {string[]}
 */
let simplifiedFractions = function(n) {
  let results = [];

  if (n === 1) {
    return [];
  }

  // 若分子分母的最大公约数为1，则我们找到了一个最简分数。
  const gcd = (a , b) => {
    if (b === 0) {
      return a;
    }

    return gcd(b, a % b);
  }

  // 枚举分母 denominator ∈ [2,n] 和分子 numerator ∈ [1, denominator)
  for (let denominator = 2; denominator <= n; ++denominator) {
    for (let numerator = 1; numerator < denominator; ++numerator) {
      if (gcd(numerator, denominator) == 1) {
        results.push(numerator + '/' + denominator);
      }
    }
  }

  return results;
};

let input = 9;
let result = simplifiedFractions(input);

console.log(result);