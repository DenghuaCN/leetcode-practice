/**
  给定一个头结点为 head 的非空单链表，返回链表的中间结点。

  如果有两个中间结点，则返回第二个中间结点。

  示例 1：
  输入：[1,2,3,4,5]
  输出：此列表中的结点 3 (序列化形式：[3,4,5])
  返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
  注意，我们返回了一个 ListNode 类型的对象 ans，这样：
  ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.

  示例 2：
  输入：[1,2,3,4,5,6]
  输出：此列表中的结点 4 (序列化形式：[4,5,6])
  由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
   

  提示：
  给定链表的结点数介于 1 和 100 之间。
 */


let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();
myLinkedList.append(1);
myLinkedList.append(2);


myLinkedList.print();

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
let middleNode = function(head) {
  let map = new Map();

  let cur = head;
  let count = 1;
  while (cur) {
    map.set(count++, cur);
    cur = cur.next;
  }
  count--; // 减1，最后一次重复累加

  if (count & 1 === 1) {
    // 奇数个节点
    return map.get((count + 1) / 2);
  } else {
    return map.get((count / 2) + 1);
  }
};


let result = middleNode(myLinkedList.getHead())
console.log(result)
