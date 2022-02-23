/**
  给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

  示例 1：

  输入: s = "leetcode"
  输出: 0
  示例 2:

  输入: s = "loveleetcode"
  输出: 2
  示例 3:

  输入: s = "aabb"
  输出: -1

  提示:
  1 <= s.length <= 10^5
  s 只包含小写字母
 */

/**
 * Map记录次数与索引
 *
 * @param {string} s
 * @return {number}
 */
let firstUniqChar2 = function(s) {
  let sArr = s.split('');
  let map = new Map();

  for (let i = 0; i < sArr.length; i++) {
    const curElement = sArr[i];

    if (map.has(curElement)) {
      let newObj = map.get(curElement);

      map.set(curElement, {
        ...newObj,
        count: newObj.count += 1
      });

      continue;
    }

    map.set(curElement, {
      index: i,
      count: 1
    });
  }


  for (const [key, value] of map) {
    if (value.count === 1) {
      return value.index;
    }
  }

  return -1;
};


/**
 * 使用队列
 *
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function(s) {
  class Queue {
    constructor() {
      this.queue = [];
    }
    enQueue(element) {
      this.queue.push(element);
    }
    deQueue() {
      return this.queue.shift();
    }
    size() {
      return this.queue.length;
    }
    front() {
      return this.queue[0];
    }
    tail() {
      return this.queue[this.queue.length - 1];
    }
  }

  let myQueue = new Queue();
  let map = new Map();
  let sArr = s.split('');

  for (let i = 0; i < sArr.length; i++) {
    const curElement = sArr[i];
    const curIndex = i;

    if (map.has(curElement)) {
      map.set(curElement, -1);

      while (myQueue.size() > 0 && map.get(myQueue.front()[0]) === -1) {
        myQueue.deQueue();
      }
      continue;
    }

    map.set(curElement, curIndex);
    myQueue.enQueue([curElement, curIndex]);
  }

  if (myQueue.size() > 0) {
    let front = myQueue.deQueue();
    return front[1];
  }
  return -1;
};


let input =  "loveleetcode"
let result = firstUniqChar(input);

console.log(result);