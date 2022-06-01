/**
  给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

  第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

  请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

  你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。

   
  示例 1:
  输入: head = [1,2,3,4,5]
  输出: [1,3,5,2,4]

  示例 2:
  输入: head = [2,1,3,5,6,4,7]
  输出: [2,3,6,7,1,5,4]

  提示:
  n ==  链表中的节点数
  0 <= n <= 10^4
  -10^6 <= Node.val <= 10^6

 */

// 参考: https://leetcode.cn/problems/odd-even-linked-list/solution/tu-jie-lian-biao-zui-qing-xi-yi-dong-de-njsvx/

let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.append(5);

let localOddEvenList = (head) => {
  if (head === null) {
    return head;
  }

  let evenHead = head.next; // 使用evenHead引用 偶数节点链表的头节点

  let odd = head, // 指向奇数节点，初始化时，第一个奇数节点即为节点
      even = evenHead; // 指向偶数节点，初始化时，第一个偶数节点即第一个奇数节点的下一节点

  while (even !== null && even.next !== null) {
    odd.next = even.next; // 奇数节点的下一节点 指向 偶数节点的下一节点(是一个奇数节点)
    odd = odd.next; // 更新奇数节点的指针

    even.next = odd.next; // 偶数节点的下一个节点 指向 奇数节点的下一节点(是一个偶数节点)
    even = even.next; // 更新偶数节点的指针
  }

  // 最终将最后一个奇数节点 指向 偶数链表头节点
  odd.next = evenHead;

  return head;
}

let result = localOddEvenList(myLinkedList.getHead());
console.log(result);


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 使用额外空间
 * @param {ListNode} head
 * @return {ListNode}
 */
let oddEvenList = function(head) {



};