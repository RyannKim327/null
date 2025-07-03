type Graph = Record<string, string[]>;

const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
function dfs(graph: Graph, startNode: string): string[] {
  const visited: Set<string> = new Set();
  const stack: string[] = [startNode];
  const result: string[] = [];

  while (stack.length > 0) {
    const node = stack.pop()!;
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      // Push neighbors onto the stack
      // Reverse to maintain order if desired
      const neighbors = graph[node] || [];
      for (let neighbor of neighbors.reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return result;
}
const traversalOrder = dfs(graph, 'A');
console.log(traversalOrder); // Output might be: ['A', 'C', 'F', 'B', 'E', 'D']
function dfsRecursive(graph: Graph, node: string, visited: Set<string> = new Set()): string[] {
  if (visited.has(node)) {
    return [];
  }

  visited.add(node);
  const result: string[] = [node];

  const neighbors = graph[node] || [];
  for (const neighbor of neighbors) {
    result.push(...dfsRecursive(graph, neighbor, visited));
  }

  return result;
}
const traversalOrderRecursive = dfsRecursive(graph, 'A');
console.log(traversalOrderRecursive); // Similar output
