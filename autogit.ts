type Graph = Map<number, number[]>;

function topologicalSort(graph: Graph): number[] | null {
  const visited = new Set<number>();
  const onStack = new Set<number>(); // For cycle detection
  const stack: number[] = [];
  let hasCycle = false;

  function dfs(node: number) {
    if (onStack.has(node)) {
      hasCycle = true; // Found a cycle
      return;
    }
    if (visited.has(node) || hasCycle) return;

    onStack.add(node);
    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      dfs(neighbor);
    }
    onStack.delete(node);
    visited.add(node);
    stack.push(node);
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      dfs(node);
    }
    if (hasCycle) {
      return null; // No topological sort if there’s a cycle
    }
  }

  return stack.reverse();
}
const graph: Graph = new Map([
  [5, [2, 0]],
  [4, [0, 1]],
  [2, [3]],
  [3, [1]],
  [0, []],
  [1, []]
]);

const order = topologicalSort(graph);
if (order === null) {
  console.log("Graph has a cycle, no topological ordering possible.");
} else {
  console.log("Topological order:", order);
}
