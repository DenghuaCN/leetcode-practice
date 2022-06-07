/**
  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

  有效字符串需满足：

  左括号必须用相同类型的右括号闭合。
  左括号必须以正确的顺序闭合。

  示例 1：
  输入：s = "()"
  输出：true

  示例 2：
  输入：s = "()[]{}"
  输出：true

  示例 3：
  输入：s = "(]"
  输出：false

  示例 4：
  输入：s = "([)]"
  输出：false

  示例 5：
  输入：s = "{[]}"
  输出：true
   
  提示：
  1 <= s.length <= 104
  s 仅由括号 '()[]{}' 组成
 */

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  clear() {
    this.stack = [];
  }
}

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  if (s.length === 1) {
    return false;
  }

  const leftBrackets = new Set(['(', '[', '{']),
        rightBrackets = new Set([')', ']', '}']),
        completeBrackets = new Set(['()', '[]', '{}']);

  let myStack = new Stack();
  let sArr = s.split('');

  for (let i = 0; i < sArr.length; i++) {
    const CHAR = sArr[i];

    if (leftBrackets.has(CHAR)) { // 匹配任意大小的左括号
      myStack.push(CHAR);
    } else if (rightBrackets.has(CHAR)) { // 匹配任意大小的右括号
      let completeBracket = `${myStack.peek()}${CHAR}` // 将栈顶元素 与 未知类型的右括号组合为新的字符串

      if (completeBrackets.has(completeBracket)) { // 如果新的字符串命中集合内任一元素，则说明为正确的组合，可以出栈
        myStack.pop();  // 只有栈顶元素与匹配到的元素能组成一对时，才能出栈，即'()', '[]', '{}'
      }
    }
  }

  if (myStack.size() === 0) {
    return true;
  }

  return false;
};

// let input = "{[]}"
// let input = "[";
let input = "((";

let result = isValid(input);

console.log(result);