function Node(value, children) {
  this.value = value;
  this.children = children || [];
}

function depthLimitedSearchIterative(root, target, depthLimit) {
  let stack = [];
  
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    
    if (node.value === target) {
      return node; // Found the target
    }
    
    if (depth < depthLimit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }
  
  return null; // Target not found within the depth limit
}
