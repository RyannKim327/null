function topologicalSort(graph: Map<number, number[]>): number[] {
  const visited = new Set<number>();
  const stack: number[] = [];
  const tempMark = new Set<number>(); // to detect cycles

  function visit(node: number) {
    if (tempMark.has(node)) {
      throw new Error('Graph is not a DAG - cycle detected');
    }
    if (!visited.has(node)) {
      tempMark.add(node);
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        visit(neighbor);
      }
      tempMark.delete(node);
      visited.add(node);
      stack.push(node);
    }
  }

  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  return stack.reverse();
}
const graph = new Map<number, number[]>();
graph.set(5, [2, 0]);
graph.set(4, [0, 1]);
graph.set(2, [3]);
graph.set(3, [1]);
graph.set(0, []);
graph.set(1, []);

try {
  const sorted = topologicalSort(graph);
  console.log(sorted); // might output: [4,5,2,3,1,0]
} catch (err) {
  console.error(err);
}
