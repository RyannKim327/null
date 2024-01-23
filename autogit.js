function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    return true; // Goal found
  }

  if (depthLimit === 0) {
    return false; // Reached depth limit without finding the goal
  }

  for (let child of node.children) {
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      return true; // Goal found in child node
    }
  }

  return false; // Goal not found
}
// Example node class
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Create a sample tree
const rootNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

rootNode.children = [node2, node3];
node2.children = [node4, node5];

// Search for node with value 5, depth limit 2
const goalFound = depthLimitedSearch(rootNode, node5, 2);
console.log("Goal found:", goalFound);
