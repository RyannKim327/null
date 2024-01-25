function topologicalSort(graph) {
  const result = [];
  const visited = new Set();
  
  function dfs(node) {
    visited.add(node);
    graph[node].forEach(neighbor => {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    });
    result.unshift(node);
  }
  
  for (const node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }
  
  return result;
}

// Example graph
const graph = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['d'],
  'd': [],
  'e': ['a'],
  'f': ['a', 'b'],
};

const sorted = topologicalSort(graph);
console.log(sorted);  // Output: [ 'e', 'f', 'a', 'c', 'b', 'd' ]
