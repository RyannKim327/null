// Node class representing each node in the search space
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// Depth-limited search algorithm
function depthLimitedSearch(root, target, depthLimit) {
  // Create a stack to store nodes to visit
  const stack = [{
    node: root,
    depth: 0
  }];

  while (stack.length > 0) {
    // Pop the top node from the stack
    const { node, depth } = stack.pop();

    // Check if the target node is found
    if (node.value === target) {
      return node;
    }

    // Check if the depth limit has not been reached
    if (depth < depthLimit) {
      // Push children nodes to the stack
      for (const child of node.children) {
        stack.push({
          node: child,
          depth: depth + 1
        });
      }
    }
  }

  // Target node not found within the depth limit
  return null;
}

// Usage example
const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeE = new Node('E');

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];

console.log(depthLimitedSearch(nodeA, 'E', 2));  // Output: Node { value: 'E', children: [] }
console.log(depthLimitedSearch(nodeA, 'F', 2));  // Output: null
