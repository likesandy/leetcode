/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const preorder = (node: TreeNode | null) => {
    if (!node) return
    res.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return res
}

// 迭代
function preorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = []
  const res: number[] = []
  let curr = root

  stack.push(root)
  while (stack.length) {
    curr = stack.pop()!
    res.push(curr.val)

    if (curr.right) {
      stack.push(curr.right)
    }

    if (curr.left) {
      stack.push(curr.left)
    }
  }

  return res
}

// 统一迭代
function preorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = []
  const res: number[] = []
  let curr = root

  if (!root) return res

  stack.push(root)
  while (stack.length) {
    curr = stack.pop()

    if (curr) {
      // 右
      if (curr.right) stack.push(curr.right)
      // 左
      if (curr.left) stack.push(curr.left)

      // 中
      stack.push(curr)
      stack.push(null)
    } else {
      curr = stack.pop()
      res.push(curr.val)
    }
  }

  return res
}
// @lc code=end
