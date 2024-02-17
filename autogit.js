function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function visit(node) {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    for (const neighbor of graph[node]) {
      visit(neighbor);
    }

    stack.unshift(node);
  }

  for (const node in graph) {
    visit(node);
  }

  return stack;
}

// Example usage
const graph = {
  'A': ['B', 'C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': [],
  'F': []
};

const result = topologicalSort(graph);
console.log(result); // ['A', 'B', 'D', 'C', 'E', 'F']
