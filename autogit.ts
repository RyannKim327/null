type Graph = { [node: string]: string[] };

function dfs(graph: Graph, start: string, visited: Set<string> = new Set()): void {
  if (visited.has(start)) return;  // Already visited

  console.log(start);  // Process the node (e.g., print it)
  visited.add(start);

  for (const neighbor of graph[start] || []) {
    dfs(graph, neighbor, visited);
  }
}
const graph: Graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

dfs(graph, "A");
// Output:
// A
// B
// D
// E
// F
// C
