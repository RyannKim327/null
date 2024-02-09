// Step 1: Define the graph
const graph = {
  'A': { 'B': 5, 'C': 2 },
  'B': { 'D': 4, 'E': 2 },
  'C': { 'B': 8, 'E': 7 },
  'D': { 'E': 6, 'F': 3 },
  'E': { 'F': 1 },
  'F': {}
};

function dijkstra(graph, source) {
  const distances = {};
  const visited = {};
  const queue = [];

  // Step 2: Initialize distances and visited array
  for (let node in graph) {
    distances[node] = Infinity;
    visited[node] = false;
  }
  distances[source] = 0;

  // Step 3: Implement the Dijkstra's algorithm
  queue.push(source);
  while (queue.length) {
    const currentNode = queue.shift();
    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }

      if (!visited[neighbor]) {
        queue.push(neighbor);
      }
    }
  }

  return distances;
}

// Step 4: Determine the shortest path
const sourceNode = 'A';
const shortestDistances = dijkstra(graph, sourceNode);
console.log(shortestDistances);

// Output: { A: 0, B: 5, C: 2, D: 9, E: 7, F: 8 }
