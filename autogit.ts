type Graph = {
  [key: string]: Array<{ neighbor: string; weight: number }>;
};

function dijkstra(graph: Graph, start: string): { [key: string]: number } {
  // Create distances object to hold shortest distance to each node
  const distances: { [key: string]: number } = {};
  const priorityQueue: Array<{ node: string; distance: number }> = [];
  
  // Initialize distances and add the start node to the queue
  for (const node in graph) {
    distances[node] = Infinity; // Set initial distances to infinity
  }
  distances[start] = 0;
  priorityQueue.push({ node: start, distance: 0 });

  while (priorityQueue.length) {
    // Sort the queue and pick the node with the smallest distance
    priorityQueue.sort((a, b) => a.distance - b.distance);
    const { node: currentNode } = priorityQueue.shift() as { node: string; distance: number };

    // Explore neighbors
    for (const { neighbor, weight } of graph[currentNode]) {
      const newDistance = distances[currentNode] + weight;
      
      // Only update if the new distance is shorter
      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        priorityQueue.push({ node: neighbor, distance: newDistance });
      }
    }
  }

  return distances;
}

// Example usage
const graph: Graph = {
  A: [{ neighbor: 'B', weight: 1 }, { neighbor: 'C', weight: 4 }],
  B: [{ neighbor: 'C', weight: 2 }, { neighbor: 'D', weight: 5 }],
  C: [{ neighbor: 'D', weight: 1 }],
  D: []
};

const shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
