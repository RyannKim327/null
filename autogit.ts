type Graph = {
  [key: string]: string[];
};

function bfs(graph: Graph, startNode: string): string[] {
  const visited = new Set<string>();
  const queue: string[] = [];
  const result: string[] = [];

  // Start by enqueueing the startNode and marking it visited
  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    result.push(currentNode);

    // Explore neighboring nodes
    for (const neighbor of graph[currentNode] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}

// Example usage:
const graph: Graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
};

console.log(bfs(graph, "A")); // Outputs: ["A", "B", "C", "D", "E", "F"]
