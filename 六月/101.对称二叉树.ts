/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true

  const cycle = (node1: TreeNode | null, node2: TreeNode | null): boolean => {
    if (!node1 && !node2) return true
    else if (!node1 || !node2) return false
    else if (node1.val !== node2.val) return false

    let outSide = cycle(node1.left, node2.right)
    let innerSide = cycle(node1.right, node2.left)
    return outSide && innerSide
  }

  return cycle(root.left, root.right)
}

// 栈
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  const stack: (TreeNode | null)[] = []
  let curr1
  let curr2

  if (root.right) stack.push(root.right)
  if (root.left) stack.push(root.left)

  while (stack.length) {
    curr1 = stack.pop()
    curr2 = stack.pop()
    if (!curr1 && !curr2) continue
    else if (!curr1 || !curr2) return false
    else if (curr1.val !== curr2.val) return false
    stack.push(curr2.left)
    stack.push(curr1.right)
    stack.push(curr2.right)
    stack.push(curr1.left)
  }
  return true
}

// 队列
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true
  const queue: (TreeNode | null)[] = []
  let curr1
  let curr2

  if (root.left) queue.push(root.left)
  if (root.right) queue.push(root.right)

  while (queue.length) {
    curr1 = queue.shift()
    curr2 = queue.shift()
    if (!curr1 && !curr2) continue
    else if (!curr1 || !curr2) return false
    else if (curr1.val !== curr2.val) return false
    queue.push(curr1.left)
    queue.push(curr2.right)
    queue.push(curr1.right)
    queue.push(curr2.left)
  }

  return true
}
// @lc code=end
