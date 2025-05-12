// Graph type: keys are node identifiers, values are arrays of neighbor nodes
type Graph = { [node: string]: string[] };

// Depth-first search function
function dfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const result: string[] = [];

  function explore(node: string) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node] || []) {
      explore(neighbor);
    }
  }

  explore(startNode);
  return result;
}

// Example usage:
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

const visitedOrder = dfs(graph, 'A');
console.log(visitedOrder); // ['A', 'B', 'D', 'E', 'F', 'C']
