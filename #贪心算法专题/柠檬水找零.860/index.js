/**
  在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
  每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
  注意，一开始你手头没有任何零钱。
  给你一个整数数组 bills ，其中 bills[i] 是第 i 位顾客付的账。如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

  示例 1：
  输入：bills = [5,5,5,10,20]
  输出：true
  解释：
  前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
  第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
  第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
  由于所有客户都得到了正确的找零，所以我们输出 true。

  示例 2：
  输入：bills = [5,5,10,10,20]
  输出：false
  解释：
  前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
  对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
  对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
  由于不是每位顾客都得到了正确的找零，所以答案是 false。
   
  提示：
  1 <= bills.length <= 10^5
  bills[i] 不是 5 就是 10 或是 20 
 */

/**
 * @param {number[]} bills
 * @return {boolean}
 */
let lemonadeChange = function(bills) {
  let map = new Map([
    [5, 0],
    [10, 0],
    [20, 0],
  ])

  let i = 0;
  while (i < bills.length) {
    map.set(bills[i], (map.get(bills[i]) || 0) + 1);

    if (bills[i] === 10) {
      if (map.get(5) >= 1) {
        map.set(5, map.get(5) - 1);
      } else {
        return false;
      }
    } else if (bills[i] === 20) {
      if (map.get(5) >= 1 && map.get(10) >= 1) { // 优先找零10元的
        map.set(5, map.get(5) - 1);
        map.set(10, map.get(10) - 1);
      } else if (map.get(5) >= 3) {
        map.set(5, map.get(5) - 3);
      } else {
        return false;
      }
    }
    i++;
  }

  return true;
};

// let input = [5,5,5,10,20];
// let input = [5,5,10,10,20];
// let input = [5,5,5,10,5,20,5,10,5,20]; // true
let input = [5,5,10,10,5,20,5,10,5,5]; // true

let result = lemonadeChange(input);

console.log(result);

/**
 * 思路
 *
 * 对于10元，需要找零5元
 *
 * 对于20元，需要找零15元。那么会有两种组合
 * 1. 1张10元 1张5元
 * 2. 3张5元
 *
 * 当1，2组合都满足的时候，由于需要5元的场景更多，优先选择第一种组合。
 */