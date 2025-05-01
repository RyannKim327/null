function topologicalSort(graph: Map<string, string[]>): string[] {
  const visited = new Set<string>();
  const stack: string[] = [];
  const tempMark = new Set<string>(); // For cycle detection

  function visit(node: string) {
    if (tempMark.has(node)) {
      throw new Error("Graph is not a DAG - cycle detected");
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

  return stack.reverse(); // reverse to get correct topological order
}
const graph = new Map<string, string[]>();
graph.set("5", ["2", "0"]);
graph.set("4", ["0", "1"]);
graph.set("2", ["3"]);
graph.set("3", ["1"]);
graph.set("0", []);
graph.set("1", []);

const order = topologicalSort(graph);
console.log(order); // Example output: [ '4', '5', '2', '3', '1', '0' ]
