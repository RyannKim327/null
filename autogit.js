function depthLimitedSearchIterative(root, target, depthLimit) {
  // Create an empty stack
  const stack = [];

  // Push the root node to the stack along with its current depth
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the target is found
    if (node === target) {
      return node; // Target found, return the node
    }

    // Check if the depth limit has been reached
    if (depth < depthLimit) {
      // Push the child nodes to the stack in reverse order
      for (const child of node.children.reverse()) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  // Target not found within the depth limit
  return null;
}
