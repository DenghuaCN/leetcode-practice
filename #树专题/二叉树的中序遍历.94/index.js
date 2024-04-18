/**
  给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

  示例 1：
  输入：root = [1,null,2,3]
  输出：[1,3,2]

  示例 2：
  输入：root = []
  输出：[]

  示例 3：
  输入：root = [1]
  输出：[1]
   
  提示：
  树中节点数目在范围 [0, 100] 内
  -100 <= Node.val <= 100

  进阶: 递归算法很简单，你可以通过迭代算法完成吗？

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
let inOrderTraversal2 = function(root) {
  let ans = [];

  let dfs = (root) => {
      if (root === null) return;

      dfs(root.left);
      ans.push(root.val);
      dfs(root.right);

      return ans;
  }
  dfs(root);

  return ans;
};


/**
 * 迭代法
 * 参考: https://leetcode.cn/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
 * @param {TreeNode} root
 * @return {number[]}
 */
let inOrderTraversal = function(root) {
  let ans = [];
  let stack = [];

  while (root || stack.length !== 0) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();
    ans.push(root.val);
    root = root.right;
  }

  return ans;
};
