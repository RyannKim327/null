class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function depthLimitedSearchIterative(root, target, depthLimit) {
  if (root.value === target) return root;

  const stack = [{ node: root, depth: 0 }];

  while (stack.length !== 0) {
    const { node, depth } = stack.pop();

    if (depth < depthLimit) {
      // Check if the current node's value matches the target
      if (node.value === target) return node;

      // Add the children of the current node to the stack
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Usage example:
const rootNode = new Node(1); // Create a root node with value 1
rootNode.children.push(new Node(2)); // Add children to the root node
rootNode.children.push(new Node(3));
rootNode.children[0].children.push(new Node(4)); // Add children to the first child node
rootNode.children[0].children.push(new Node(5));

const targetNode = depthLimitedSearchIterative(rootNode, 5, 3); // Search for value 5 within depth limit 3

if (targetNode) {
  console.log("Target found!");
} else {
  console.log("Target not found within the depth limit.");
}
