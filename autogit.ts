type Graph = Record<string, string[]>;

function depthFirstSearch(
  graph: Graph,
  start: string,
  visited: Set<string> = new Set()
): string[] {
  const result: string[] = [];

  function dfs(node: string) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);
    for (const neighbor of graph[node] || []) {
      dfs(neighbor);
    }
  }

  dfs(start);
  return result;
}
const myGraph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

const traversalOrder = depthFirstSearch(myGraph, 'A');
console.log(traversalOrder);
