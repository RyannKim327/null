function depthLimitedSearchIterative(root, goal, depthLimit) {
  // Create a stack to keep track of nodes to be explored
  const stack = [];
  
  // Push the root node onto the stack
  stack.push({ node: root, depth: 0 });
  
  // Continue searching until the stack is empty
  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();
    
    // Check if the current node matches the goal
    if (node === goal) {
      return node;  // Goal found, return the node
    }
    
    // Check if the depth limit has been reached
    if (depth < depthLimit) {
      // Expand the current node by adding its children to the stack
      const children = getChildren(node);  // Implement the getChildren() function
      for (let i = children.length - 1; i >= 0 ; i--) {
        stack.push({ node: children[i], depth: depth + 1 });
      }
    }
  }
  
  return null;  // Goal not found within the depth limit
}
