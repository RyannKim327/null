function topologicalSort(nodes) {
  // ...
}
function topologicalSort(nodes) {
  const sorted = [];
  // ...
}
function topologicalSort(nodes) {
  const sorted = [];
  const visited = new Set();
  // ...
}
function topologicalSort(nodes) {
  const sorted = [];
  const visited = new Set();

  for (const node of nodes) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  // Helper functions go here...

  return sorted;
}
function visit(node) {
  visited.add(node);

  for (const neighbor of node.neighbors) {
    if (!visited.has(neighbor)) {
      visit(neighbor);
    }
  }

  sorted.unshift(node); // Add the node to the beginning of the array to maintain order.
}
function topologicalSort(nodes) {
  const sorted = [];
  const visited = new Set();

  for (const node of nodes) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  function visit(node) {
    visited.add(node);

    for (const neighbor of node.neighbors) {
      if (!visited.has(neighbor)) {
        visit(neighbor);
      }
    }

    sorted.unshift(node);
  }

  return sorted;
}

// Usage example:
const nodes = [
  { id: 1, neighbors: [3, 4] },
  { id: 2, neighbors: [3, 6] },
  { id: 3, neighbors: [4, 5, 6] },
  { id: 4, neighbors: [] },
  { id: 5, neighbors: [] },
  { id: 6, neighbors: [] },
];

const sortedNodes = topologicalSort(nodes);
console.log(sortedNodes);
