function topologicalSort(graph) {
  let sorted = [];
}
function visit(node, visited, sorted, graph) {
  visited[node] = true;

  if (graph[node]) {
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visit(neighbor, visited, sorted, graph);
      }
    }
  }

  sorted.unshift(node);
}
function topologicalSort(graph) {
  let sorted = [];
  let visited = {};

  for (let node in graph) {
    if (!visited[node]) {
      visit(node, visited, sorted, graph);
    }
  }

  return sorted;
}
let graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: ['E'],
  E: []
};

let sortedNodes = topologicalSort(graph);
console.log(sortedNodes); // Output: ['A', 'C', 'B', 'D', 'E']
