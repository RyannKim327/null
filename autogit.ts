function topologicalSort(graph: Map<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];
  const tempMark = new Set<string>();

  function visit(node: string) {
    if (tempMark.has(node)) {
      throw new Error('Graph has a cycle, so topological sort is not possible');
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
const graph = new Map<string, string[]>();
graph.set('A', ['B', 'C']);
graph.set('B', ['C']);
graph.set('C', []);
const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // Output: ['A', 'B', 'C']
