class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function breadthFirstSearch(root, target) {
  if (!root) return null;

  const queue = [root];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === target) {
      return current;
    }

    visited.add(current);

    for (const child of current.children) {
      if (!visited.has(child)) {
        queue.push(child);
      }
    }
  }

  return null;
}

// Usage example:
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.addChild(b);
a.addChild(c);
b.addChild(d);
b.addChild(e);
c.addChild(f);

console.log(breadthFirstSearch(a, 'F')); // Output: Node { value: 'F', children: [] }
