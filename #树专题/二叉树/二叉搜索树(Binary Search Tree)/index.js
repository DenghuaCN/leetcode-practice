/**
 * 二叉查找树（英语：Binary Search Tree，简写为BST），也称二叉搜索树、有序二叉树（英语：ordered binary tree），排序二叉树（英语：sorted binary tree），是指一棵空树或者具有下列性质的二叉树：
 * 1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
 * 2. 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
 * 3. 任意节点的左、右子树也分别为二叉查找树；
 *
 * 二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、多重集、关联数组等。
 *
 */

/**
 * 创建BinarySearchTree类
 * 和链表一样，将通过指针来表示节点之间的关系(术语称其为边)，在双向链表中，每个节点包含两个指针，一个指向下一个节点，另一个指向上一个节点。对于树，使用同样的方式（也使用两个指针）
 * 但是，一个指向左侧子节点，一个指向右侧子节点。因此，将声明一个Node类来表示树中每个节点。
 * 在树中，节点也可以称为“键”。
 *
 * @class BinarySearchTree
 * @method insert 向树中插入一个新的节点
 * @method search 在树中查找一个节点，如果节点存在，则返回true，否则返回false
 * @method inOrderTraverse 通过 中序遍历 方式遍历所有节点
 * @method preOrderTraverse 通过 先序遍历 方式遍历所有节点
 * @method postOrderTraverse 通过 后序遍历 方式遍历所有节点
 * @method min 返回树中的最小的值/节点
 * @method max 返回树中的最大的值/节点
 * @method remove 从树中移除某个键
 */
function BinarySearchTree() {

  this.Node = function(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  this.root = null;

  this.print = function() {
    return this.root;
  }

  /**
   * 插入非根节点的辅助函数
   * 1. 接受两个参数，根节点与新节点。
   * 2. 如果新节点的值小于当前节点的值，检查当前节点的左子节点。
   *  2.1 不存在当前节点的左子节点
   *    2.1.1 插入节点
   *  2.2 存在当前节点的左子节点
   *    2.2.1 递归调用insertNode方法(回到逻辑起始位置)，
   *          寻找树的下一层。在这里，每次递归比较的节点将是上次传入节点的左侧子节点。
   *
   * @param {*} node 当前比较节点
   * @param {Node} newNode  需要插入的节点
   */
  this.insertNode = function(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

}


/**
 * 向树中插入一个节点
 * 1. 创建一个表示新节点的Node类实例
 * 2. 验证插入操作是否为特殊情况
 * 3. 特殊情况： 插入的节点是否是第一个节点（作为根节点）
 * 4. 不是特殊情况：新节点添加到非根节点上，此时需要一个辅助函数
 *
 * @method insert
 */
BinarySearchTree.prototype.insert = function(val) {
  let newNode = new this.Node(val);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
}


/**
 * 中序遍历
 * 是一种以上行顺序访问BST所有节点的遍历方式，也就是以从 最小 到 最大的顺序访问所有节点。常用的一种应用就是对树进行排序操作
 * @method inOrderTraverse
 */
BinarySearchTree.prototype.inOrderTraverse = function(callback) {

  /**
   * 要通过中序遍历的方法遍历一棵树，首先要检查以参数形式传入的节点是否为null，这也是终止递归的基线条件（base case）
   * 然后，递归调用相同的函数来访问左侧子节点。接着对这个节点进行一些操作（callback），然后再访问右侧子节点。
   * @param {*} node
   * @param {*} callback
   */
  let inOrderTraverseNode = (node, callback) => {
    // 可以抽象的认为，每个节点每次都会有两个函数调用入栈，一个检查左子树，一个检查右子树

    if (node === null) {
      return;
    }
    // 递归当前节点的左子节点，当到达最后一个节点时
    inOrderTraverseNode(node.left, callback);

    // 将节点的值回调函数
    callback(node.val, node); // 当前节点 的 左子节点 遍历完成后，就可以处理当前节点。即当前节点的 所有左子节点 都比它 小。当前节点的 所有右子节点 都比它 大，突出二分性质。

    // 递归当前节点的右子树
    inOrderTraverseNode(node.right, callback);
    // 每次递归中的遍历都会依次检查当前节点的所有左子节点和当前节点的所有右子节点，即使可能某个节点不存在左子节点或者右子节点或都不存在，也会严格按照先左后右顺序遍历
  }

  /**
   * inOrderTraverseNode接受一个回调函数作为参数，回调函数用来定义我们对遍历到的 每一个节点 进行的操作（也叫做访问者模式)
   */
   inOrderTraverseNode(this.root, callback);
}


/**
 * 先序遍历
 * 是以优先于后台节点的顺序访问每个节点的。先序遍历的一种应用是打印一个结构化的文档
 * @method preOrderTraverse
 */
BinarySearchTree.prototype.preOrderTraverse = function(callback) {

  /**
   * 先序遍历的不同点是，先序遍历会先访问节点本身，然后在访问它的左子节点，最后是右子节点。
   * @param {*} node
   * @param {*} callback
   */
   let preOrderTraverseNode = (node, callback) => {
    if (node === null) {
      return;
    }
    callback(node.val, node);

    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }

  preOrderTraverseNode(this.root, callback);
}


/**
 * 后序遍历
 * 是先访问节点的后代节点，再访问节点本身。后序遍历一个应用是计算一个目录和它的子目录中所有文件所占空间的大小
 * @method postOrderTraverse
 */
 BinarySearchTree.prototype.postOrderTraverse = function(callback) {

  /**
   * 后序遍历会先访问左子节点，然后是右侧子节点，最后是当前节点本身。
   * @param {*} node
   * @param {*} callback
   */
   let postOrderTraverseNode = (node, callback) => {
    if (node === null) {
      return;
    }
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);

    callback(node.val, node);
  }

  postOrderTraverseNode(this.root, callback);
}






let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

/**
 * 定义遍历回调函数的内的操作
 */
let printNode = (val, node) => {
  console.log(val);
}

tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
// tree.postOrderTraverse(printNode);


console.group(tree.print());
