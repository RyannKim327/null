function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(node) {
    visited.add(node);

    for (let neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(node);
  }

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse();
}

// Example graph representation
const graph = {
  0: [1, 2],
  1: [3],
  2: [3],
  3: [4, 5],
  4: [],
  5: []
};

const result = topologicalSort(graph);
console.log(result); // Output: [0, 2, 1, 3, 5, 4]
