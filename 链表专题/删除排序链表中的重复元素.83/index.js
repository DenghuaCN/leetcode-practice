/**
  给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

  输入：head = [1,1,2]
  输出：[1,2]

  输入：head = [1,1,2,3,3]
  输出：[1,2,3]

  提示：
  链表中节点数目在范围 [0, 300] 内
  -100 <= Node.val <= 100
  题目数据保证链表已经按升序 排列

 */

let OriginLinkedList = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();


// case
// let inputs = [1, 1, 2, 3, 3];
// let inputs = [1, 3, 3];
// let inputs = [1, 1, 1];
// let inputs = [5, 5];
let inputs = [1,1,2];

for (let i = 0; i < inputs.length; i++) {
  myLinkedList.append(inputs[i]);
}


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
  let cur = head;

  while (cur) {
    let nextNode = cur.next;

    // 如果当前节点数值域与下一节点数值域形同，则递归nextNode节点，直到找到不相同的那个节点
    while (nextNode && nextNode.val === cur.val) { // 这里要注意nextNode.next为null的情况
      nextNode = nextNode.next; // (nextNode.val !== cur.val) OR (nextNode === null) 就会跳出循环
    }

    // 将cur.next 指向 找到的第一个不重复的节点，即nextNode
    cur.next = nextNode; // tips: 如果cur为最后一个节点，那么(nextNode = cur.next) 将为null，

    cur = nextNode; // 注意这里要更新cur的引用，下次循环将以nextNode开始
  }

  return head;
};

let head = myLinkedList.getHead();
let resultHead = deleteDuplicates(head);

console.log(resultHead);