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

  // * 确定递归函数的参数和返回值
  const inorder = (node: TreeNode | null): void => {
    // * 确定终止条件
    if (!node) return

    // * 确认单层递归罗江
    // 左
    inorder(node.left)
    // 中
    res.push(node.val)
    // 右
    inorder(node.right)
  }

  inorder(root)
  return res
}

// 迭代法（栈）
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  const stack: (TreeNode | null)[] = []

  // 边界处理
  if (!root) return res

  // 当前遍历的节点
  let curr: TreeNode | null = root

  while (curr || stack.length) {
    // 遍历顺序：先遍历左子树
    if (curr) {
      stack.push(curr)
      curr = curr.left
    }
    // 处理顺序：当左子树为空时，处理当前节点，然后遍历右子树
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
