// Function to perform depth-limited search starting from a given node
function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    return true; // Goal found
  }

  if (depthLimit === 0) {
    return false; // Depth limit reached
  }

  // Recursively explore the child nodes
  for (let child of node.children) {
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      return true; // Goal found in child node
    }
  }

  return false; // Goal not found within depth limit
}

// Example usage
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

// Create a sample graph
const node6 = new Node(6);
const node5 = new Node(5, [node6]);
const node4 = new Node(4);
const node3 = new Node(3, [node4, node5]);
const node2 = new Node(2, [node3]);
const node1 = new Node(1, [node2]);

// Perform a depth-limited search
const goalNode = node6;
const maxDepth = 3;
const isGoalFound = depthLimitedSearch(node1, goalNode, maxDepth);

console.log(isGoalFound);  // Outputs: true
