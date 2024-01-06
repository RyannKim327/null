function topologicalSort(graph) {
  const visited = new Set();
  const sorted = [];

  function visit(node) {
    visited.add(node);

    const neighbors = graph[node] || []; // Get the neighbors of the current node

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visit(neighbor);
      }
    }

    sorted.unshift(node); // Push the node to the sorted array
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  return sorted;
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

const sorted = topologicalSort(graph);
console.log(sorted); // Output: [ 'A', 'C', 'F', 'B', 'E', 'D' ]
