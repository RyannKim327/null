type Graph = Map<number, number[]>; // Adjacency list representation

function topologicalSort(graph: Graph): number[] {
  const visited = new Set<number>();
  const tempMark = new Set<number>();
  const result: number[] = [];
  let hasCycle = false;

  function visit(node: number) {
    if (tempMark.has(node)) {
      hasCycle = true; // cycle detected
      return;
    }
    if (!visited.has(node)) {
      tempMark.add(node);
      const neighbors = graph.get(node) ?? [];
      for (const neighbor of neighbors) {
        visit(neighbor);
      }
      tempMark.delete(node);
      visited.add(node);
      result.push(node);
    }
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      visit(node);
      if (hasCycle) {
        throw new Error("Graph has at least one cycle, topological sort not possible");
      }
    }
  }

  return result.reverse(); // reverse to get the correct order
}
const graph: Graph = new Map([
  [5, [2, 0]],
  [4, [0, 1]],
  [2, [3]],
  [3, [1]],
  [0, []],
  [1, []],
]);

const sorted = topologicalSort(graph);
console.log(sorted); // Example output: [4, 5, 2, 3, 1, 0]
