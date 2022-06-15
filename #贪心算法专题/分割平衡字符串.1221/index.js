/**
  在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。(平衡字符串长度为偶数)

  给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。()

  注意：分割得到的每个字符串都必须是平衡字符串，且分割得到的平衡字符串是原平衡字符串的连续子串。

  返回可以通过分割得到的平衡字符串的 最大数量 。

  示例 1：
  输入：s = "RLRRLLRLRL"
  输出：4
  解释：s 可以分割为 "RL"、"RRLL"、"RL"、"RL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。

  示例 2：
  输入：s = "RLLLLRRRLR"
  输出：3
  解释：s 可以分割为 "RL"、"LLLRRR"、"LR" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。

  示例 3：
  输入：s = "LLLLRRRR"
  输出：1
  解释：s 只能保持原样 "LLLLRRRR".

  示例 4：
  输入：s = "RLRRRLLRLL"
  输出：2
  解释：s 可以分割为 "RL"、"RRRLLRLL" ，每个子字符串中都包含相同数量的 'L' 和 'R' 。
   
  提示：
  1 <= s.length <= 1000
  s[i] = 'L' 或 'R'
  s 是一个 平衡 字符串
 */

/**
 * @param {string} s
 * @return {number}
 */
let balancedStringSplit = function(s) {
  let ans = [];

  let minGroup = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      count++;
    } else {
      count--;
    }
    minGroup.push(s[i]);

    if (count === 0) {
      ans.push(minGroup.join(''));
      minGroup = [];
    }
  }

  return ans.length;
};

// let input = 'RLRRLLRLRL';
let input = 'RLLLLRRRLR';
// let input = 'LLLLRRRR';
// let input = 'RLRRRLLRLL';

let result = balancedStringSplit(input);

console.log(result);

/**
 * 思路:
 * 局部最优解：由于字符只存在两种字符'L''R'，开始收集任意一种字符，并计数+1，当收集到另一种字符，计数-1。当计数为0，则构成一组最小平衡字符串
 * 根据局部最优解，最后可达到全局最优解
 */