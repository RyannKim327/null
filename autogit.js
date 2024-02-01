function bfs(root, target, limit) {
  // Create a queue to store the nodes to be visited
  let queue = [];

  // Enqueue the root node with a depth of 0
  queue.push({ node: root, depth: 0 });

  // Iterate while the queue is not empty
  while (queue.length > 0) {
    // Dequeue the next node
    let current = queue.shift();

    // Check if the current node matches the target
    if (current.node === target) {
      return current.depth; // Return the depth if found
    }

    // Check if the depth exceeds the limit
    if (current.depth >= limit) {
      continue; // Skip expanding this node if depth limit is reached
    }

    // Enqueue the child nodes of the current node
    let children = current.node.getChildren(); // Implement your own method to get the children of a node
    for (let child of children) {
      queue.push({ node: child, depth: current.depth + 1 });
    }
  }

  return -1; // Return -1 if target not found within the limit
}
// Define your own Node class
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  getChildren() {
    return this.children;
  }
}

// Create a tree structure for testing
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
root.addChild(node2);
root.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node3.addChild(node6);

let target = 6; // The value we want to find in the tree
let limit = 3; // Maximum depth to search

// Call the bfs function to perform the search
let result = bfs(root, target, limit);

console.log(result); // Print the result
