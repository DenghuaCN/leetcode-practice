/**

  给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

  示例 1：
      5
     / \
    3   6
   / \   \
  2  4    7
  输入: root = [5,3,6,2,4,null,7], k = 9
  输出: true

  示例 2：
      5
     / \
    3   6
   / \   \
  2  4    7
  输入: root = [5,3,6,2,4,null,7], k = 28
  输出: false

  提示:
  二叉树的节点个数的范围是  [1, 104].
  -10^4 <= Node.val <= 10^4
  root 为二叉搜索树
  -10^5 <= k <= 10^5

 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
let findTarget = function(root, k) {
  let map = new Map();

  let inOrderTraverse = (node) => {
    if (node === null) {
      return false;
    }

    map.set(node.val, node);
    if (map.has(k - node.val) && map.get(k - node.val) !== node) {
      return true;
    }

    return inOrderTraverse(node.left) || inOrderTraverse(node.right)
  }

  return inOrderTraverse(root);
};