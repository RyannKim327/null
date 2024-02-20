class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function depthLimitedSearch(root, target, depthLimit) {
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (node.value === target) {
      return node;
    }

    if (depth < depthLimit) {
      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Usage
// Create a sample tree
let root = new Node('A');
let nodeB = new Node('B');
let nodeC = new Node('C');
let nodeD = new Node('D');
let nodeE = new Node('E');
let nodeF = new Node('F');

root.children = [nodeB, nodeC];
nodeB.children = [nodeD, nodeE];
nodeC.children = [nodeF];

let result = depthLimitedSearch(root, 'F', 2);
if (result) {
  console.log('Node found:', result);
} else {
  console.log('Node not found within the depth limit.');
}
