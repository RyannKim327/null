function bfs(graph: Record<string, string[]>, start: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);

    const neighbors = graph[node] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

const traversalOrder = bfs(graph, 'A');
console.log(traversalOrder); // Output: ["A", "B", "C", "D", "E", "F"]
