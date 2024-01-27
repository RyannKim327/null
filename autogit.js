class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function breadthLimitedSearch(root, limit) {
  const queue = new Queue();
  queue.enqueue({ node: root, depth: 0 });

  while (!queue.isEmpty()) {
    const { node, depth } = queue.dequeue();

    if (node.value === target) {
      return node;
    }

    if (depth < limit) {
      queue.enqueue(...node.children.map(child => ({ node: child, depth: depth + 1 })));
    }
  }

  return null;
}

// Usage example:
const target = 5;
const root = new Node(1, [
  new Node(2, [new Node(4)]),
  new Node(3, [new Node(5), new Node(6)]),
]);

const result = breadthLimitedSearch(root, 2);

console.log(result); // prints Node { value: 5, children: [] }
