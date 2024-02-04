// Depth-limited search algorithm
function depthLimitedSearch(node, goalState, depthLimit) {
  // Base case: goal state found
  if (node.state === goalState) {
    return node;
  }

  // Base case: depth limit reached
  if (node.depth === depthLimit) {
    return null;
  }

  // Recursive case: explore child nodes
  for (let childNode of node.children) {
    let result = depthLimitedSearch(childNode, goalState, depthLimit);
    if (result) {
      return result; // Goal state found in child node
    }
  }

  return null; // Goal state not found within depth limit
}

// Example usage
class Node {
  constructor(state, depth, children) {
    this.state = state;
    this.depth = depth;
    this.children = children;
  }
}

// Create a sample tree with nodes
const node1 = new Node("A", 0, []);
const node2 = new Node("B", 1, []);
const node3 = new Node("C", 1, []);
const node4 = new Node("D", 2, []);
const node5 = new Node("E", 2, []);
const node6 = new Node("F", 2, []);
const node7 = new Node("G", 3, []);

node1.children = [node2, node3];
node2.children = [node4, node5];
node3.children = [node6];
node4.children = [node7];

// Perform depth-limited search
const result = depthLimitedSearch(node1, "G", 3);

// Output the result
if (result) {
  console.log("Goal state found:", result.state);
} else {
  console.log("Goal state not found within depth limit");
}
