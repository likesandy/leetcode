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

  // * 确定递归函数的参数和返回值
  const postorder = (node: TreeNode | null) => {
    // * 确定终止条件
    if (!node) return

    // * 确定单层递归的逻辑
    // 左
    postorder(node.left)
    // 右
    postorder(node.right)
    // 中
    res.push(node.val)
  }

  postorder(root)
  return res
}

// 迭代
function postorderTraversal(root: TreeNode | null): number[] {
  const stack: (TreeNode | null)[] = []
  const res: number[] = []
  // 定义一个指向当前节点的指针
  let curr: TreeNode | null

  // 边界处理
  if (!root) return res

  // 将根节点压入栈中
  stack.push(root)
  while (stack.length) {
    // 获取栈顶节点，用于后续操作
    curr = stack.pop()

    // 中
    res.push(curr.val)
    // 左
    if (curr.left) {
      stack.push(curr.left)
    }
    // 右
    if (curr.right) {
      stack.push(curr.right)
    }
  }

  // 翻转
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
