function topologicalSort(graph) {
  const sorted = [];
  const visited = {};

  function depthFirstSearch(node) {
    visited[node] = true;

    graph[node].forEach(neighbor => {
      if (!visited[neighbor]) {
        depthFirstSearch(neighbor);
      }
    });

    sorted.unshift(node);
  }

  for (const node in graph) {
    if (!visited[node]) {
      depthFirstSearch(node);
    }
  }

  return sorted;
}

// Example usage:
const graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': [],
  'D': ['E'],
  'E': []
};

console.log(topologicalSort(graph));
