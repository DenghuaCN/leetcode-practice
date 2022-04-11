/**
  给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 -1 。

  混合字符串 由小写英文字母和数字组成。

  示例 1：
  输入：s = "dfa12321afd"
  输出：2
  解释：出现在 s 中的数字包括 [1, 2, 3] 。第二大的数字是 2 。

  示例 2：
  输入：s = "abc1111"
  输出：-1
  解释：出现在 s 中的数字只包含 [1] 。没有第二大的数字。
   
  提示：
  1 <= s.length <= 500
  s 只包含小写英文字母和（或）数字。
 */

/**
 * @param {string} s
 * @return {number}
 */
let secondHighest2 = function(s) {
  let sArr = s.split('');
  const set = new Set(['0','1','2','3','4','5','6','7','8','9']);
  let numSet = new Set();


  for (let i = 0; i < sArr.length; i++) {
    const element = sArr[i];

    if (set.has(element)) {
      numSet.add(Number(element));
    }
  }

  let numArr = Array.from(numSet);
  numArr.sort((a, b) => {
    return b - a;
  })

  if (typeof numArr[1] === 'number') {
    return numArr[1]
  } else {
    return -1;
  }
};


/**
 * 优化
 */
 let secondHighest = function(s) {
  let sArr = s.split('');
  const set = new Set([0,1,2,3,4,5,6,7,8,9]);

  let max = Number.MIN_SAFE_INTEGER;
  let secondMax = max;

  for (let i = 0; i < sArr.length; i++) {
    const num = Number(sArr[i]);

    if (set.has(num)) {
      if (num > max) {
        secondMax = max;
        max = num;
      } else if (num < max && num > secondMax) {
        secondMax = num;
      }
    }
  }

  if (secondMax === Number.MIN_SAFE_INTEGER) {
    return -1;
  }
  return secondMax;
};

// let input = 'abc1111';
// let input = "ck077";
// let input = 'dfa12321afd';
let input = "sjhtz8344";

let result = secondHighest(input);

console.log('result:', result);