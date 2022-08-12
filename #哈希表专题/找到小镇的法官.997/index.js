/**
  小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。

  如果小镇法官真的存在，那么：

  小镇法官不会信任任何人。
  每个人（除了小镇法官）都信任这位小镇法官。
  只有一个人同时满足属性 1 和属性 2。

  给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。

  如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。

  示例 1：
  输入：n = 2, trust = [[1,2]]
  输出：2

  示例 2：
  输入：n = 3, trust = [[1,3],[2,3]]
  输出：3

  示例 3：
  输入：n = 3, trust = [[1,3],[2,3],[3,1]]
  输出：-1
   
  提示：
  1 <= n <= 1000
  0 <= trust.length <= 10^4
  trust[i].length == 2
  trust 中的所有trust[i] = [ai, bi] 互不相同
  ai != bi
  1 <= ai, bi <= n
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
let findJudge = function(n, trust) {
  if (n === 1) return 1;

  let trustMap = new Map(); // 被信任次数计数

  let notByTrust = new Set(); // 没有信任过别人的集合
  for (let j = 1; j <= n; j++) {
    notByTrust.add(j);
  }


  let i = 0;
  while (i < trust.length) {
    const trustOther = trust[i][0];
    const byTrust = trust[i][1];

    notByTrust.delete(trustOther);
    trustMap.set(byTrust, (trustMap.get(byTrust) || 0) + 1);
    i++;
  }

  for (const [key,value] of trustMap) {
    if (value === n - 1 && notByTrust.has(key)) {
      return key
    }
  }

  return -1;
};

// let input = [2, [[1,2]]];
// let input = [3, [[1,3],[2,3]]];
// let input = [3, [[1,3],[2,3],[3,1]]];
// let input = [4, [[1,3],[1,4],[2,3],[2,4],[4,3]]];
let input = [1, []];



let r = findJudge(...input);
console.log(r);