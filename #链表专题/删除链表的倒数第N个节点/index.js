/**
  给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

  示例 1：
  输入：head = [1,2,3,4,5], n = 2
  输出：[1,2,3,5]

  示例 2：
  输入：head = [1], n = 1
  输出：[]

  示例 3：
  输入：head = [1,2], n = 1
  输出：[1]

  提示：
  链表中结点的数目为 sz
  1 <= sz <= 30
  0 <= Node.val <= 100
  1 <= n <= sz
   
  进阶：你能尝试使用一趟扫描实现吗？
 */

let LinkedListClass = require('../链表基础/单向链表/OriginLinkedList.js')
let construct = require('./construct.js');

let linkedListInputs = [1,2,3,4,5];
let linkedList = construct(new LinkedListClass(), linkedListInputs);

console.log(linkedList.toString());


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * O(m + n)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd3 = function(head, n) {
  let linkedListLength = 0;
  let cur = head;

  while (cur) {
    cur = cur.next;
    linkedListLength++;
  }

  if (n === linkedListLength) { // 移除倒数第 length 个节点 === 移除第一个节点
    head = head.next;
    return head;
  }


  cur = head;
  let pre = cur;
  let i = 1;

  while (cur) {
    pre = cur;
    cur = cur.next;
    i++;

    if (i === (linkedListLength - n) + 1) { // 倒序第 n 个 ===  正序第 (length - n) + 1 个
      pre.next = cur.next;
      return head;
    }
  }
};

/**
 * HashMap(使用哈希映射存储节点，一次遍历即可)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd2 = function(head, n) {
  let map = new Map();
  let cur = head;
  let i = 0; // 索引从0开始

  // if (head.next === null && n === 1) { // 不能这样判断倒数第一个，这只适用于只有一个节点的链表
  //   return head = head.next;
  // }

  while (cur) {
    map.set(i, cur); // key:i value:node

    cur = cur.next;
    i++;
  }

  if (i === n) { // 删除的目标节点位于链表第一个
    return head = head.next;
  }

  let targetNodePre = map.get(i - n - 1);
  let targetNode = targetNodePre.next;

  targetNodePre.next = targetNode.next;

  return head;
};


/**
 * 栈(妙哇!)
 * 参考: https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/solution/shan-chu-lian-biao-de-dao-shu-di-nge-jie-dian-b-61/
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
let removeNthFromEnd = function(head, n) {
  let stack = [];
  // linkedList.insert(0, 0);
  // console.log(linkedList.toString());

  let newHead = new ListNode(0, head) // 使用题给函数

  let cur = newHead;

  while (cur !== null) {
    stack.push(cur);
    cur = cur.next;
  }

  let peak = cur;
  let i = 0;

  while (stack.length > 0) {
    peak = stack.pop();
    i++;

    if (i === n) {
      stack[stack.length - 1].next = peak.next;
      return newHead.next;
    }
  }

};


let n = 3;
let result = removeNthFromEnd(linkedList.getHead(), n);

console.log(result);