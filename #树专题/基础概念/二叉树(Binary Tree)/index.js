class BinaryTreeNode {
  constructor(key, value = key, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
  }
}


class BinaryTree {
  constructor(key, value = key) {
    this.root = new BinaryTreeNode(key, value);
  }

  /**
   * 中序遍历(es5写法)
   */
  inOrderTraversal2(node = this.root) {
    let ans = [];

    let inOrderTraverseNode = (node) => {
      if (node === null) return;

      inOrderTraverseNode(node.left);
      ans.push(node.value);
      inOrderTraverseNode(node.right);
    }

    inOrderTraverseNode(node);

    return ans;
  }


  *inOrderTraversal(node = this.root) {
    if (node.left) yield* this.inOrderTraversal(node.left);
    yield node;
    if (node.right) yield* this.inOrderTraversal(node.right);
  }
  /**
   * 后序遍历
   */
  *postOrderTraversal(node = this.root) {
    if (node.left) yield* this.postOrderTraversal(node.left);
    if (node.right) yield* this.postOrderTraversal(node.right);
    yield node;
  }

  /**
   * 先序遍历
   */
  *preOrderTraversal(node = this.root) {
    yield node;
    if (node.left) yield* this.preOrderTraversal(node.left);
    if (node.right) yield* this.preOrderTraversal(node.right);
  }

  /**
   * 插入必须指定要插入的父节点，否则无法插入
   */
  insert(
    parentNodeKey, // 要插入的父节点
    key, // 新节点的key
    value = key, // 新节点的value
    { left, right } = { left: true, right: true } // 默认，新节点可以作为左子节点或者右子节点，如果左子节点已经存在，则插入右子节点
  ) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === parentNodeKey) {
        const canInsertLeft = left && node.left === null;
        const canInsertRight = right && node.right === null;
        if (!canInsertLeft && !canInsertRight) return false;
        if (canInsertLeft) {
          node.left = new BinaryTreeNode(key, value, node);
          return true;
        }
        if (canInsertRight) {
          node.right = new BinaryTreeNode(key, value, node);
          return true;
        }
      }
    }
    return false;
  }
  // insert (es5语法重写方便理解)
  insert2(parentNodeKey, key, value=key, {left, right} = {left: true, right: true}) {
    if (parentNodeKey === null) return false;

    // 使用后序遍历插入节点
    let preOrderTraverseNode = (node) => {
      if (node === null) return;

      preOrderTraverseNode(node.left);
      preOrderTraverseNode(node.right);

      if (node.key === parentNodeKey) { // 找到要插入的父节点
        const CAN_INSERT_LEFT = left && node.left === null,
              CAN_INSERT_RIGHT = right && node.right === null;

        if (!CAN_INSERT_LEFT && !CAN_INSERT_RIGHT) return new Error('There are no empty child nodes for the parent node');

        if (CAN_INSERT_LEFT) {
          node.left = new BinaryTreeNode(key, value, node);
          return true;
        }
        if (CAN_INSERT_RIGHT) {
          node.right = new BinaryTreeNode(key, value, node);
          return true;
        }
      }
    }

    return preOrderTraverseNode(this.root) ? true : false;
  }


  remove(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.left.key === key) {
        node.left = null;
        return true;
      }
      if (node.right.key === key) {
        node.right = null;
        return true;
      }
    }
    return false;
  }

  find(key) {
    for (let node of this.preOrderTraversal()) {
      if (node.key === key) return node;
    }
    return undefined;
  }

  getRoot() {
    return this.root;
  }
}

// const tree = new BinaryTree(1, 'AB');
// tree.insert2( 1, 11, 'AC')
// tree.insert2(1, 12, 'BC');
// tree.insert2(12, 121, 'BG', { right: true });

// console.log('inOrder', tree.inOrderTraversal2());
// console.log('inOrder',
//   [...tree.inOrderTraversal()].map(x => x.value)
// );

// console.log('preOrder',
//   [...tree.preOrderTraversal()].map(x => x.value)
// );


module.exports = BinaryTree;