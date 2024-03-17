function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const parents = {};

  // Initialize distances, visited, and parents
  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
    parents[node] = null;
  }
  distances[startNode] = 0;

  while (true) {
    let closestNode = null;
    let shortestDistance = Infinity;

    // Find the closest unvisited node
    for (let node in graph) {
      if (!visited[node] && distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }

    if (closestNode === null) {
      break;
    }

    // Update distances to neighbors of the closest node
    for (let neighbor in graph[closestNode]) {
      const distance = distances[closestNode] + graph[closestNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        parents[neighbor] = closestNode;
      }
    }

    visited[closestNode] = true;
  }

  return { distances, parents };
}

// Example graph representation using an adjacency list
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 1, D: 2 },
  C: { A: 3, B: 1, D: 4 },
  D: { B: 2, C: 4 },
};

const startNode = 'A';
const { distances, parents } = dijkstra(graph, startNode);

console.log(distances); // Shortest distances from startNode
console.log(parents); // Parent nodes for each node on the shortest path
