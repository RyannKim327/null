const graph = [[1, 2], [3], [3], []];
function dfs(vertex, visited, stack, graph) {
  visited[vertex] = true;

  for (const adj of graph[vertex]) {
    if (!visited[adj]) {
      dfs(adj, visited, stack, graph);
    }
  }

  stack.push(vertex);
}
function topologicalSort(graph) {
  const numVertices = graph.length;
  const visited = new Array(numVertices).fill(false);
  const stack = [];

  for (let vertex = 0; vertex < numVertices; vertex++) {
    if (!visited[vertex]) {
      dfs(vertex, visited, stack, graph);
    }
  }

  return stack.reverse();
}
const graph = [[1, 2], [3], [3], []];
const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // [0, 1, 2, 3]
