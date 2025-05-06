type Graph = Map<string, string[]>;

function topologicalSort(graph: Graph): string[] | null {
  const visited = new Set<string>();
  const onStack = new Set<string>(); // to detect cycles
  const result: string[] = [];

  function dfs(node: string): boolean {
    if (onStack.has(node)) {
      // Found a cycle
      return false;
    }

    if (visited.has(node)) {
      return true; // already processed
    }

    onStack.add(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    onStack.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (!dfs(node)) {
        // Cycle detected, topological sort not possible
        return null;
      }
    }
  }

  // reverse because we add nodes post DFS visit
  return result.reverse();
}
const graph: Graph = new Map([
  ['shirt', ['tie', 'belt']],
  ['tie', ['jacket']],
  ['belt', ['jacket']],
  ['pants', ['belt', 'shoes']],
  ['socks', ['shoes']],
  ['watch', []],
  ['jacket', []],
  ['shoes', []]
]);

const order = topologicalSort(graph);

if (order) {
  console.log('A valid order is:', order);
} else {
  console.log('Cycle detected, no topological order possible.');
}
