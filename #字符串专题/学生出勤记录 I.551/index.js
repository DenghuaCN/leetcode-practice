/**
  给你一个字符串 s 表示一个学生的出勤记录，其中的每个字符用来标记当天的出勤情况（缺勤、迟到、到场）。记录中只含下面三种字符：

  'A'：Absent，缺勤
  'L'：Late，迟到
  'P'：Present，到场
  如果学生能够 同时 满足下面两个条件，则可以获得出勤奖励：

  c1. 按 总出勤 计，学生缺勤（'A'）严格 少于两天。
  c2. 学生 不会 存在 连续 3 天或 连续 3 天以上的迟到（'L'）记录。
  如果学生可以获得出勤奖励，返回 true ；否则，返回 false 。

  示例 1：
  输入：s = "PPALLP"
  输出：true
  解释：学生缺勤次数少于 2 次，且不存在 3 天或以上的连续迟到记录。

  示例 2：
  输入：s = "PPALLL"
  输出：false
  解释：学生最后三天连续迟到，所以不满足出勤奖励的条件。

  提示：
  1 <= s.length <= 1000
  s[i] 为 'A'、'L' 或 'P'

 */

/**
 * @param {string} s
 * @return {boolean}
 */
let checkRecord = function(s) {
  let absentTime = 0;
  let lateTime = 0;

  let i = 0;
  while (i < s.length) {
    const CHAR = s[i];

    if (CHAR === 'A') {
      absentTime++;
      // lateTime = 0;
    } else {
      if (CHAR === 'P') {
        lateTime = 0;
      } else {
        lateTime++;
      }
    }

    if (lateTime >= 3 || absentTime >= 2) {
      return false;
    }
    i++;
  }

  return true;
};

// let input = 'PPALLP';
// let input = 'PPALLL';
// let input = 'PPPPPP';
// let input = 'AAAAAA';
// let input = 'LLLLLL';
// let input = "LALL"; // 怎么用对拍生成这个case?
// let input = 'PLPLPLLPL';

// let result = checkRecord(input);
// console.log(result);


/**
 * 对拍测试
 */

let fn2 = () => {
  let status = ['A', 'L', 'P'];
  let random = (min, max) => {
    min = Math.ceil(min);
    max = Math.max(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  let input = new Array(random(1, 5)).fill('');
  for (let i = 0; i < input.length; i++) {
    input[i] = status[random(0, 3)];
  }

  return input;
}

let diff = (fn1, fn2) => {

  let callTime = 100;
  let i = 0;
  while (i < callTime) {
    let input = fn2();
    let result = fn1(input);
    if (!result) {
      console.log(input);
    }

    i++;
  }
}

// diff(checkRecord, fn2);