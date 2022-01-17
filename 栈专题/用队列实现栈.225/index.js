/**
  请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。

  实现 MyStack 类：

  void push(int x) 将元素 x 压入栈顶。
  int pop() 移除并返回栈顶元素。
  int top() 返回栈顶元素。
  boolean empty() 如果栈是空的，返回 true ；否则，返回 false 。
   

  注意：

  你只能使用队列的基本操作 —— 也就是 push to back、peek/pop from front、size 和 is empty 这些操作。
  你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。

  示例：
  输入：
  ["MyStack", "push", "push", "top", "pop", "empty"]
  [[], [1], [2], [], [], []]
  输出：
  [null, null, null, 2, 2, false]

  解释：
  MyStack myStack = new MyStack();
  myStack.push(1);
  myStack.push(2);
  myStack.top(); // 返回 2
  myStack.pop(); // 返回 2
  myStack.empty(); // 返回 False
   

  提示：

  1 <= x <= 9
  最多调用100 次 push、pop、top 和 empty
  每次调用 pop 和 top 都保证栈不为空
   
  进阶：你能否实现每种操作的均摊时间复杂度为 O(1) 的栈？换句话说，执行 n 个操作的总时间复杂度 O(n) ，尽管其中某个操作可能需要比其他操作更长的时间。你可以使用两个以上的队列。
 */

  /**
   *
   * 参考题解
   * 方法一：两个队列(原题意给定两个队列实现)
   *
   * @param {number} x
   * @return {void}
   */
  class MyStack {
    constructor() {
      this.queue = [];
      this.tmpQueue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
      for (let i = 0; i < this.queue.length; i++) {
        this.tmpQueue.push(this.queue[i])
      }

      this.queue = [x];

      if (this.tmpQueue.length > 0) {
        for (let j = this.tmpQueue.length - 1; j >= 0; j--) {
          this.queue.unshift(this.tmpQueue[j]);
        }
      }
      this.tmpQueue = [];
    }
    /**
     * @return {number}
     */
    top() {
      return this.queue[this.queue.length - 1];
    }
    /**
     * @return {number}
     */
    pop() {
      return this.queue.pop();
    }

    /**
     * @return {boolean}
     */
    empty() {
      return this.queue.length === 0;
    }
  }

  /**
   *
   * 参考题解
   * 方法二：一个队列
   *
   * @param {number} x
   * @return {void}
   */
   class MyStack2 {
    constructor() {
      this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
      this.queue.push(x);
    }
    /**
     * @return {number}
     */
    top() {
      return this.queue[this.queue.length - 1];
    }
    /**
     * @return {number}
     */
    pop() {
      return this.queue.pop();
    }

    /**
     * @return {boolean}
     */
    empty() {
      return this.queue.length === 0;
    }
   }

  let myStack = new MyStack();
  myStack.push(3);
  myStack.push(2);
  myStack.push(1);

  console.log(myStack.pop()); // 返回 1
  console.log(myStack.pop()); // 返回 2
  console.log(myStack.pop()); // 返回 3

  console.log(myStack.empty()); // 返回 true

  /**
   * Your MyStack object will be instantiated and called as such:
   * var obj = new MyStack()
   * obj.push(x)
   * var param_2 = obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.empty()
   */
