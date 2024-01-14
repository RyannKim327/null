function depthLimitedSearchIterative(root, goal, maxDepth) {
  // Create a stack to keep track of nodes
  const stack = [{
    node: root,
    depth: 0
  }];

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the current node matches the goal
    if (node === goal) {
      return node;
    }

    // If the depth is within the limit, expand the node's children
    if (depth < maxDepth) {
      // Get the node's children
      const children = getChildren(node);

      // Push the children into the stack with increased depth
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push({
          node: children[i],
          depth: depth + 1
        });
      }
    }
  }

  // If there is no match, return null
  return null;
}

// Example usage
const goal = /* your goal node */;
const root = /* your root node */;
const maxDepth = /* your desired maximum depth */;

const result = depthLimitedSearchIterative(root, goal, maxDepth);
console.log(result);
