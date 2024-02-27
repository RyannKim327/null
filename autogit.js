class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

function depthLimitedSearch(root, limit) {
  if (!root) {
    return null;
  }

  let stack = [];
  stack.push({ node: root, depth: 0 });

  while (stack.length > 0) {
    let { node, depth } = stack.pop();

    if (depth <= limit) {
      console.log(node.value);

      for (let child of node.children) {
        stack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  return null;
}

// Usage
let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

root.addChild(node2);
root.addChild(node3);
node2.addChild(new Node(5));
node2.addChild(new Node(6));
node3.addChild(node4);

depthLimitedSearch(root, 2);
