type Graph = Map<string, string[]>;

function topologicalSort(graph: Graph): string[] | null {
  const visited = new Set<string>();
  const visiting = new Set<string>();  // To detect cycles
  const result: string[] = [];

  function dfs(node: string): boolean {
    if (visiting.has(node)) {
      // Cycle detected
      return false;
    }

    if (visited.has(node)) {
      // Already processed this node
      return true;
    }

    visiting.add(node);

    const neighbors = graph.get(node) ?? [];
    for (const neighbor of neighbors) {
      if (!dfs(neighbor)) {
        return false;
      }
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);
    return true;
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (!dfs(node)) {
        // Cycle detected, no valid topological ordering
        return null;
      }
    }
  }

  // The result has nodes in reverse order of dependencies, so reverse it
  return result.reverse();
}

// Example usage:

const graph: Graph = new Map([
  ['shirt', ['belt', 'tie']],
  ['tie', ['jacket']],
  ['belt', ['jacket']],
  ['pants', ['belt']],
  ['socks', ['shoes']],
  ['shoes', []],
  ['jacket', []],
]);

const ordering = topologicalSort(graph);

if (ordering) {
  console.log('Topological Order:', ordering);
} else {
  console.log('Cycle detected, no valid ordering.');
}
