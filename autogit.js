function dijkstra(graph, startNode, targetNode) {
  const distances = {};
  const visited = {};
  const previous = {};

  // Initialize distances, visited, and previous
  Object.keys(graph).forEach((node) => {
    distances[node] = Infinity;
    visited[node] = false;
    previous[node] = null;
  });

  // Set the distance of the start node to 0
  distances[startNode] = 0;

  while (true) {
    let closestNode = null;

    // Find the closest unvisited node
    Object.keys(distances).forEach((node) => {
      if (!visited[node] && (closestNode === null || distances[node] < distances[closestNode])) {
        closestNode = node;
      }
    });

    if (closestNode === null) {
      break;
    }

    // Update distances for neighboring nodes
    Object.keys(graph[closestNode]).forEach((neighborNode) => {
      const distance = graph[closestNode][neighborNode];
      const totalDistance = distances[closestNode] + distance;
      
      if (totalDistance < distances[neighborNode]) {
        distances[neighborNode] = totalDistance;
        previous[neighborNode] = closestNode;
      }
    });

    visited[closestNode] = true;

    if (closestNode === targetNode) {
      break;
    }
  }

  // Backtrack to construct the shortest path
  const shortestPath = [];
  let currentNode = targetNode;

  while (currentNode !== null) {
    shortestPath.unshift(currentNode);
    currentNode = previous[currentNode];
  }

  return { path: shortestPath, distance: distances[targetNode] };
}

// Example usage:
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 6 },
  C: { A: 2, D: 1 },
  D: { B: 6, C: 1, E: 7 },
  E: { D: 7 },
};

console.log(dijkstra(graph, 'A', 'E'));

// Output: { path: [ 'A', 'C', 'D', 'E' ], distance: 8 }
