/**
  编写一个算法来判断一个数 n 是不是快乐数。

  「快乐数」 定义为：
  对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
  然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
  如果这个过程 结果为 1，那么这个数就是快乐数。
  如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

  示例 1：
  输入：n = 19
  输出：true
  解释：
  1^2 + 9^2 = 82
  8^2 + 22 = 6^8
  6^2 + 8^2 = 100
  1^2 + 0^2 + 0^2 = 1

  示例 2：
  输入：n = 2
  输出：false

  提示：
  1 <= n <= 2^31 - 1
 */

/**
 * 参考题解
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
  let getDecimal = (n) => {
    let nextNum = 0;
    while (n > 0) {
      let power = n % 10;
      n = Math.floor(n / 10);
      nextNum += power * power
    }
    return nextNum;
  }

  let aroundSet = new Set();

  while (!aroundSet.has(n)) {
    aroundSet.add(n);

    if (n === 1) {
      return true;
    }

    n = getDecimal(n);
  }

  return false;
};


let input = 19;
let result = isHappy(input);
console.log(result);