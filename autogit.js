function depthLimitedSearchIterative(root, target, depthLimit) {
  // Create an empty stack
  const stack = [];

  // Push the root node to the stack
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the current node is the target
    if (node === target) {
      return node;
    }

    // Check if the depth limit has been reached
    if (depth >= depthLimit) {
      continue;
    }

    // Push child nodes to the stack in reverse order
    const children = getChildren(node);
    for (let i = children.length - 1; i >= 0; i--) {
      stack.push({ node: children[i], depth: depth + 1 });
    }
  }

  // Return null when target not found within the depth limit
  return null;
}

// Helper function to get the children of a node (replace with your own implementation)
function getChildren(node) {
  // Return an array of child nodes
  // ...
}
