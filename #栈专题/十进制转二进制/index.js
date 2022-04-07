/**
 * 十进制转二进制
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  top() {
    return this.items[this.items.length - 1];
  }
  size() {
    return this.items.length;
  }
}

let decimalTransfer = (num) => {
  if (num === 0) return 0;

  let binaryStr = '';
  let myStack = new Stack();
  let remainder = Number.MAX_VALUE;

  while (num > 0) {
    remainder = num % 2;
    num = Math.floor(num / 2); // 商的整数部分做下次除法运算
    myStack.push(remainder); // 将余数入栈
  }

  while (myStack.size() > 0) {
    binaryStr += myStack.pop();
  }

  return Number(binaryStr);
}


// let input = 0;
// let input = 10;
let input = 50;
let result = decimalTransfer(input);

console.log(result);