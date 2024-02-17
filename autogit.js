function depthLimitedSearchIterative(root, target, depthLimit) {
  let stack = [{ node: root, depth: 0 }];
  
  while (stack.length > 0) {
    let current = stack.pop();
    let currentNode = current.node;
    let currentDepth = current.depth;
    
    if (currentNode.value === target) {
      return currentNode;
    }
    
    if (currentDepth < depthLimit) {
      currentNode.children.forEach(child => {
        stack.push({ node: child, depth: currentDepth + 1 });
      });
    }
  }
  
  return null; // Target not found within depth limit
}
