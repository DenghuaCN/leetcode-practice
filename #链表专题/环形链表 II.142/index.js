/**
  给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

  如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
  为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
  如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

  不允许修改 链表。

  示例 1：
  输入：head = [3,2,0,-4], pos = 1
  输出：返回索引为 1 的链表节点
  解释：链表中有一个环，其尾部连接到第二个节点。

  示例 2：
  输入：head = [1,2], pos = 0
  输出：返回索引为 0 的链表节点
  解释：链表中有一个环，其尾部连接到第一个节点。

  示例 3：
  输入：head = [1], pos = -1
  输出：返回 null
  解释：链表中没有环。

  提示：
  链表中节点的数目范围在范围 [0, 10^4] 内
  -10^5 <= Node.val <= 10^5
  pos 的值为 -1 或者链表中的一个有效索引

  进阶：你是否可以使用 O(1) 空间解决此题？
 */

  let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')
  let myLinkedList = new OriginLinkedList();
  let linkedLists = [3,2,0,-4]; // 链表初始结构
  for (let i = 0; i < linkedLists.length; i++) {
    myLinkedList.append(linkedLists[i]);
  }

  let pos = 1; // 表示链表尾连接到链表第2个节点
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
 * 141变形题，参考: https://zh.wikipedia.org/wiki/Floyd%E5%88%A4%E5%9C%88%E7%AE%97%E6%B3%95
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
let detectCycle = function(head) {
  if (!head) {
    return null;
  }

  let fast = head;
  let slowly = head;

  while (fast && fast.next && fast.next.next) {
    fast = fast.next.next;
    slowly = slowly.next;

    if (fast === slowly) { // 此时快慢指针相遇，说明构成环形链表
      let M = fast; // 设第一次相遇的节点为 M
      // 此时，将慢指针指向链表头部，那么，快慢指针的间距即为 环的长度 的 整数倍，此时让快慢指针以相同速度推进，持续该过程。
      // 直到两个指针再次相遇，设相遇点为点 P，则节点 P 即为从节点 S 出发所到达的 环C 的第一个节点，即环C起点。

      slowly = head;

      while (fast !== slowly) {
        slowly = slowly.next;
        fast = fast.next;
      }
      let P = fast; // P点即为环的起点

      return P;
    }
  }
  // 不构成环形链表
  return null;
};

let result = detectCycle(myLinkedList.getHead());

console.log(result);