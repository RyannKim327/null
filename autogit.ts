type Node = string; // or number, or any type representing your nodes
type Graph = Map<Node, Node[]>;

function depthLimitedSearch(
  graph: Graph,
  start: Node,
  goal: Node,
  limit: number
): boolean {
  function recursiveDLS(node: Node, depth: number): boolean {
    if (node === goal) return true;
    if (depth === 0) return false;

    const neighbors = graph.get(node) ?? [];
    for (const neighbor of neighbors) {
      if (recursiveDLS(neighbor, depth - 1)) return true;
    }
    return false;
  }

  return recursiveDLS(start, limit);
}

// Example usage:
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['F']],
  ['F', []],
]);

console.log(depthLimitedSearch(graph, 'A', 'F', 2)); // true
console.log(depthLimitedSearch(graph, 'A', 'F', 1)); // false (limit too shallow)
