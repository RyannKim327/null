const graph: Record<string, string[]> = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};
function dfs(graph: Record<string, string[]>, start: string, visited = new Set<string>()) {
  if (visited.has(start)) return;

  console.log(start);  // process the node (e.g., print it)
  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
dfs(graph, 'A');
