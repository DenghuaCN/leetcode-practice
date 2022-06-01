/**
  给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
   
  示例 1：
  输入：head = [1,2,6,3,4,5,6], val = 6
  输出：[1,2,3,4,5]

  示例 2：
  输入：head = [], val = 1
  输出：[]
  示例 3：

  输入：head = [7,7,7,7], val = 7
  输出：[]

  提示：
  列表中的节点数目在范围 [0, 10^4] 内
  1 <= Node.val <= 50
  0 <= val <= 50

 */

let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();

// case1
let inputs = [1,2,6,3,4,5,6];  // 构造链表
let val = 6; // 需要移除的值

// case2
// let inputs = [7,7,7,7];
// let val = 7;


for (let i = 0; i < inputs.length; i++) {
  myLinkedList.append(inputs[i]);
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
let removeElements = function(head, val) {
  let Node = function(val) {
    this.val = val;
    this.next = null;
  };

  let cur = head;
  let previousNode = new Node(val - 1); // 构造一个虚拟节点

  // 在原始的链表头部插入这个新节点
  previousNode.next = cur;
  head = previousNode; // 改变head指针的指向


  // 循环删除
  while (previousNode.next !== null) { // 由于插入的新节点必定不等于val，所以从第二个节点（其实就是原来的第一个）开始检索
    if (previousNode.next.val === val) {
      previousNode.next = previousNode.next.next;
    } else {
      previousNode = previousNode.next;
    }
  }

  // 最后返回的head注意不要包括最先插入的节点
  return head.next;
};


let newHEAD = removeElements(myLinkedList.getHead(), val);
console.log(newHEAD);