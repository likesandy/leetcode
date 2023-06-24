/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
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

function findBottomLeftValue(root: TreeNode | null): number {
  function traverse(node: TreeNode, depth: number): void {
    if (!node.left && !node.right) {
      if (depth > maxDepth) {
        maxDepth = depth
        res = node.val
      }
    }

    if (node.left) {
      depth++
      traverse(node.left, depth)
      depth--
    }
    if (node.right) {
      depth++
      traverse(node.right, depth)
      depth--
    }
  }

  let res = 0
  let maxDepth = 0
  if (!root) return res
  traverse(root, 1)
  return res
}
// @lc code=end
