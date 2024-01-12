class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

// Depth-First Search Algorithm
function depthFirstSearch(root) {
  if (!root) return;

  const stack = [];
  stack.push(root);

  while (stack.length) {
    const current = stack.pop();
    console.log(current.data);

    // Push children onto the stack in reverse order
    for (let i = current.children.length - 1; i >= 0; i--) {
      stack.push(current.children[i]);
    }
  }
}

// Example usage
const rootNode = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

rootNode.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

depthFirstSearch(rootNode);
