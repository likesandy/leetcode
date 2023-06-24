/*
 * @lc app=leetcode.cn id=226 lang=typescript
 *
 * [226] 翻转二叉树
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
// 递归(前序-中左右)
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let temp: TreeNode = root.left

  // 中
  root.left = root.right
  root.right = temp

  // 左
  invertTree(root.left)
  // 右
  invertTree(root.right)

  return root
}

// 递归（后序-左右中）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let temp: TreeNode = root.left

  // 左
  invertTree(root.left)
  // 右
  invertTree(root.right)

  // 中
  root.left = root.right
  root.right = temp

  return root
}

// 递归（中序-左中右）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root
  let temp: TreeNode = root.left

  // 左
  invertTree(root.left)

  // 中
  root.left = root.right
  root.right = temp

  // 右
  invertTree(root.left)

  return root
}

// 栈（前序-中左右）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const stack: TreeNode[] = [root]
  let curr
  let temp

  while (stack.length) {
    curr = stack.pop()
    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
    temp = curr.left
    curr.left = curr.right
    curr.right = temp
  }
  return root
}

// 统一迭代（后序-左右中）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const stack: TreeNode[] = [root]
  let curr
  let temp

  while (stack.length) {
    curr = stack.pop()
    if (curr) {
      stack.push(curr)
      stack.push(null)
      if (curr.right) stack.push(curr.right)
      if (curr.left) stack.push(curr.left)
    } else {
      curr = stack.pop()
      temp = curr.left
      curr.left = curr.right
      curr.right = temp
    }
  }
  return root
}

// 统一迭代（中序-左中右）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const stack: TreeNode[] = [root]
  let curr
  let temp

  while (stack.length) {
    curr = stack.pop()
    if (curr) {
      if (curr.right) stack.push(curr.right)
      stack.push(curr)
      stack.push(null)
      if (curr.left) stack.push(curr.left)
    } else {
      curr = stack.pop()
      temp = curr.left
      curr.left = curr.right
      curr.right = temp
    }
  }
  return root
}

// 层序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const queue: TreeNode[] = [root]
  let curr
  let temp

  while (queue.length) {
    const levelSize = queue.length

    for (let index = 0; index < levelSize; index++) {
      curr = queue.shift()

      temp = curr.left
      curr.left = curr.right
      curr.right = temp

      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
  }
  return root
}

// @lc code=end
