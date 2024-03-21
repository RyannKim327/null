// Node class to represent each node in the graph
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

// Depth-first search function
function depthFirstSearch(node, visited = new Set()) {
  if (!node) {
    return;
  }

  // Visit the current node
  console.log(node.value);
  visited.add(node);

  // Visit all the neighbors of the current node
  for (let child of node.children) {
    if (!visited.has(child)) {
      depthFirstSearch(child, visited);
    }
  }
}

// Example usage
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

node1.children = [node2, node3];
node2.children = [node4];
node3.children = [node5];

depthFirstSearch(node1);
