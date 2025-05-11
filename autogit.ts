type Graph = Record<string, string[]>;

function depthLimitedSearch(
  graph: Graph,
  startNode: string,
  goalNode: string,
  limit: number
): boolean {
  function recursiveDLS(node: string, depth: number): boolean {
    if (node === goalNode) return true;
    if (depth === limit) return false;

    for (const neighbor of graph[node] || []) {
      if (recursiveDLS(neighbor, depth + 1)) return true;
    }
    return false;
  }

  return recursiveDLS(startNode, 0);
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

console.log(depthLimitedSearch(graph, 'A', 'F', 2)); // true, since F is reachable within depth 2
console.log(depthLimitedSearch(graph, 'A', 'F', 1)); // false, since depth is limited to 1
