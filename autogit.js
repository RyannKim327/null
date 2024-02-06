function iterativeDepthLimitedSearch(root, goal, depthLimit) {
  // Create a stack to keep track of nodes to visit
  const stack = [];

  // Push the root node to the stack with initial depth
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the current node is the goal node
    if (node === goal) {
      console.log("Goal found!");
      return;
    }

    // Check if the depth limit has been reached
    if (depth < depthLimit) {
      // Get the child nodes of the current node
      const children = node.getChildren();

      // Push the child nodes to the stack with incremented depth
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push({ node: children[i], depth: depth + 1 });
      }
    }
  }

  console.log("Goal not found within depth limit");
}
