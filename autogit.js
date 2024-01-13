function Node(value, neighbors) {
  this.value = value;
  this.neighbors = neighbors;
}

function breadthLimitedSearch(initialNode, goalNode, depthLimit) {
  const queue = [{ node: initialNode, depth: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const { node, depth } = queue.shift();

    if (node === goalNode) {
      return node;
    }

    if (depth < depthLimit) {
      for (const neighbor of node.neighbors) {
        if (!visited.has(neighbor)) {
          queue.push({ node: neighbor, depth: depth + 1 });
        }
      }
    }

    visited.add(node);
  }

  return null; // No solution within depth limit
}

// Example usage:
const nodeA = new Node('A', []);
const nodeB = new Node('B', []);
const nodeC = new Node('C', []);
const nodeD = new Node('D', []);
const nodeE = new Node('E', []);

nodeA.neighbors = [nodeB, nodeC];
nodeB.neighbors = [nodeA, nodeD];
nodeC.neighbors = [nodeA, nodeE];
nodeD.neighbors = [nodeB];
nodeE.neighbors = [nodeC];

const goal = breadthLimitedSearch(nodeA, nodeD, 2);
console.log(goal ? `Goal node found: ${goal.value}` : 'Goal not found within depth limit');
