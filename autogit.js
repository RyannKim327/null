/**
 * Node class representing a node in a tree/graph.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

/**
 * Perform depth-limited search iteratively.
 * @param {Node} root - The root node to start the search from.
 * @param {number} limit - The maximum depth to search.
 * @returns {Node|null} - The goal node if found, otherwise null.
 */
function depthLimitedSearchIterative(root, limit) {
  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.data === goalData) {
      return node; // Goal node found
    }

    if (depth < limit) {
      // Add child nodes to the stack
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Goal node not found within depth limit
}
// Create nodes
let nodeA = new Node("A");
let nodeB = new Node("B");
let nodeC = new Node("C");
let nodeD = new Node("D");
let nodeE = new Node("E");

// Build the tree structure
nodeA.children.push(nodeB, nodeC);
nodeB.children.push(nodeD);
nodeC.children.push(nodeE);

// Specify the goal data to search for
let goalData = "E";

// Perform depth-limited search
let result = depthLimitedSearchIterative(nodeA, 2);

if (result) {
  console.log(`Goal node (${goalData}) found!`);
} else {
  console.log(`Goal node (${goalData}) not found within depth limit.`);
}
