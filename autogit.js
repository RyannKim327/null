function countLeafNodes(tree) {
  let count = 0;

  function traverse(node) {
    if (!node) return;
    
    if (!node.left && !node.right) {
      count++;
    }
    
    traverse(node.left);
    traverse(node.right);
  }

  traverse(tree);

  return count;
}
