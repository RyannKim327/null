// Node class representing each state in the search tree
class Node {
  constructor(value, children) {
    this.value = value; // The state value
    this.children = children; // An array of child nodes
  }
}

// Implementing depth-limited search algorithm
function depthLimitedSearch(node, target, depth) {
  if (node.value === target) {
    return node; // Target found, return the node
  }

  if (depth === 0) {
    return null; // Reached the depth limit, return null
  }

  for (let childNode of node.children) {
    const result = depthLimitedSearch(childNode, target, depth - 1);
    if (result) {
      return result; // Target found in one of the child nodes, return the node
    }
  }

  return null; // Target not found
}

// Testing the algorithm
const tree = new Node(1, [
  new Node(2, [
    new Node(4, []),
    new Node(5, []),
  ]),
  new Node(3, [
    new Node(6, []),
    new Node(7, []),
  ]),
]);

const targetNode = depthLimitedSearch(tree, 6, 2);
if (targetNode) {
  console.log('Target found!');
} else {
  console.log('Target not found.');
}
