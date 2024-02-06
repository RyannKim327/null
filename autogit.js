function breadthFirstSearch(graph, startVertex) {
  const queue = []; // Initialize an empty queue
  const visited = new Set(); // Initialize an empty set for visited vertices

  queue.push(startVertex); // Enqueue the starting vertex
  visited.add(startVertex); // Mark the starting vertex as visited

  while (queue.length > 0) {
    const currentVertex = queue.shift(); // Dequeue a vertex from the front of the queue

    // Process the current vertex (e.g., print or store it)
    console.log(currentVertex);

    const adjacentVertices = graph[currentVertex]; // Get adjacent vertices

    for (let i = 0; i < adjacentVertices.length; i++) {
      const adjacentVertex = adjacentVertices[i];

      if (!visited.has(adjacentVertex)) {
        queue.push(adjacentVertex); // Enqueue the adjacent vertex
        visited.add(adjacentVertex); // Mark the adjacent vertex as visited
      }
    }
  }
}
const graph = {
  A: ['B', 'C'],
  B: ['D'],
  C: ['E'],
  D: [],
  E: ['F'],
  F: [],
};

breadthFirstSearch(graph, 'A');
