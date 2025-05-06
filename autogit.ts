type Graph = { [node: string]: string[] };

function depthLimitedSearch(
  graph: Graph,
  start: string,
  goal: string,
  limit: number
): boolean {
  function recursiveDLS(node: string, depth: number): boolean {
    if (depth === 0) {
      return node === goal;
    }

    if (node === goal) {
      return true;
    }

    if (!graph[node]) return false; // no neighbors

    for (const neighbor of graph[node]) {
      if (recursiveDLS(neighbor, depth - 1)) {
        return true;
      }
    }

    return false;
  }

  return recursiveDLS(start, limit);
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

console.log(depthLimitedSearch(graph, 'A', 'F', 2)); // true (reachable within depth 2)
console.log(depthLimitedSearch(graph, 'A', 'F', 1)); // false (not reachable within depth 1)
