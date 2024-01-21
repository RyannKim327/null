function BFS(graph, startNode) {
  const queue = [];
  const visited = new Set();
  const traversalOrder = [];
  queue.push(startNode);
  visited.add(startNode);
  while (queue.length > 0) {
    const currentNode = queue.shift();
    traversalOrder.push(currentNode);

    const neighbors = graph[currentNode];
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
  return traversalOrder;
}

// Test example graph
const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'E'],
  D: ['B'],
  E: ['C']
};

console.log(BFS(graph, 'A'));
