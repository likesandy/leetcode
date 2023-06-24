/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

// 递归
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  // 左中右
  const inorder = (node: TreeNode | null) => {
    if (!node) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
  inorder(root)
  return res
}

// 迭代法（栈）
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: (TreeNode | null)[] = []
  let curr: TreeNode | null = root

  if (!root) return res

  while (curr || stack.length) {
    // 遍历顺序
    if (curr) {
      stack.push(curr)
      curr = curr.left
    }
    // 访问顺序
    else {
      curr = stack.pop()
      res.push(curr.val)
      curr = curr.right
    }
  }
  return res
}

// 统一迭代
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: (TreeNode | null)[] = [root]
  let curr = root

  if (!root) return res
  while (stack.length) {
    curr = stack.pop()
    if (curr) {
      // 右
      if (curr.right) stack.push(curr.right)

      // 中
      stack.push(curr)
      stack.push(null)

      // 左
      if (curr.left) stack.push(curr.left)
    } else {
      curr = stack.pop()
      res.push(curr.val)
    }
  }
  return res
}
// @lc code=end
