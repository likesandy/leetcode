/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  // 如果根节点为空，直接返回 0。
  if (!root) return 0
  // 如果遇到叶子节点返回0，因为我们需要找到左叶子节点的父节点做操作
  if (!root.left && !root.right) return 0

  let sum: number = 0

  // 左叶子节点（判断一个节点是否是左叶子节点，需要判断它的左子节点是否存在，且左子节点没有左右子节点）
  if (root.left && !root.left.left && !root.left.right) sum = root.left.val

  // 递归左子树
  sum += sumOfLeftLeaves(root.left)
  // 递归右子树
  sum += sumOfLeftLeaves(root.right)

  // 返回结果
  return sum
}
// @lc code=end
