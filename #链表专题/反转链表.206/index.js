/**
  给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

  输入：head = [1,2,3,4,5]
  输出：[5,4,3,2,1]

  输入：head = [1,2]
  输出：[2,1]

  输入：head = []
  输出：[]

  提示：

  链表中节点的数目范围是 [0, 5000]
  -5000 <= Node.val <= 5000

  进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

 */

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
let reverseList = function(head) {
  let p = null;
  let c = head;

  while (c) {
    // 由于我们之后需要移动c指针，故先将下一个节点保存起来
    let tmp = c.next;

    // 此时将开始改变p,c指针的指向，将c指针指向p指针。刚开始看到这会云里雾里，但是想一下最终链表完成反转后，原链表第一个节点的next将指向null也是正确的。
    c.next = p;

    // 下面两行代码是重点，通过将p指针指向c，将c指针指向tmp，我们完成了两个指针的前进操作
    p = c;
    c = tmp;
  }

  return p;
};

let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();
myLinkedList.append(1);
myLinkedList.append(2);
myLinkedList.append(3);


let result = reverseList(myLinkedList.getHead())

console.log(result);


// 参考: https://leetcode-cn.com/problems/reverse-linked-list/solution/fan-zhuan-lian-biao-shuang-zhi-zhen-di-gui-yao-mo-/




/**
  加深理解

    1.   * --> 1 --> 2 --> 3
         p     c           1.1 初始状态 p = null; c = head

        开始进入循环

    2.  * <-- 1 --> 2 --> 3
        p     c    tmp     2.1  tmp = c.next;
                           2.2  c.next = p，将c指针指向后面的p指针，因为tmp保存了原来的c.next，不用担心丢失节点

        重点(移动p指针)
    3.   * <-- 1 --> 2 --> 3
               c    tmp
               p           3.1  p = c;


        重点(移动c指针)
    4.   * <-- 1 --> 2 --> 3
                    tmp    4.1  c = tmp
               p     c

        又重复循环
    5.   * <-- 1 --> 2 --> 3
               p     c    tmp

                          5.1  tmp = c.next

    6.   * <-- 1 <-- 2 --> 3
               p     c    tmp

                          6.1  c.next = p

    7.   * <-- 1 <-- 2 --> 3
                     p    c,tmp

                          7.1 p = c; c = tmp;
    ...重复循环
 */