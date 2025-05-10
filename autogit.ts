type Graph = Map<string, string[]>;

function depthLimitedSearch(
  graph: Graph,
  start: string,
  target: string,
  limit: number
): boolean {
  function recursiveDLS(current: string, depth: number): boolean {
    if (current === target) return true;
    if (depth === 0) return false;

    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      if (recursiveDLS(neighbor, depth - 1)) {
        return true;
      }
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
  ['E', []],
  ['F', []]
]);

console.log(depthLimitedSearch(graph, 'A', 'E', 2)); // true
console.log(depthLimitedSearch(graph, 'A', 'F', 1)); // false because limit is 1
