type Graph = Map<string, string[]>;

/**
 * Performs a breadth-limited search on a graph from start to goal,
 * up to a specified depth limit.
 * 
 * @param graph - The graph represented as adjacency list
 * @param start - Start node id
 * @param goal - Goal node id
 * @param depthLimit - Max depth to search
 * @returns An array with the path from start to goal, or null if no path found within limit
 */
function breadthLimitedSearch(
  graph: Graph, 
  start: string, 
  goal: string, 
  depthLimit: number
): string[] | null {
  // Queue stores [nodeId, pathSoFar, depth]
  const queue: Array<[string, string[], number]> = [[start, [start], 0]];
  const visited = new Set<string>([start]);

  while (queue.length > 0) {
    const [node, path, depth] = queue.shift()!;

    if (node === goal) {
      return path;
    }
    if (depth >= depthLimit) {
      // Don't go deeper than depthLimit
      continue;
    }

    for (const neighbor of graph.get(node) || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, [...path, neighbor], depth + 1]);
      }
    }
  }

  return null; // No path found within depth limit
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D']],
  ['C', ['E']],
  ['D', ['F']],
  ['E', []],
  ['F', []],
]);

console.log(breadthLimitedSearch(graph, 'A', 'F', 3)); // prints ['A', 'B', 'D', 'F']
console.log(breadthLimitedSearch(graph, 'A', 'F', 2)); // prints null (limit too small)
