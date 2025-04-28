interface Graph {
  [node: string]: string[]; // or number[] if your nodes are numeric
}

function dfs(graph: Graph, start: string, visited: Set<string> = new Set()): void {
  if (visited.has(start)) return;

  console.log(start); // or process the node as needed
  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

dfs(graph, 'A');
