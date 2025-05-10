type Graph = { [node: string]: string[] };

function depthLimitedSearch(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): boolean {
  // Helper function for DFS with depth control
  function recursiveDLS(node: string, depth: number): boolean {
    if (node === goal) {
      return true; // Found
    }
    if (depth <= 0) {
      return false; // Depth limit reached
    }

    if (!graph[node]) return false; // No neighbors

    // Explore neighbors
    for (const neighbor of graph[node]) {
      if (recursiveDLS(neighbor, depth - 1)) {
        return true; // If found in any neighbor, bubble up success
      }
    }
    return false; // Not found within depth limit
  }

  return recursiveDLS(start, limit);
}

// Example usage:
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

console.log(depthLimitedSearch(graph, 'A', 'F', 3)); // true
console.log(depthLimitedSearch(graph, 'A', 'F', 2)); // false because F is at depth 3
