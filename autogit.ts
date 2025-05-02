const graph: Record<string, string[]> = {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E'],
};
function bfs(graph: Record<string, string[]>, start: string): string[] {
  const visited: Set<string> = new Set();
  const queue: string[] = [];
  const result: string[] = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift()!; // Remove from front of queue
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

// Usage:
const traversalOrder = bfs(graph, 'A');
console.log(traversalOrder); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
