const graph = {
  'A': ['B', 'C'],
  'B': ['C', 'D'],
  'C': ['E'],
  'D': ['F'],
  'E': [],
  'F': ['G'],
  'G': []
};
function topologicalSortUtil(node, visited, stack) {
  visited[node] = true;

  for (const neighbor of graph[node]) {
    if (!visited[neighbor]) {
      topologicalSortUtil(neighbor, visited, stack);
    }
  }

  stack.unshift(node);
}
function topologicalSort() {
  const visited = {};
  const stack = [];

  for (const node in graph) {
    if (!visited[node]) {
      topologicalSortUtil(node, visited, stack);
    }
  }

  return stack;
}
console.log(topologicalSort());
