  /**
  设计一个支持 push ，pop ，top 操作，并能在常数时间(O(1))内检索到最小元素的栈。

  push(x) —— 将元素 x 推入栈中。
  pop() —— 删除栈顶的元素。
  top() —— 获取栈顶元素。
  getMin() —— 检索栈中的最小元素。

  示例:
  输入：
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]

  输出：
  [null,null,null,null,-3,null,0,-2]

  解释：
  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin();   --> 返回 -3.
  minStack.pop();
  minStack.top();      --> 返回 0.
  minStack.getMin();   --> 返回 -2.
   

  提示：
  pop、top 和 getMin 操作总是在 非空栈 上调用。
 */


  class MinStack {
    constructor() {
      this.x_stack = [];
      this.x_minStack = [Infinity];
    }

    /**
     * 入栈
     * @return {element}
     */
    push(element) {
      this.x_stack.push(element);

      let minValue = Math.min(element, this.x_minStack[this.x_minStack.length - 1]);
      this.x_minStack.push(minValue);
    }

    /**
     * 出栈
     * @return {void}
     */
    pop() {
      this.x_minStack.pop();

      return this.x_stack.pop();
    }

    /**
     * 查看栈顶
     * @return {element}
     */
    top() {
      return this.x_stack[this.x_stack.length - 1];
    }

    /**
     * @return {element}
     */
    getMin() {
      return this.x_minStack[this.x_minStack.length - 1];
    }
  }

  let minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  console.log(minStack.getMin());//  返回 -3
  minStack.pop();
  console.log(minStack.top());// 返回 0
  console.log(minStack.getMin());// 返回 -2

  // var MinStack = function() {

  // };

  // /**
  //  * @param {number} val
  //  * @return {void}
  //  */
  // MinStack.prototype.push = function(val) {

  // };

  // /**
  //  * @return {void}
  //  */
  // MinStack.prototype.pop = function() {

  // };

  // /**
  //  * @return {number}
  //  */
  // MinStack.prototype.top = function() {

  // };

  // /**
  //  * @return {number}
  //  */
  // MinStack.prototype.getMin = function() {

  // };

  /**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(val)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.getMin()
   */