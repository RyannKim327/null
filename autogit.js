class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function breadthLimitedSearch(root, target, depthLimit) {
  if (root === null || depthLimit < 0) {
    return null;
  }

  let queue = [root];
  let currentDepth = 0;

  while (queue.length > 0) {
    const nodesAtCurrentDepth = queue.length;

    for (let i = 0; i < nodesAtCurrentDepth; i++) {
      const node = queue.shift();

      if (node.value === target) {
        return node;
      }

      if (currentDepth < depthLimit) {
        queue.push(...node.children);
      }
    }

    currentDepth++;
  }

  return null; // Node not found within the depth limit
}

// Example usage:
const rootNode = new Node(1);
const childNode1 = new Node(2);
const childNode2 = new Node(3);
const childNode3 = new Node(4);

rootNode.children.push(childNode1, childNode2);
childNode1.children.push(childNode3);

const targetNode = breadthLimitedSearch(rootNode, 4, 2); // Search for value 4 within depth limit 2

if (targetNode) {
  console.log("Node found:", targetNode);
} else {
  console.log("Node not found within the specified depth limit.");
}
