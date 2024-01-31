function bfs(graph, startNode) {
  // Initialize the queue with the start node and mark it as visited
  const queue = [startNode];
  const visited = new Set([startNode]);

  while (queue.length > 0) {
    // Dequeue a node from the front of the queue
    const currentNode = queue.shift();

    // Process the dequeued node (e.g., print or perform any operation)
    console.log(currentNode);

    // Enqueue all unvisited neighboring nodes and mark them as visited
    const neighbors = graph[currentNode];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};
bfs(graph, 'A');
