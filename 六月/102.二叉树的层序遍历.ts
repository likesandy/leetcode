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
  if (!root) return []

  const result: number[][] = []
  const queue: TreeNode[] = [root]

  // 循环遍历每一层
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

      // 如果左子节点存在，则将其加入队列
      if (node.left) queue.push(node.left)
      // 如果右子节点存在，则将其加入队列
      if (node.right) queue.push(node.right)
    }

    // 将每一层的节点值添加到结果数组
    result.push(currentLevel)
  }
  return result
}
// @lc code=end
