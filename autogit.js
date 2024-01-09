function depthLimitedSearchIterative(root, target, depthLimit) {
  // Create a stack to store nodes
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    // Pop the top node from the stack
    const current = stack.pop();
    const { node, depth } = current;

    // Check if the current node is the target
    if (node === target) {
      console.log('Target found!');
      return true;
    }

    // Check if the depth limit is reached
    if (depth < depthLimit) {
      // Push the child nodes onto the stack in reverse order
      const children = getChildren(node); // Implement this function to get children of a node
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push({ node: children[i], depth: depth + 1 });
      }
    }
  }

  console.log('Target not found within the depth limit.');
  return false;
}
