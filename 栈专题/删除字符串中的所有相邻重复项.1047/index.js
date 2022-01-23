/**
  给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

  在 S 上反复执行重复项删除操作，直到无法继续删除。

  在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

   

  示例：

  输入："abbaca"
  输出："ca"
  解释：
  例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
   

  提示：

  1 <= S.length <= 20000
  S 仅由小写英文字母组成。
 */

/**
 * 基础栈(> 300ms) 需要两次loop，第二次loop将结果栈遍历弹出组成字符串，时间复杂度O(n + m)， n:字符串长度 m: 栈的大小
 *
 * @param {string} s
 * @return {string}
 */
let removeDuplicates2 = function(s) {
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

  let sArr = s.split('');
  let myStack = new Stack();
  let result = [];

  for (let i = 0; i < sArr.length; i++) {
    let char = sArr[i];

    if (char === myStack.top()) {
      myStack.pop();
      continue;
    }

    myStack.push(char);
  }

  const LEN = myStack.size();

  for (let j = 0; j < LEN; j++) {
    result.unshift(myStack.pop());
  }

  return result.join('');
};

/**
 * 简化栈(< 100ms)，一次loop既可。
 *
 * @param {string} s
 * @return {string}
 */
let removeDuplicates = function(s) {
  let sArr = s.split('');
  let result = [];

  for (let i = 0; i < sArr.length; i++) {
    const char = sArr[i];

    if (char === result[result.length - 1]) {
      result.pop();
      continue;
    }

    result.push(char);
  }

  return result.join('');
};



let input = "abbaca";
let result = removeDuplicates(input);

console.log(result);