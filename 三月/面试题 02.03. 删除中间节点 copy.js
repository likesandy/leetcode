var deleteNode = function (node) {
  const current = node.next;
  node.val = current.val;
  node.next = current.next;
  current.next = null;
};
