function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const path = {};

  // Initialize distances and path
  for (let node in graph) {
    distances[node] = Infinity;
    path[node] = null;
  }
  distances[startNode] = 0;

  while (true) {
    let smallestNode = null;

    // Find the node with the smallest distance
    for (let node in graph) {
      if (!visited[node] && (smallestNode === null || distances[node] < distances[smallestNode])) {
        smallestNode = node;
      }
    }

    if (smallestNode === null) {
      break; // algorithm finished
    }

    // Calculate distances to neighboring nodes
    for (let neighbor in graph[smallestNode]) {
      let distance = graph[smallestNode][neighbor];
      let newDistance = distances[smallestNode] + distance;

      if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        path[neighbor] = smallestNode;
      }
    }

    visited[smallestNode] = true;
  }

  return { distances, path };
}

// Example usage

const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {},
};

const startNode = "A";
const { distances, path } = dijkstra(graph, startNode);

console.log(distances); // shortest distances from startNode
console.log(path); // shortest paths from startNode
