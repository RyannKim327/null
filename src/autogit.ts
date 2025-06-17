type Graph = Map<string, string[]>;  // adjacency list representation

function bfs(graph: Graph, start: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
const graph: Graph = new Map([
  ['A', ['B', 'C']],
  ['B', ['D', 'E']],
  ['C', ['F']],
  ['D', []],
  ['E', ['F']],
  ['F', []],
]);

const traversal = bfs(graph, 'A');
console.log(traversal);  // Output: ['A', 'B', 'C', 'D', 'E', 'F']
