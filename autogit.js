function topologicalSort(graph) {
  const visited = new Map();
  const stack = [];

  for (const vertex of graph.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex, graph, visited, stack);
    }
  }

  return stack.reverse();
}

function dfs(vertex, graph, visited, stack) {
  visited.set(vertex, true);

  const neighbors = graph.get(vertex) || [];

  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(neighbor, graph, visited, stack);
    }
  }

  stack.push(vertex);
}
const graph = new Map();
graph.set("A", ["B", "C"]);
graph.set("B", ["D", "E"]);
graph.set("C", ["F"]);
graph.set("D", []);
graph.set("E", ["F"]);
graph.set("F", []);

const sortedVertices = topologicalSort(graph);
console.log(sortedVertices);
