/**
  一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。

  给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。

  示例 1：
  输入：changed = [1,3,4,2,6,8]
  输出：[1,3,4]
  解释：一个可能的 original 数组为 [1,3,4] :
  - 将 1 乘以 2 ，得到 1 * 2 = 2 。
  - 将 3 乘以 2 ，得到 3 * 2 = 6 。
  - 将 4 乘以 2 ，得到 4 * 2 = 8 。
  其他可能的原数组方案为 [4,3,1] 或者 [3,1,4] 。

  示例 2：
  输入：changed = [6,3,0,1]
  输出：[]
  解释：changed 不是一个双倍数组。

  示例 3：
  输入：changed = [1]
  输出：[]
  解释：changed 不是一个双倍数组。
   
  提示：
  * 数组内元素可重复
  * 1 <= changed.length <= 10^5
  * 0 <= changed[i] <= 10^5
 */


/**
 * @param {number[]} changed
 * @return {number[]}
 */
let findOriginalArray = function(changed) {
  if (changed.length % 2 === 1) {
    return [];
  }

  class Queue {
    constructor() {
      this.item = [];
    }
    enQueue(element) {
      this.item.push(element);
    }
    deQueue() {
      return this.item.shift();
    }
    size() {
      return this.item.length;
    }
    front() {
      return this.item[0];
    }
    tail() {
      return this.item[this.item.length - 1];
    }
  }

  changed.sort((a, b) => {
    return a - b;
  });

  let results = [];
  let myQueue = new Queue();


  for (let i = 0; i < changed.length; i++) {
    const element = changed[i];

    if (myQueue.size() === 0) {
      myQueue.enQueue(element);
    } else {
      if (myQueue.front() * 2 === element) {
        results.push(myQueue.deQueue());
      } else {
        myQueue.enQueue(element);
      }
    }
  }

  if (myQueue.size() === 0) {
    return results;
  }

  return [];
};

// let input = [6,3,0,1];
// let input = [1, 1, 2, 2];
// let input = [0,0,0,0];
// let input = [1,3,4,2,6,8];
let result = findOriginalArray(input);

console.log(result);