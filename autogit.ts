type Graph = { [node: string]: string[] };

function depthFirstSearch(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const result: string[] = [];

  function dfs(node: string) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  dfs(startNode);
  return result;
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

console.log(depthFirstSearch(graph, 'A')); // Output: DFS traversal order
function depthFirstSearchIterative(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const stack: string[] = [startNode];
  const result: string[] = [];

  while (stack.length) {
    const node = stack.pop()!;
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      // Push neighbors onto the stack in reverse order for correct traversal
      for (const neighbor of graph[node].slice().reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}
