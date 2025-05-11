type Graph = { [key: string]: string[] };

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const traversalOrder: string[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const node = queue.shift()!; // Remove the first element
    traversalOrder.push(node);

    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return traversalOrder;
}
const graph: Graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: [],
};

console.log(bfs(graph, 'A')); 
// Output: ['A', 'B', 'C', 'D', 'E', 'F']
