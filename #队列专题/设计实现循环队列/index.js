/**
  设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

  循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

  你的实现应该支持如下操作：
  * MyCircularQueue(k): 构造器，设置队列长度为 k 。
  * Front: 从队首获取元素。如果队列为空，返回 -1 。
  * Rear: 获取队尾元素。如果队列为空，返回 -1 。
  * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
  * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
  * isEmpty(): 检查循环队列是否为空。
  * isFull(): 检查循环队列是否已满。


  示例：

  MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
  circularQueue.enQueue(1);  // 返回 true
  circularQueue.enQueue(2);  // 返回 true
  circularQueue.enQueue(3);  // 返回 true
  circularQueue.enQueue(4);  // 返回 false，队列已满
  circularQueue.Rear();  // 返回 3
  circularQueue.isFull();  // 返回 true
  circularQueue.deQueue();  // 返回 true
  circularQueue.enQueue(4);  // 返回 true
  circularQueue.Rear();  // 返回 4
 

  提示：

  所有的值都在 0 至 1000 的范围内；
  操作数将在 1 至 1000 的范围内；
  请不要使用内置的队列库。


  参考1: https://www.cnblogs.com/pingguo-softwaretesting/p/14521423.html
  参考2: https://leetcode-cn.com/leetbook/read/queue-stack/kgtj7/
  参考3: https://www.yiibai.com/data_structure/circular-queue.html

  考点: 重点在如何判断[队列为空] 与 [队列已满]
 */


/**
 * 设计实现循环队列
 * @param {number} k 队列长度
 */
let MyCircularQueue = function(k) {
  // javascript中数组为动态数组
  this.items = [];
  this.MAX_SIZE = k;
  this.head = -1; // 头部指针
  this.tail = -1; // 尾部指针
};

/**
 * 入列操作
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isEmpty()) {
    this.head++;
    this.tail++;
    this.items[this.tail] = value;
    return true;
  }

  if (this.isFull()) {
    return false;
  }

  this.tail = (this.tail + 1) % this.MAX_SIZE; // 更新tail指针
  this.items[this.tail] = value; // 元素入列

  return true;
};

/**
 * 出列操作
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false;
  }

  if (this.head === this.tail) {
    this.head = -1;
    this.tail = -1;
    return true;
  }

  this.head = (this.head + 1) % this.MAX_SIZE
  return true;
};

/**
 * 查看队头
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.items[this.head];
};

/**
 * 查看队尾
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1;
  }

  return this.items[this.tail];
};

/**
 * 队列是否为空
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  if (this.head === - 1 && this.tail === -1) {
    return true;
  }
  return false;
};

/**
 * 队列是否已满，判断依据: tail指针的下一位指向head则判定已满
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if ((this.tail + 1) % this.MAX_SIZE === this.head) {
    return true;
  }

  return false;
};


let circularQueue = new MyCircularQueue(3); // 设置长度为 3

console.log('enQueue', circularQueue.enQueue(1));  // 返回 true
console.log('enQueue', circularQueue.enQueue(2));  // 返回 true
console.log('enQueue', circularQueue.enQueue(3));  // 返回 true
console.log('enQueue', circularQueue.enQueue(4));  // 返回 false，队列已满
console.log(circularQueue.Rear());  // 返回 3
console.log(circularQueue.isFull());  // 返回 true
console.log(circularQueue.deQueue());  // 返回 true
console.log(circularQueue.enQueue(4));  // 返回 true
console.log(circularQueue.Rear());  // 返回 4