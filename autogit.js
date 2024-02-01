function topologicalSort(graph) {
  // Perform topological sorting here
}
function topologicalSort(graph) {
  let result = [];
  // Perform topological sorting here
}
function topologicalSort(graph) {
  let result = [];
  let visited = new Set();
  // Perform topological sorting here
}
function dfs(currentNode, graph, visited, result) {
  visited.add(currentNode);

  for (let neighbor of graph[currentNode]) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited, result);
    }
  }

  result.unshift(currentNode);
}
function topologicalSort(graph) {
  let result = [];
  let visited = new Set();

  for (let node in graph) {
    if (!visited.has(node)) {
      dfs(node, graph, visited, result);
    }
  }

  return result;
}
let graph = {
  'A': ['B', 'C'],
  'B': ['D'],
  'C': ['D'],
  'D': []
};

let sorted = topologicalSort(graph);
console.log(sorted); // Output: ['A', 'C', 'B', 'D']
