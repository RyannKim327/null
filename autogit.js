function depthLimitedSearchIterative(root, targetValue, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    // Check if the current node matches the target value
    if (node.value === targetValue) {
      return node;
    }

    // Check if the current depth exceeds the depth limit
    if (depth < depthLimit) {
      // Add all child nodes to the stack
      node.children.forEach(child => {
        stack.push({ node: child, depth: depth + 1 });
      });
    }
  }

  return null; // Return null if the target value is not found within the depth limit
}
