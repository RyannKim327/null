function dijkstra(graph, startNode) {
  const distances = {};
  const visited = new Set();
  const unvisited = new Set(Object.keys(graph));

  // Set initial distances to infinity
  for (const node in graph) {
    distances[node] = Infinity;
  }

  // Set distance of start node to 0
  distances[startNode] = 0;

  while (unvisited.size) {
    let currentNode = null;

    // Find node with the smallest distance
    for (const node of unvisited) {
      if (currentNode === null || distances[node] < distances[currentNode]) {
        currentNode = node;
      }
    }

    // Update distances for neighboring nodes
    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
      }
    }

    // Mark node as visited
    visited.add(currentNode);
    unvisited.delete(currentNode);
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 1 },
  D: { B: 3, C: 1 },
};

const distances = dijkstra(graph, 'A');
console.log(distances); // { A: 0, B: 3, C: 2, D: 3 }
