/**
  n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

  每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

  * 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

  就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

  给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

  dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
  dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
  dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
  返回表示最终状态的字符串。

  示例 1：
  输入：dominoes = "RR.L"
  输出："RR.L"
  解释：第一张多米诺骨牌没有给第二张施加额外的力。

  示例 2：
  输入：dominoes = ".L.R...LR..L.."
  输出："LL.RR.LLRRLL.."

  提示：

  n == dominoes.length
  1 <= n <= 10^5
  dominoes[i] 为 'L'、'R' 或 '.'
 */

/**
 * 暴力计算每一个'.'
 *
 * @param {string} dominoes
 * @return {string}
 */
let pushDominoes = function(dominoes) {
  let dominoesArr = dominoes.split('');
  let Len = dominoes.length;
  let set = [];

  for (let i = 0; i < dominoesArr.length; i++) {
    const curDominoes = dominoesArr[i];

    if (curDominoes !== '.') {
      continue;
    }

    let forward = i; // 往前寻找
    let forwardDominoes; // 往前寻找到的第一个状态

    let backward = i; // 往后寻找
    let backwardDominoes;// 往后寻找到的第一个状态

    while (forward >= 0) {
      if (dominoesArr[forward] !== '.') {
        break;
      }
      forward--;
    }
    forwardDominoes = dominoesArr[forward];

    while (backward <= Len) {
      if (dominoesArr[backward] !== '.') {
        break;
      }
      backward++;
    }
    backwardDominoes = dominoesArr[backward];


    // 左右存在RL
    if (forwardDominoes === 'R' && backwardDominoes === 'L') {
      if (Math.abs(i - forward) === Math.abs(i - backward)) {
        // 如果距离相同，则保持竖立状态
        continue;
      } else if (i - forward < backward - i) {
        // 如果距离不同，则将其置为距离近的那一个状态
        // dominoesArr[i] = forwardDominoes;
        set.push({
          key: i,
          value: forwardDominoes
        })
      } else {
        // dominoesArr[i] = backwardDominoes;
        set.push({
          key: i,
          value: backwardDominoes
        })
      }
    } else if (forwardDominoes === "L" && backwardDominoes === "R") {
      // 左右存在LR
      // dominoesArr[i] = '.';
      set.push({
        key: i,
        value: '.'
      })
    } else if (backwardDominoes === 'L') {
      // dominoesArr[i] = 'L';
      set.push({
        key: i,
        value: 'L'
      })
    } else if (forwardDominoes === 'R') {
      // dominoesArr[i] = 'R';
      set.push({
        key: i,
        value: 'R'
      })
    }
  }


  for (let i = 0; i < set.length; i++) {
    let index = set[i].key;
    let value = set[i].value
    dominoesArr[index] = value;
  }

  return dominoesArr.join('');
};

let input = ".L.R...LR..L..";
let result = pushDominoes(input);

console.log(result);