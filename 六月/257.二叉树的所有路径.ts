/*
 * @lc app=leetcode.cn id=257 lang=typescript
 *
 * [257] 二叉树的所有路径
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

function binaryTreePaths(root: TreeNode | null): string[] {
  const cycle = (node: TreeNode | null, path: string, resArr: string[]) => {
    path += String(node.val)

    if (!node.left && !node.right) {
      resArr.push(path)
      return
    }

    if (node.left) cycle(node.left, path + '->', resArr)
    if (node.right) cycle(node.right, path + '->', resArr)
  }

  const resArr: string[] = []
  if (!root) return resArr
  cycle(root, '', resArr)
  return resArr
}
// @lc code=end
