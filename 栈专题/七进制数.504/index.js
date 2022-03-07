/**
  给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

  示例 1:
  输入: num = 100
  输出: "202"

  示例 2:
  输入: num = -7
  输出: "-10"

  提示：
  -10^7 <= num <= 10^7
 */

class Stack {
  constructor() {
    this.items = []
  }
  // 入栈操作
  push(element) {
    this.items.push(element);
  }
  // 出栈操作
  pop(element) {
    return this.items.pop(element);
  }
  // 查看栈顶
  peek() {
    this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  // 清空栈
  clear() {
    this.items = [];
  }
}

/**
 * 优化
 * @param {number} num
 * @return {string}
 */
let convertToBase7 = function(num) {
  if (num === 0) return 0;

  const BASE = 7;
  let ans = '';
  let stack = new Stack();
  let isNegativeNumber = false;
  let remainder = Number.MAX_SAFE_INTEGER;

  if (num < 0) {
    num = Math.abs(num)
    isNegativeNumber = true;
  }

  while (num > 0) {
    remainder = num % BASE;
    num = Math.floor(num / BASE); // 商的整数部分做下次除法运算
    stack.push(remainder); // 将余数入栈
  }

  while (stack.size() > 0) {
    ans += stack.pop();
  }

  if (isNegativeNumber) {
    return `-${ans}`
  }

  return ans;
};

let input = 7;
let result = convertToBase7(input);

console.log(result);
