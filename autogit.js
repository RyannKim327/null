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

function breadthLimitedSearch(startNode, goalNode, depthLimit) {
  if (startNode === goalNode) {
    return startNode;
  }

  const queue = new Queue();
  queue.enqueue({ node: startNode, depth: 0 });

  while (!queue.isEmpty()) {
    const { node, depth } = queue.dequeue();

    if (depth < depthLimit) {
      for (let child of node.children) {
        if (child === goalNode) {
          return child;
        }
        queue.enqueue({ node: child, depth: depth + 1 });
      }
    }
  }

  return null; // Return null if goal node is not found within depth limit
}

// Usage example:
const nodeA = { name: 'A', children: [] };
const nodeB = { name: 'B', children: [] };
const nodeC = { name: 'C', children: [] };
const nodeD = { name: 'D', children: [] };

nodeA.children = [nodeB, nodeC];
nodeB.children = [nodeD];

const result = breadthLimitedSearch(nodeA, nodeD, 3);
console.log(result); // Output: { name: 'D', children: [] }
