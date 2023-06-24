/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    if (!leftHeight && rightHeight) return 1 + rightHeight
    else if (leftHeight && !rightHeight) return 1 + leftHeight
    return 1 + Math.min(leftHeight, rightHeight)
  }

  return getHeight(root)
}
// @lc code=end
