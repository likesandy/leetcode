/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// 后序遍历（左右中）
function maxDepth(root: TreeNode | null): number {
  const getHeight = (node: TreeNode | null): number => {
    if (!node) return 0
    let leftHeight = getHeight(node.left)
    let rightHeight = getHeight(node.right)
    let depth = 1 + Math.max(leftHeight, rightHeight)
    return depth
  }
  return getHeight(root)
}

// 前序遍历（中左右）

// @lc code=end
