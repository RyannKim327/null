type Graph = { [node: string]: string[] };

const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
function dfs(
  graph: Graph,
  startNode: string,
  visited: Set<string> = new Set()
): string[] {
  // Mark the current node as visited
  visited.add(startNode);
  
  // Store the traversal order
  const traversal: string[] = [startNode];
  
  // Visit each neighbor recursively
  for (const neighbor of graph[startNode]) {
    if (!visited.has(neighbor)) {
      traversal.push(...dfs(graph, neighbor, visited));
    }
  }
  
  return traversal;
}

// Usage:
const traversalOrder = dfs(graph, 'A');
console.log(traversalOrder); // e.g., ['A', 'B', 'D', 'E', 'F', 'C']
