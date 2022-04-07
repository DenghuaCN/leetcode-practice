/**
 * 双向链表中，链接是双向的：一个链向下一个元素，另一个链向上一个元素。
 */

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null; // 头节点
    this.tail = null; // 尾节点
  }

  /**
   * Node辅助类，包含一个val属性，存放添加到列表的值，一个next属性，指向
   * @param {*} val
   */
  Node(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  /**
   * 插入节点
   * @param {number} position
   * @param {*} val
   */
  insert(position, val) {
    if (position < 0 || position > this.length) {
      return false;
    }

    let newNode = this.Node(val),
        current = this.head,
        previous,
        index = 0;

    if (position === 0) { // 头部插入
      if (current === null) { // 链表为空
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = current;
        current.prev = newNode; // 设置节点的prev指针
      }
    } else if (position === this.length) { // 尾部插入
      current = this.tail;
      current.next = newNode;

      newNode.prev = current;  // 设置节点的prev指针
      this.tail = node;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      // 设置节点的next指针
      newNode.next = current;
      previous.next = newNode;
      // 设置节点的prev指针
      current.prev = newNode;
      newNode.prev = previous;
    }

    this.length++; // 更新链表长度

    return true;
  }

  /**
   * 移除节点
   * @param {number} position
   */
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    if (position === 0) {
      this.head = current.next;

      if (length === 1) { // 如果链表只有一个节点，则删除后不存在任何节点，tail指向null
        this.tail = null;
      } else {
        this.head.prev = null; // 否则将原本第二节点（删除后将为第一个）的prev指针指向null
      }
    } else if (position === this.length - 1) {
      // 删除最后一个节点
      current = this.tail; // 获取倒数第一个节点

      this.tail = current.prev; // 将尾节点指针指向倒数第二个节点
      this.tail.next = null;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
      current.next.prev = previous;
    }

    this.length--;
    return current.val;
  }
}