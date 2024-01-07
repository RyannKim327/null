function dijkstra(graph, source) {
  const distances = {};
  const visited = {};
  const queue = [];

  // Initialize distances and visited array
  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }

  // Distance from the source to itself is 0
  distances[source] = 0;

  // Add the source node to the queue
  queue.push(source);

  while (queue.length > 0) {
    // Find the node with the minimum distance
    let currentNode = queue.shift();

    // If the node has already been visited, skip it
    if (visited[currentNode]) continue;

    // Mark the node as visited
    visited[currentNode] = true;

    // Update distances to neighbors
    for (let neighbor in graph[currentNode]) {
      let distance = graph[currentNode][neighbor];
      let totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;

        // Add neighbor to the queue
        queue.push(neighbor);
      }
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { C: 6, E: 3 },
  E: { D: 1 }
};

const sourceNode = "A";
const distances = dijkstra(graph, sourceNode);

console.log(distances);
