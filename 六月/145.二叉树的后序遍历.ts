/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
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
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const postorder = (node: TreeNode | null) => {
    if (!node) return
    postorder(node.left)
    postorder(node.right)
    res.push(node.val)
  }
  postorder(root)
  return res
}

// 迭代
function postorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = []
  const res: number[] = []
  let curr = root

  if (!curr) return res

  stack.push(root)

  while (stack.length) {
    curr = stack.pop()
    res.push(curr.val)

    if (curr.left) {
      stack.push(curr.left)
    }

    if (curr.right) {
      stack.push(curr.right)
    }
  }

  return res.reverse()
}

// 统一迭代
function postorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = [root]
  const res: number[] = []
  let curr: TreeNode | null

  if (!root) return res

  while (stack.length) {
    curr = stack.pop()
    if (curr) {
      // 中
      stack.push(curr)
      stack.push(null)

      // 右
      if (curr.right) stack.push(curr.right)
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
