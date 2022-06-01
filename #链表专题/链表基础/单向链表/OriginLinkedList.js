/**
 * Node辅助类，包含一个val属性，存放添加到列表的值。一个next属性，指向下一个节点。
 * @param {*} val
 */
function Node(val) {
  this.val = val;
  this.next = null;
};

function OriginLinkedList() {
  let length = 0; // 链表内部存储数量的length属性（私有）
  let head = null; // 存储第一个节点的引用

  // 向链表尾部添加一个新的节点
  this.append = function(val) {
    let node = new Node(val);
    let current = head;

    // 判断是否为空链表
    if (head === null) {
      // 为空列表，将当前节点作为头部节点
      head = node;
    } else {
      // 从head开始一直找到最后一个节点 O(n)
      while (current.next) { // 当current.next为null时，表明已经到达链表尾部
        current = current.next;
      }
      // 将当前节点next指针指向新的节点
      current.next = node;
    }
    // 链表长度更新
    length++;
  };

  // 向链表的特定位置插入一个新的节点
  this.insert = function(position, val) {
    if (position < 0 || position > length) {
      return null;
    }

    let node = new Node(val),
        current = head,
        previous,
        index = 0;

    if (position === 0) {
      node.next = current
      head = node;
    } else {

      while (index < position) {
        index++;
        previous = current;
        current = current.next;
      };

      node.next = current;
      previous.next = node;
    }

    length++;
    return true;
  };

  // 从链表中特定位置移除一个节点
  this.removeAt = function(position) {
    // 越界
    if (position <= -1 && position > length) {
      return null;
    }

    let current = head, // 此时current引用了第一个节点
        previous,
        index = 0; // 用于记录何时到达position位置

    // 移除第一个节点
    if (position === 0) {
      head = current.next; // 将head改为第二个节点的引用
    } else {
      // 移除第position个节点
      while (index < position) {
        index += 1;
        previous = current; // 由于下一步会将current指向current的下一个节点，所以这里先将其引用保存
        current = current.next;
      }
      // 将previous与current的下一项链接起来：跳过current，从而移除它
      previous.next = current.next;

    }

    length--;

    return true;
  };

  // 从链表中移除指定项
  this.remove = function(val) {
    let index = this.indexOf(val);

    return this.removeAt(index);
  }

  // 返回节点在链表中的索引，如果链表没有该节点则返回-1
  this.indexOf = function(val) {
    let current = head,
        index = 0;

    while (current) {
      if (val === current.val) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  // 如果链条中不包含任何元素，返回true，如果链表长度大于0则返回false
  this.isEmpty = function() {
    return length === 0;
  };

  // 返回链表包含的元素个数，与数组的length属性类似。
  this.size = function() {return length};

  // 获取链表的引用
  this.getHead = function() {return head};

  // 获取链表最后一个节点
  this.getTail = function() {
    let current = head;
    let tail = null;

    while (current && current.next) {
      current = current.next;
    }
    tail = current;

    return tail;
  };

  // toString对象会把LinkedList对象转换成一个字符串
  this.toString = function() {
    let current = head,
        string = '';

    while (current) {
      string += current.val + (current.next ? ":next->" : "");
      current = current.next;
    }
    return string;
  };

  // 打印链表数据
  this.print = function() {
    console.log(this.toString());
  };

  // 获取整个链表
  this.list = function() {
    console.log('head: ', head);
    return head;
  };
}

// let originList = new OriginLinkedList();

// originList.append("a");
// originList.append("b");
// originList.append("c");
// originList.append("d");

// originList.list();
// originList.print();

// let indexValue = 'b';
// console.log(`${indexValue}-indexOf: `, originList.indexOf(indexValue));

// console.log('--------------------------------------');

// originList.removeAt(1);

// originList.list();
// originList.print();


module.exports = {
  OriginLinkedList,
  Node
};