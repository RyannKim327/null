type Graph = { [key: string]: string[] };

function bfs(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);

    for (const neighbor of graph[node] || []) {
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

const traversalOrder = bfs(graph, "A");
console.log(traversalOrder);  // Output: ['A', 'B', 'C', 'D', 'E', 'F']
