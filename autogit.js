// Node class representing each node in the search space
class Node {
  constructor(value, children = []) {
    this.value = value; // The value of the node
    this.children = children; // Children nodes
  }
}

// Depth-Limited Search algorithm
function depthLimitedSearch(root, target, depthLimit) {
  let stack = [{ node: root, depth: 0 }]; // Stack to store nodes and their current depth

  while (stack.length > 0) {
    const { node, depth } = stack.pop(); // Get the last added node from the stack

    if (node.value === target) {
      return node; // Found the target node
    }

    if (depth < depthLimit) {
      // Add the children of the current node to the stack with increased depth
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Target not found within the depth limit
}

// Usage example
const rootNode = new Node(1, [
  new Node(2, [new Node(5)]),
  new Node(3),
  new Node(4, [new Node(6), new Node(7)]),
]);

const targetNode = depthLimitedSearch(rootNode, 7, 3);
console.log(targetNode); // Output: Node { value: 7, children: [] }
