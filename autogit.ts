type Graph = { [node: string]: string[] };

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    const current = queue.shift()!;
    result.push(current);

    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

console.log(bfs(graph, "A")); 
// Output: ["A", "B", "C", "D", "E", "F"]
