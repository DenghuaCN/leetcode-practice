/**
  假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。

  对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j] 。
  如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

  示例 1:
  输入: g = [1,2,3], s = [1,1]
  输出: 1
  解释:
  你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
  虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
  所以你应该输出1。

  示例 2:
  输入: g = [1,2], s = [1,2,3]
  输出: 2
  解释:
  你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
  你拥有的饼干数量和尺寸都足以让所有孩子满足。
  所以你应该输出2.
   
  提示：
  1 <= g.length <= 3 * 10^4
  0 <= s.length <= 3 * 10^4
  1 <= g[i], s[j] <= 231 - 1
 */

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
let findContentChildren = function(g, s) {
  // 将小屁孩胃口值和饼干尺寸升序
  let childArr = g.sort((a, b) => (a - b));
  let cookies = s.sort((a, b) => (a - b));

  let ans = 0; // 满足的小屁孩个数

  let i = 0,
      j = 0;

  while (j < cookies.length) {
    if (i === childArr.length) return ans; // 当所有小屁孩都满足了直接返回

    if (cookies[j] >= childArr[i]) { // 如果满足了一个小屁孩，更新答案，并寻找下一个胃口值和此胃口值需要的饼干尺寸
      ans++;
      i++;
    }
    // 不满足当前胃口值，则只移动饼干尺寸指针，直到找到一个能满足的饼干尺寸

    j++;
  }

  return ans;
};

// let input = [[1,2,3], [1,1]];
// let input = [[1,2],[1,2,3]];
// let input = [[1,2,3], [3]];
// let input = [
// [10,9,8,7], // 7 8 9 10
// [5,6,7,8]   // 5 6 7 8
// ]

let result = findContentChildren(...input);

console.log(result);