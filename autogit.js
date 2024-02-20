function Node(data) {
  this.data = data;
  this.children = [];
}

function breadthLimitedSearch(root, target, limit) {
  let queue = [{ node: root, depth: 0 }];

  while (queue.length > 0) {
    let current = queue.shift();
    let currentNode = current.node;
    let currentDepth = current.depth;

    if (currentNode.data === target) {
      return currentNode;
    }

    if (currentDepth < limit) {
      queue.push(...currentNode.children.map(child => ({ node: child, depth: currentDepth + 1 })));
    }
  }

  return null;
}

// Example usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4, node5);

let targetNode = breadthLimitedSearch(root, 5, 2);

if (targetNode) {
  console.log(`Node found: ${targetNode.data}`);
} else {
  console.log('Node not found');
}
