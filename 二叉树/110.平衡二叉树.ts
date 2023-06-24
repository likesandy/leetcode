/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function isBalanced(root: TreeNode | null): boolean {
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0

    let leftHeight = getHeight(node.left)
    if (leftHeight === -1) return -1
    let rightHeight = getHeight(node.right)
    if (rightHeight === -1) return -1

    if (Math.abs(leftHeight - rightHeight) > 1) return -1
    return 1 + Math.max(leftHeight, rightHeight)
  }
  return getHeight(root) >= 0
}
// @lc code=end
