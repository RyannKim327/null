type Graph = Map<number, number[]>;

function topologicalSort(edges: [number, number][]): number[] | null {
  // Build adjacency list
  const graph: Graph = new Map();
  for (const [u, v] of edges) {
    if (!graph.has(u)) graph.set(u, []);
    if (!graph.has(v)) graph.set(v, []);
    graph.get(u)!.push(v);
  }

  const visited = new Map<number, boolean>(); // true = visited, false = visiting (for cycle detection)
  const result: number[] = [];

  function dfs(node: number): boolean {
    if (visited.get(node) === false) {
      // Found a cycle
      return false;
    }

    if (visited.get(node) === true) {
      // Already visited this node fully
      return true;
    }

    // Mark as visiting
    visited.set(node, false);

    for (const neighbor of graph.get(node)!) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    // Mark as visited
    visited.set(node, true);
    result.push(node);
    return true;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (!dfs(node)) {
        return null; // Cycle detected; no valid topological ordering
      }
    }
  }

  // Reverse because we add nodes after visiting neighbors
  return result.reverse();
}

// Example usage:
const edges = [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1],
];

const sorted = topologicalSort(edges);
if (sorted) {
  console.log("Topological order:", sorted);
} else {
  console.log("Graph has a cycle, no valid topological sort.");
}
