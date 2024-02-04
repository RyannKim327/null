function dijkstra(graph, source) {
  const distances = {};
  const previous = {};
  const priorityQueue = new PriorityQueue();

  // Step 1: Initialize
  for (const vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[source] = 0;

  // Step 4: Dijkstra's algorithm
  priorityQueue.enqueue(source, 0);

  while (!priorityQueue.isEmpty()) {
    const currentVertex = priorityQueue.dequeue();

    for (const neighbor of graph[currentVertex]) {
      const { vertex, weight } = neighbor;
      const distance = distances[currentVertex] + weight;

      if (distance < distances[vertex]) {
        distances[vertex] = distance;
        previous[vertex] = currentVertex;
        priorityQueue.enqueue(vertex, distance);
      }
    }
  }

  // Step 5: Get shortest path
  function getPath(destination) {
    const path = [];
    let vertex = destination;

    while (vertex !== null) {
      path.push(vertex);
      vertex = previous[vertex];
    }

    return path.reverse();
  }

  return { distances, previous, getPath };
}

// Example usage
const graph = {
  A: [{ vertex: 'B', weight: 4 }, { vertex: 'C', weight: 2 }],
  B: [{ vertex: 'A', weight: 4 }, { vertex: 'D', weight: 5 }],
  C: [{ vertex: 'A', weight: 2 }, { vertex: 'D', weight: 1 }],
  D: [{ vertex: 'B', weight: 5 }, { vertex: 'C', weight: 1 }],
};
const { distances, previous, getPath } = dijkstra(graph, 'A');

console.log(distances);  // { A: 0, B: 3, C: 2, D: 3 }
console.log(getPath('D'));  // [ 'A', 'C', 'D' ]
