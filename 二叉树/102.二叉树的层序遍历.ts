/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  const res: number[][] = []

  // 边界处理
  if (!root) return []

  const queue: TreeNode[] = []
  // 添加根节点
  queue.push(root)

  while (queue.length) {
    // 获取当前层级的节点数
    const levelSize = queue.length
    // 当前层级的节点值数组
    const currentLevel: number[] = []

    // 遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      // 取出队列首节点（取出root->左子结点->右子节点）
      const node = queue.shift()
      // 将节点值加入到当前层级的节点值数组
      currentLevel.push(node.val)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    // 将每一层的节点值添加到结果数组
    res.push(currentLevel)
  }

  return res
}
// @lc code=end
