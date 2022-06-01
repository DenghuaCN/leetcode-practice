/**
  给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。

  例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。
  对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

  返回这些数字之和。题目数据保证答案是一个 32 位 整数。

  示例 1：
  输入：root = [1,0,1,0,1,0,1]
  输出：22
  解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

  示例 2：
  输入：root = [0]
  输出：0
   
  提示：
  树中的节点数在 [1, 1000] 范围内
  Node.val 仅为 0 或 1 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const BinaryTree = require('../基础概念/二叉树(Binary Tree)/index.js');
const tree = new BinaryTree('1', 1);
tree.insert2('1', '2', 0)
tree.insert2( '1', '3', 1)
tree.insert2( '2', '2-1', 0)
tree.insert2( '2', '2-2', 1)
tree.insert2( '3', '3-1', 0)
tree.insert2( '3', '3-2', 1)

let sumRootToLeafTest = (root) => {
  const dfs = (node, value) => {
    if (!node) return 0;

    // 使用左移运算符左移一位，然后原本空出来的位 与 当前节点的二进制数 进行 按位或运算
    value = (value << 1) | node.value;
    // <<: m<<n的含义为把整数m表示的二进制数左移n位，高位移出n位都舍弃，低位补0
    // | 按位或：对两个整数的二进制形式逐位进行逻辑或运算，原理为：1|0=1，0|0=0，1|1=1，0|1=1。

    if (!node.left && !node.right) { // 如果不存在左子节点和右子节点，说明当前节点为叶子节点
        console.log(`leaf: binary:${parseInt(value).toString(2)} decimal:${value}`);
        return value;
    }

    return dfs(node.left, value) + dfs(node.right, value);
  }

  return dfs(root, 0);
};


sumRootToLeafTest(tree.getRoot());


/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumRootToLeaf = function(root) {
  const dfs = (root, val) => {
    if (!root) return 0;

    val = (val << 1) | root.val;
    if (!root.left && !root.right) { // 如果不存在左子节点和右子节点，说明位叶子节点
        return val;
    }
    return dfs(root.left, val) + dfs(root.right, val);
  }

  return dfs(root, 0);
};