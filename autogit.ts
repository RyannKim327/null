type Graph = { [key: string]: string[] };

function dfs(graph: Graph, start: string, visited = new Set<string>()): void {
  if (visited.has(start)) return;
  visited.add(start);
  console.log(start);  // Process the node (here, just print it)

  for (const neighbor of graph[start] || []) {
    dfs(graph, neighbor, visited);
  }
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E', 'F'],
  D: [],
  E: [],
  F: []
};

dfs(graph, 'A');
// Output: A B D C E F
