function depthLimitedSearchIterative(root, target, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      // Add child nodes to the stack in reverse order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within depth limit
}
