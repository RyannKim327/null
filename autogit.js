function Node(value, children) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearch(root, target, depthLimit) {
  // Create a stack to store nodes
  const stack = [];
  
  // Push the root node to the stack
  stack.push({ node: root, depth: 0 });
  
  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();
    
    // Check if the current node matches the target
    if (node.value === target) {
      return node;
    }
    
    // Check if the depth limit has been reached
    if (depth < depthLimit) {
      // Push child nodes to the stack in reverse order
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }
  
  // Target not found within depth limit
  return null;
}

// Example usage
const tree = new Node(1, [
  new Node(2, [
    new Node(4, []),
    new Node(5, [])
  ]),
  new Node(3, [
    new Node(6, []),
    new Node(7, [])
  ])
]);

console.log(depthLimitedSearch(tree, 5, 2));
