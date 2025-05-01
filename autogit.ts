function bfs(graph: Record<string, string[]>, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const order: string[] = [];

  // Start with the initial node
  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const current = queue.shift()!;
    order.push(current);

    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return order;
}

// Example usage:
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

console.log(bfs(graph, "A")); // Output: ["A", "B", "C", "D", "E", "F"]
