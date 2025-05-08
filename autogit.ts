type Graph = {
  [key: string]: string[];
};

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  visited.add(startNode);
  queue.push(startNode);

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

// Example usage:
const graphExample = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

console.log(bfs(graphExample, 'A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
