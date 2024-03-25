function Node(value) {
  this.value = value;
  this.children = [];
}

function depthLimitedSearch(root, limit) {
  let stack = [{node: root, depth: 0}];

  while (stack.length > 0) {
    let {node, depth} = stack.pop();

    if (depth >= limit) {
      continue;
    }

    console.log(node.value);

    for (let child of node.children) {
      stack.push({node: child, depth: depth + 1});
    }
  }
}

// Example Usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

root.children.push(node2, node3);
node2.children.push(node4);
node3.children.push(node5);

depthLimitedSearch(root, 2);
