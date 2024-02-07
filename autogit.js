function depthLimitedSearchIterative(root, target, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node; // Found the target
    }

    if (depth < depthLimit) {
      // Add child nodes to the stack
      for (const child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}
