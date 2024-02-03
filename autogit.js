// Define the depth-limited search function
function depthLimitedSearch(node, goal, depthLimit) {
  if (node === goal) {
    // Goal found, return true
    return true;
  }

  if (depthLimit <= 0) {
    // Reached the depth limit, return false
    return false;
  }

  for (let child of node.children) {
    // Recursively call depthLimitedSearch on child nodes
    if (depthLimitedSearch(child, goal, depthLimit - 1)) {
      return true;
    }
  }

  // Goal not found within depth limit, return false
  return false;
}

// Example usage
class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

const goal = 10;
const tree = new Node(1, [
  new Node(2, [
    new Node(4),
    new Node(5)
  ]),
  new Node(3, [
    new Node(6),
    new Node(7, [
      new Node(8, [
        new Node(10)
      ])
    ])
  ])
]);

console.log(depthLimitedSearch(tree, goal, 3)); // Output: true
console.log(depthLimitedSearch(tree, goal, 2)); // Output: false
