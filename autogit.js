function depthLimitedSearch(root, target, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node; // Found the target
    }

    // Check if depth limit exceeded
    if (depth < depthLimit) {
      // Push child nodes to the stack in reverse order
      // to maintain the same order in next iterations
      for (let child of node.children.reverse()) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}
