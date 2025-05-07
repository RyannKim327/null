type Graph = { [key: string]: string[] };

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    result.push(currentNode);

    for (const neighbor of graph[currentNode] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

const traversalOrder = bfs(graph, "A");
console.log(traversalOrder); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
