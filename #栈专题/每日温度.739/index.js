/**
  请根据每日 气温 列表 temperatures ，请计算在每一天需要等几天才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

  示例 1:

  输入: temperatures = [73,74,75,71,69,72,76,73]
  输出: [1,1,4,2,1,1,0,0]
  示例 2:

  输入: temperatures = [30,40,50,60]
  输出: [1,1,1,0]
  示例 3:

  输入: temperatures = [30,60,90]
  输出: [1,1,0]

  提示：

  1 <= temperatures.length <= 105
  30 <= temperatures[i] <= 100
 */

/**
 * 暴力 O(n^2)
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures2 = function(temperatures) {
  let result = [];

  for (let i = 0; i < temperatures.length; i++) {
    const EVERY_DAY_TEMPERATURE = temperatures[i];

    for (let j = i + 1; j < temperatures.length; j++) {
      const EVERY_SECOND_DAY_TEMPERATURE = temperatures[j];

      if (EVERY_SECOND_DAY_TEMPERATURE <= EVERY_DAY_TEMPERATURE) {
        if (j === temperatures.length - 1) { // 如果对比到最后一个没有比EVERY_DAY_TEMPERATURE大的温度，则为0
          result.push(0)
        }
        continue;
      }

      result.push(j - i);
      break;
    }
  }

  result.push(0);

  return result;
};


/**
 * 单调栈
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function(temperatures) {
  class Stack {
    constructor() {
      this.stack = [];
    }
    push(element) {
      this.stack.push(element);
    }
    pop() {
      return this.stack.pop();
    }
    top() {
      return this.stack[this.stack.length - 1];
    }
    size() {
      return this.stack.length;
    }
  }

  let myStack = new Stack();
  let result = new Array(temperatures.length).fill(0);


  for (let i = 0; i < temperatures.length; i++) {
    let everyDayTemperature = temperatures[i];

    while (myStack.size() !== 0 && everyDayTemperature > temperatures[myStack.top()]) { //  维护一个由栈底到栈顶单调递减的栈，栈存放温度的下标
      let preIndex = myStack.pop();
      result[preIndex] = i - preIndex;
    }

    myStack.push(i);
  }

  return result;
};



let input = [73,74,75,71,69,72,76,73];
// let input = [30,40,50,60];
// let input = [30,60,90];

let result = dailyTemperatures(input);
console.log(result);
