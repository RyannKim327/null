class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children;
  }
}

function depthLimitedSearch(root, targetValue, depthLimit) {
  const stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node.value === targetValue) {
      return node;
    }

    if (depth < depthLimit) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ node: node.children[i], depth: depth + 1 });
      }
    }
  }

  return null; // Node with target value not found within depth limit
}

// Example usage:

// Create a tree with nodes and their children
const node1 = new Node(1, []);
const node2 = new Node(2, []);
const node3 = new Node(3, []);
const node4 = new Node(4, []);
const node5 = new Node(5, []);
const node6 = new Node(6, []);
const node7 = new Node(7, []);

node1.children = [node2, node3];
node2.children = [node4, node5];
node3.children = [node6, node7];

// Search for node with value 5 within a depth limit of 2
const result = depthLimitedSearch(node1, 5, 2);

console.log(result); // Output: Node { value: 5, children: [] }
