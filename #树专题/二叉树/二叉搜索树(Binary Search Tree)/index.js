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




console.group(tree.print());