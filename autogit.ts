type Graph = Map<string, string[]>;

function topologicalSort(graph: Graph): string[] {
  const visited = new Set<string>();
  const tempMark = new Set<string>(); // To detect cycles
  const result: string[] = [];

  function visit(node: string) {
    if (tempMark.has(node)) {
      throw new Error("Graph is not a DAG (contains a cycle)");
    }
    if (!visited.has(node)) {
      tempMark.add(node);
      const neighbors = graph.get(node) || [];
      for (const neighbor of neighbors) {
        visit(neighbor);
      }
      tempMark.delete(node);
      visited.add(node);
      result.push(node);
    }
  }

  // Visit all nodes
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      visit(node);
    }
  }

  return result.reverse(); // reverse because nodes get appended after recursion
}
const graph: Graph = new Map([
  ["shirt", ["tie", "belt"]],
  ["tie", ["jacket"]],
  ["belt", ["jacket"]],
  ["watch", []],
  ["pants", ["belt", "shoes"]],
  ["shoes", []],
  ["jacket", []],
]);

const order = topologicalSort(graph);
console.log(order);
[ 'watch', 'pants', 'shoes', 'shirt', 'belt', 'tie', 'jacket' ]
