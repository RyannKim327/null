// Node class to represent each node in the graph
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

// Breadth-limited search function
function breadthLimitedSearch(root, limit, target) {
  let queue = [root];
  let depth = 0;

  while (queue.length > 0 && depth < limit) {
    let node = queue.shift();
    console.log("Visiting node: " + node.name);

    if (node.name === target) {
      return node;
    }

    for (let i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }

    depth++;
  }

  return null;
}

// Example usage
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');
let e = new Node('E');

a.addChild(b);
a.addChild(c);
b.addChild(d);
c.addChild(e);

let result = breadthLimitedSearch(a, 3, 'E');
if (result !== null) {
  console.log("Found target node: " + result.name);
} else {
  console.log("Target node not found within the depth limit.");
}
