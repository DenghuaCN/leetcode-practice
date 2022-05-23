/**
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

示例 1：
输入：head = [1,2,2,1]
输出：true

示例 2：
输入：head = [1,2]
输出：false
 
提示：

链表中节点数目在范围[1, 10^5] 内 // 链表不为空
0 <= Node.val <= 9
 
进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
 */


let LinkedListClass = require('../链表基础/单向链表/OriginLinkedList.js')
let exampleLinkList = new LinkedListClass();



exampleLinkList.append(1);
// exampleLinkList.append(2);


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 复制链表到数组中双指针判断
 * @param {ListNode} head
 * @return {boolean}
 */
let isPalindrome = function(head) {
  let arr = [];

  // 将链表转化为数组
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  // 双指针判断
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};


let result = isPalindrome(exampleLinkList.getHead());
console.log(result);