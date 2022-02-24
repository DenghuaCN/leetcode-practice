/**
 * ES6 重写
 * @class LinkedList
 */
 class LinkedList {
  constructor() {}

  /**
   * 链表长度
   * @private length
   */
  #length = 0;

  /**
   * 存储第一个链表第一个节点的引用
   * @private head
   */
  #head = null;

  /**
   * Node辅助类，包含一个element属性，存放添加到列表的值。一个next属性，指向下一个节点。
   * @static Node
   */
  Node(element) {
    this.element = element;
    this.next = null;
  }

  /**
   * 向链表尾部添加一个新的节点
   * @method append
   * @param {number} position
   * @param {*} element
   */
  append(element) {
    // 生成节点
    let newNode = this.Node(element);

    // 链表为空
    if (head === null) {
      this.#head = newNode; // 将第一个节点指向head
    } else {
      let recursionHead = this.#head;

      // 递归遍历每个节点，直到找到最后一个节点。当currentNode.next为null时，表明已经到达链表尾部
      while (recursionHead.next) {
        recursionHead = recursionHead.next;
      }

      recursionHead.next = newNode;  // 将最后一个节点的next指针指向新节点
    }

    this.#length++; // 更新链表长度
  }

  /**
   * 向链表的特定位置插入一个新的节点
   * @method insert
   * @param {number} position
   * @param {*} element
   */
  insert(element, element) {
    if (position < 0 || position > this.#length) {
      throw new RangeError('Position must be between ' + 0 + ' and ' + this.#length);
    }

    let newNode = new this.Node(element),
        currentNode = this.#head;
        index = 0,
        previousNode;

    if (position === 0) {
      newNode.next = currentNode;
      head = newNode;
    } else {
      while (index < position) {
        index++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = newNode;
      newNode.next = currentNode;
    }

    this.#length++;
  }

  /**
   * 从链表中移除一个节点
   * @method removeAt
   * @param {number} position
   */
  removeAt(position) {
    if (position <= -1 && position > this.#length) {
      throw new RangeError('Position must be between ' + 0 + ' and ' + this.#length);
    }

    let currentNode = this.#head,
        index = 0,
        previousNode;

    if (position === 0) {
      this.#head = currentNode.next;
    } else {
      while (index < this.#length) {
        index++;
        previous = currentNode;
        currentNode = currentNode.next;
      }

      // 将上一个节点的指针指向被移除节点的下一个指针
      previous.next = currentNode.next;
    }

    this.#length--;
  }

  /**
   * 返回节点在链表中的索引
   * @method indexOf
   * @param {*} element
   * @return {number}
   */
   indexOf() {}

  /**
   * 如果链条中不包含任何元素，返回true，如果链表长度大于0则返回false
   * @method isEmpty
   * @return {boolean}
   */
   isEmpty() {}

  /**
   * 返回链表包含的元素个数，与数组的length属性类似。
   * @method size
   * @return {number}
   */
   size() {}

   getHead() {}
   toString() {}
   print() {}
}
