/*
 * @lc app=leetcode.cn id=701 lang=typescript
 *
 * [701] 二叉搜索树中的插入操作
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  // 如果根节点不存在，说明这是一棵空树，直接创建一个新节点作为根节点，并返回它
  if (!root) return new TreeNode(val)

  // 遍历定义一个当前节点
  let curr: TreeNode | null = root
  // 当前节点的父节点
  let parent: TreeNode

  while (curr) {
    parent = curr
    // 如果要插入的值比当前节点的值小，说明新节点应该插入到当前节点的左子树中，将当前节点更新为它的左孩子节点
    if (val < curr.val) curr = curr.left
    // 否则，将当前节点更新为它的右孩子节点，因为新节点应该插入到右子树中
    else curr = curr.right
  }

  // 当循环结束时，parent 指向的节点就是新节点应该插入的位置的父节点。如果新节点的值比父节点的值小，将新节点插入到父节点的左子树中
  if (parent.val > val) parent.left = new TreeNode(val)
  // 否则，将新节点插入到父节点的右子树中
  else parent.right = new TreeNode(val)

  return root
}
// @lc code=end
