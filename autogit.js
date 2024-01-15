const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 8 },
  D: { B: 1, C: 4, E: 3, F: 6 },
  E: { C: 8, D: 3 },
  F: { D: 6 },
};
function dijkstra(graph, source, destination) { /* code goes here */ }
const distances = {};
const visited = {};

for (const vertex in graph) {
  distances[vertex] = Infinity;
}

distances[source] = 0;
while (Object.keys(visited).length !== Object.keys(graph).length) {
  // Find unvisited vertex with the smallest distance
  let smallestDistance = Infinity;
  let smallestVertex;

  for (const vertex in distances) {
    if (!visited[vertex] && distances[vertex] <= smallestDistance) {
      smallestDistance = distances[vertex];
      smallestVertex = vertex;
    }
  }

  // Mark the current vertex as visited
  visited[smallestVertex] = true;

  // Check each adjacent vertex
  for (const neighbor in graph[smallestVertex]) {
    const distance = graph[smallestVertex][neighbor];

    // Update the distance if it's smaller than the current distance
    if (distances[neighbor] > distances[smallestVertex] + distance) {
      distances[neighbor] = distances[smallestVertex] + distance;
    }
  }
}
return distances[destination];
function dijkstra(graph, source, destination) {
  const distances = {};
  const visited = {};

  for (const vertex in graph) {
    distances[vertex] = Infinity;
  }

  distances[source] = 0;

  while (Object.keys(visited).length !== Object.keys(graph).length) {
    let smallestDistance = Infinity;
    let smallestVertex;

    for (const vertex in distances) {
      if (!visited[vertex] && distances[vertex] <= smallestDistance) {
        smallestDistance = distances[vertex];
        smallestVertex = vertex;
      }
    }

    visited[smallestVertex] = true;

    for (const neighbor in graph[smallestVertex]) {
      const distance = graph[smallestVertex][neighbor];

      if (distances[neighbor] > distances[smallestVertex] + distance) {
        distances[neighbor] = distances[smallestVertex] + distance;
      }
    }
  }

  return distances[destination];
}

const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 8 },
  D: { B: 1, C: 4, E: 3, F: 6 },
  E: { C: 8, D: 3 },
  F: { D: 6 },
};

const shortestPath = dijkstra(graph, 'A', 'F');
console.log(shortestPath);
