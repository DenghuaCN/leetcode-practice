let {OriginLinkedList, Node} = require('../链表基础/单向链表/OriginLinkedList.js')

/**
 * @param {number} intersectVal // 相交的节点的值
 * @param {array} listA  链表A
 * @param {array} listB 链表B
 * @param {number} skipA 在 A 中（从头节点开始）跳到交叉节点的节点数
 * @param {number} skipB 在 B 中（从头节点开始）跳到交叉节点的节点数
 */
let constructorInput = (intersectVal, listA, listB, skipA, skipB) => {
  let linkedListA = new OriginLinkedList();
  let linkedListB = new OriginLinkedList();
  let intersectLinkedList = new OriginLinkedList();

  if (listA.length === 1) { // 当只有一个节点时，会进不了循环，所以直接插入即可 // case; let intersectVal = 3; // 相交的节点的值 let listA = [3]; // 链表A let listB = [2, 3]; // 链表B let skipA = 0; // 在 A 中（从头节点开始）跳到交叉节点的节点数 let skipB = 1;
    linkedListA.append(listA[0])
  } else {
    for (let i = 0; i < skipA; i++) {
      linkedListA.append(listA[i]);
    }
  }

  if (listB.length === 1) {
    linkedListB.append(listB[0])
  } else {
    for (let i = 0; i < skipB; i++) {
      linkedListB.append(listB[i]);
    }
  }

  // 构造相交链表的输入数组
  let intersectList = listA.slice(skipA);
  for (let i = 0; i < intersectList.length; i++) {
    intersectLinkedList.append(intersectList[i]);
  }

  // 将intersectLinkedList插入linkedListA与linkedListB尾部
  let linkedListATail =  linkedListA.getTail();
  console.log('linkedListATail', linkedListATail);
  linkedListATail.next = intersectLinkedList.getHead();

  let linkedListBTail =  linkedListB.getTail();
  linkedListBTail.next = intersectLinkedList.getHead();

  console.log('linkedListA', linkedListA.toString());
  console.log('linkedListB', linkedListB.toString());
  console.log('intersectLinkedList', intersectLinkedList.toString());

  // 返回两个链表的头部
  return {
    headA: linkedListA.getHead(),
    headB: linkedListB.getHead(),
  }
}


module.exports = constructorInput;