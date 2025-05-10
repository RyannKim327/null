type Graph = { [key: string]: string[] };

function bfs(graph: Graph, start: string, target: string | null = null): string[] | null {
  const queue: string[] = [start];
  const visited = new Set<string>([start]);
  const predecessor: { [key: string]: string | null } = {};
  predecessor[start] = null;

  while (queue.length > 0) {
    const node = queue.shift()!;
    // If looking for a specific target node:
    if (target !== null && node === target) {
      // Reconstruct path
      const path: string[] = [];
      let current: string | null = node;
      while (current !== null) {
        path.unshift(current);
        current = predecessor[current];
      }
      return path;
    }

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        predecessor[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }

  // If target was specified and not found:
  if (target !== null) {
    return null;
  }

  // If no target specified, return the order of visited nodes:
  return Array.from(visited);
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

console.log(bfs(graph, 'A')); // ['A', 'B', 'C', 'D', 'E', 'F']
console.log(bfs(graph, 'A', 'E')); // ['A', 'B', 'E']
console.log(bfs(graph, 'A', 'Z')); // null (Z not in graph)
