/**
  .771

  给你一个字符串 jewels 代表石头中宝石的类型，另有一个字符串 stones 代表你拥有的石头。 stones 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。(有多少块宝石)

  字母区分大小写，因此 "a" 和 "A" 是不同类型的石头。

  示例 1：
  输入：jewels = "aA", stones = "aAAbbbb"
  输出：3

  示例 2：
  输入：jewels = "z", stones = "ZZ"
  输出：0

  提示：
  1 <= jewels.length, stones.length <= 50
  jewels 和 stones 仅由英文字母组成
  jewels 中的所有字符都是 唯一的

 */

/**
 * 计数
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
let numJewelsInStones2 = function(jewels, stones) {
  let jewels_Set = new Set(jewels);
  let ans = 0;

  let i = 0;
  let len  = stones.length;
  while (i < len) {
    if (jewels_Set.has(stones[i])) {
      ans++;
    }
    i++;
  }

  return ans;
};

/**
 * 另一种计数
 */
let numJewelsInStones = (jewels, stones) => {
  let jewels_Set = new Set(jewels);
  let stonesMap = new Map();

  let i = 0;
  while (i < stones.length) {
    if (stonesMap.has(stones[i])) {
      stonesMap.set(stones[i], stonesMap.get(stones[i]) + 1);
    } else {
      stonesMap.set(stones[i], 1);
    }
    i++;
  }

  let ans = 0;

  for (const [key, value] of stonesMap) {
    if (jewels_Set.has(key)) {
      ans += value;
    }
  };

  return ans;
}


let input = ["aA", "aAAbbbb"];
// let input = ["z", "ZZ"];
let result = numJewelsInStones(...input);

console.log(result);