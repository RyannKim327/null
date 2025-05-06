function topologicalSort(graph: Map<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];

  function dfs(node: string) {
    if (visited.has(node)) return;
    visited.add(node);
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      dfs(neighbor);
    }
    stack.push(node);
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
  }

  return stack.reverse(); // reverse to get the correct order
}

// Example usage:
const graph = new Map<string, string[]>([
  ['5', ['2', '0']],
  ['4', ['0', '1']],
  ['2', ['3']],
  ['3', ['1']],
  ['0', []],
  ['1', []],
]);

const order = topologicalSort(graph);
console.log(order); // Possible output: ['4', '5', '2', '3', '1', '0']
