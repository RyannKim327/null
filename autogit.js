function dijkstra(graph, source, target) {
  const distances = {};
  const visited = {};
  const predecessors = {};
  const queue = [];

  // Initialize distances
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[source] = 0;

  // Find shortest path
  while (Object.keys(visited).length < Object.keys(graph).length) {
    let smallestNode = null;

    for (const node in graph) {
      if (!visited[node] && (smallestNode === null || distances[node] < distances[smallestNode])) {
        smallestNode = node;
      }
    }

    if (smallestNode === target) {
      break; // Reached the target node
    }

    for (const neighbor in graph[smallestNode]) {
      const distance = graph[smallestNode][neighbor];

      // Calculate new distance
      const altDistance = distances[smallestNode] + distance;
      if (altDistance < distances[neighbor]) {
        distances[neighbor] = altDistance;
        predecessors[neighbor] = smallestNode;
      }
    }

    visited[smallestNode] = true;
  }

  // Reconstruct path
  const path = [];
  let current = target;
  
  while (current !== source) {
    path.unshift(current);
    current = predecessors[current];
  }
  path.unshift(source);

  return { distance: distances[target], path };
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 1 },
  C: { A: 2, D: 6 },
  D: { B: 1, C: 6, E: 4 },
  E: { D: 4 }
};

const shortestPath = dijkstra(graph, 'A', 'E');
console.log('Shortest distance:', shortestPath.distance);
console.log('Shortest path:', shortestPath.path);
