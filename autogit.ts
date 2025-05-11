type Graph = { [key: string]: string[] };

// Example graph:
// A: [B, C]
// B: [D]
// C: []
// D: []
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: [],
  D: []
};
function dfs(graph: Graph, start: string, visited = new Set<string>()): void {
  if (visited.has(start)) return;

  console.log(start); // Process the node (here, just print it)
  visited.add(start);

  for (const neighbor of graph[start]) {
    dfs(graph, neighbor, visited);
  }
}
dfs(graph, 'A');
A
B
D
C
function dfsIterative(graph: Graph, start: string): void {
  const stack = [start];
  const visited = new Set<string>();

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!visited.has(node)) {
      console.log(node);
      visited.add(node);
      // Add neighbors to stack (reversed to maintain order)
      for (let i = graph[node].length - 1; i >= 0; i--) {
        stack.push(graph[node][i]);
      }
    }
  }
}
dfsIterative(graph, 'A');
