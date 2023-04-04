function evaluateTree(root: TreeNode | null): boolean {
  if (!root.left) return !!root.val;
  const lRes = evaluateTree(root.left);
  const rRes = evaluateTree(root.right);
  return root.val === 2 ? lRes || rRes : lRes && rRes;
}
