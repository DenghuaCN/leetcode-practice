/**
给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。

示例 1：
输入：root = [1,null,2,3]
输出：[3,2,1]

示例 2：
输入：root = []
输出：[]

示例 3：
输入：root = [1]
输出：[1]
 

提示：

树中节点的数目在范围 [0, 100] 内
-100 <= Node.val <= 100

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
 * 递归法
 * @param {TreeNode} root
 * @return {number[]}
 */
let postOrderTraversal2 = function(root) {
  let ans = [];

  let postOrderTraverseNode = (node) => {
      if (node === null) return;

      postOrderTraverseNode(node.left);
      postOrderTraverseNode(node.right);

      ans.push(node.val);
  }
  postOrderTraverseNode(root);

  return ans;
};


/**
 * 迭代法
 * @param {TreeNode} root
 * @return {number[]}
 */
let postOrderTraversal = function(root) {
  let ans = [];
  let stack = [];
  let prev = null;

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    /**
     * 对于: root.right === prev这行代码，参考img1.png
     * 当右子节点7退出后，如果没有一个指针指向7子节点，
     * 那么回溯到父节点4后，将无法知晓当前节点右子树(即7子节点)是否已经被遍历过.
     */
    if (root.right === null || root.right === prev) {
      ans.push(root.val);

      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }

  return ans;
};