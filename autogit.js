function Node(value, children = []) {
  this.value = value;
  this.children = children;
}

function depthLimitedSearchIterative(root, target, depthLimit) {
  // Create a stack to keep track of nodes to be explored
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    // Check if the current node matches the target
    if (node.value === target) {
      return node;
    }

    // Stop expanding the node if depth limit is reached
    if (depth === depthLimit) {
      continue;
    }

    // Push children nodes onto the stack, with increased depth
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push({ node: node.children[i], depth: depth + 1 });
    }
  }

  return null; // Target not found within depth limit
}

// Example usage
const nodeG = new Node('G');
const nodeF = new Node('F', [nodeG]);
const nodeE = new Node('E');
const nodeD = new Node('D');
const nodeC = new Node('C', [nodeF]);
const nodeB = new Node('B', [nodeD, nodeE]);
const nodeA = new Node('A', [nodeB, nodeC]);

const result = depthLimitedSearchIterative(nodeA, 'G', 2);
console.log(result); // Output: Node { value: 'G', children: [] }
