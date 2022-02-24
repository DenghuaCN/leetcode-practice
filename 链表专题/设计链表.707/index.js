/**
 * @Class Node
 * @param {*} element
 * @return {InstanceType} Node
 */
function Node(element) {
  this.element = element;
  this.next = null;
}

var MyLinkedList = function() {
  this.head = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }

  let currentNode = this.head;
  let i = 0;

  while (i < index) {
    i++;
    currentNode = currentNode.next;
  }

  return currentNode.element;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let currentNode = this.head;
    this.head = newNode;
    newNode.next = currentNode;
  }

  this.length++;

  return null;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.length++;

  return null;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index < 0 || index > this.length) {
    return null;
  }

  let newNode = new Node(val);
  let currentNode = this.head;
  let i = 0;
  let previous;


  if (index === 0) {
    newNode.next = currentNode;
    this.head = newNode;
  } else {
    while (i < index) {
      i++;
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = newNode;
    newNode.next = currentNode;
  }
  this.length++;

  return null;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.length ) {
    return null;
  }

  let currentNode = this.head;
  let i = 0;
  let previous = null;

  if (index === 0) {
    this.head = currentNode.next;
  } else {
    while (i < index) {
      i++;
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = currentNode.next;
  }

  this.length--;
  return null;
};


let linkedList = new MyLinkedList();


// 测试输入1
// console.log(linkedList.addAtHead(4)); // null
// console.log(linkedList.get(1)); // -1
// console.log(linkedList.addAtHead(1)); // null
// console.log(linkedList.addAtHead(5)); // null
// console.log(linkedList.deleteAtIndex(3)); // null
// console.log(linkedList.addAtHead(7)); // null
// console.log(linkedList.get(3)); // 4
// console.log(linkedList.get(3)); // 4
// console.log(linkedList.get(3)); // 4
// console.log(linkedList.addAtHead(1)); // null
// console.log(linkedList.deleteAtIndex(4)); // null


// 测试输出2
// console.log(linkedList.addAtHead(1)) // null;
// console.log(linkedList.addAtTail(3)) // null;
// console.log(linkedList.addAtIndex(1, 2)) // null;
// console.log(linkedList.get(1)) // 2
// console.log(linkedList.deleteAtIndex(1)) // null;
// console.log(linkedList.get(1)) // 3;