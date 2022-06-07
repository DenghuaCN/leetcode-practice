/**
  给你一个四位 正 整数 num 。请你使用 num 中的 数位 ，将 num 拆成两个新的整数 new1 和 new2 。new1 和 new2 中可以有 前导 0 ，且 num 中 所有 数位都必须使用。

  比方说，给你 num = 2932 ，你拥有的数位包括：两个 2 ，一个 9 和一个 3 。一些可能的 [new1, new2] 数对为 [22, 93]，[23, 92]，[223, 9] 和 [2, 329] 。
  请你返回可以得到的 new1 和 new2 的 最小 和。

   
  示例 1：
  输入：num = 2932
  输出：52
  解释：可行的 [new1, new2] 数对为 [29, 23] ，[223, 9] 等等。
  最小和为数对 [29, 23] 的和：29 + 23 = 52 。

  示例 2：
  输入：num = 4009
  输出：13
  解释：可行的 [new1, new2] 数对为 [0, 49] ，[490, 0] 等等。
  最小和为数对 [4, 9] 的和：4 + 9 = 13 。
   
  提示：
  1000 <= num <= 9999
 */

/**
 *  将num中较小的两位作为new1和new2的十位，而将较大的两位作为个位，这样可以使得new1 + new2 最小;
 * @param {number} num
 * @return {number}
 */
let minimumSum = function(num) {
  let digits = String(num).split('').map(n => parseInt(n)).sort((a, b) => (a - b));

  return 10 * (digits[0] + digits[1]) + digits[2] + digits[3];
};

// let input = 2932;
let input = 4009;
// let input = 1000;
// let input = 9999;

let result = minimumSum(input);

console.log(result);

/**
 * 对拍
 */
let diff = (fn1, fn2) => {

  let callTime = 10;
  let i = 0;
  while (i < callTime) {
    let input = fn1();
    let maybeAns = fn2(input);
    console.log(input, ' | ', maybeAns);
    i++;
  }
}

let generateNum = () => {
  let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  return random(1000, 10000);
}

// diff(generateNum, minimumSum)