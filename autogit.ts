type Graph<T> = Map<T, T[]>;
function depthLimitedSearch<T>(
  graph: Graph<T>,
  start: T,
  goal: T,
  limit: number
): T[] | null {
  // Stack holds entries with node and depth
  const stack: { node: T; path: T[]; depth: number }[] = [
    { node: start, path: [start], depth: 0 },
  ];

  while (stack.length > 0) {
    const { node, path, depth } = stack.pop()!;

    // Check if the goal is found
    if (node === goal) {
      return path;
    }

    // If depth limit not reached, expand children
    if (depth < limit) {
      const neighbors = graph.get(node) ?? [];
      for (const neighbor of neighbors) {
        // Avoid cycles by checking if neighbor is already in path
        if (!path.includes(neighbor)) {
          stack.push({
            node: neighbor,
            path: [...path, neighbor],
            depth: depth + 1,
          });
        }
      }
    }
  }

  // Goal not found within limit
  return null;
}
const graph = new Map<string, string[]>([
  ['A', ['B', 'C']],
  ['B', ['D']],
  ['C', ['E']],
  ['D', []],
  ['E', []],
]);

const path = depthLimitedSearch(graph, 'A', 'E', 2);
console.log(path); // e.g. ['A', 'C', 'E']
