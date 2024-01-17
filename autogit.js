class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Example usage:
// Create a tree
const nodeF = new Node('F');
const nodeB = new Node('B', [nodeF]);
const nodeG = new Node('G');
const nodeD = new Node('D');
const nodeE = new Node('E', [nodeG]);
const nodeC = new Node('C', [nodeD, nodeE]);
const nodeA = new Node('A', [nodeB, nodeC]);

// Perform depth-limited search
const targetNode = depthLimitedSearch(nodeA, 'G', 2);

if (targetNode) {
  console.log(`Target found: ${targetNode.value}`);
} else {
  console.log('Target not found within the depth limit.');
}
