/**
  给你一个链表的头节点 head ，判断链表中是否有环。

  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
  注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

  如果链表中存在环 ，则返回 true 。 否则，返回 false 。

  示例 1：
  输入：head = [3,2,0,-4], pos = 1
  输出：true
  解释：链表中有一个环，其尾部连接到第二个节点。

  示例 2：
  输入：head = [1,2], pos = 0
  输出：true
  解释：链表中有一个环，其尾部连接到第一个节点。

  示例 3：
  输入：head = [1], pos = -1
  输出：false
  解释：链表中没有环。

  提示：
  链表中节点的数目范围是 [0, 10^4]
  -10^5 <= Node.val <= 10^5
  pos 为 -1 或者链表中的一个 有效索引 。

  进阶：你能用 O(1)（即，常量）内存解决此问题吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
let myLinkedList = new OriginLinkedList();
let linkedLists = [3,2,0,-4]; // 链表初始结构
for (let i = 0; i < linkedLists.length; i++) {
  myLinkedList.append(linkedLists[i]);
}

let pos = -1; // 表示链表尾连接到链表第2个节点
let head = myLinkedList.getHead();

// 声明环形链表函数
let constructorRingLinkedList = (head, pos) => {
  let cur = head;

  while (cur.next) {
    cur = cur.next;
  }
  // 保存链表最后一个节点
  let tail = cur;

  console.log('tail', tail);

  // 构造环形链表
  let i = 0;
  cur = head;
  while (cur.next) {
    cur = cur.next;
    i++;

    if (i === 2) {
      console.log(cur);
      tail.next = cur;
      return;
    }
  }
}
// 开始构造环形链表 (注释即为单向链表)
constructorRingLinkedList(head, pos);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 使用哈希集合保存每一个节点，保存节点前向集合内搜索是否已经存在此节点，存在说明构成环形链表
 * 空间复杂度 O(n)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle2 = function(head) {
  if (!head) { // 链表为空
    return false;
  }

  let set = new Set();
  let cur = head;

  while (cur) { // 注意如果为环形链表需要手动调出循环
    if (set.has(cur)) {
      return true;
    } else {
      set.add(cur);

      if (cur.next) {
        cur = cur.next;
      } else {
        return false; // 遍历到链表尾部，退出循环
      }
    }
  }

  return false;
};

/**
 * Floyd判圈算法 (妙哇！！！)
 *
 * @param {ListNode} head
 * @return {boolean}
 */
 let hasCycle = function(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next; // 慢指针每次前进一步
    fast = fast.next.next; // 快指针每次前进两步

    if (slow === fast) {
      // 如果快慢指针相遇，则说明存在环
      return true;
    }
  }
  return false;
};

let result = hasCycle(myLinkedList.getHead());
console.log('result', result);