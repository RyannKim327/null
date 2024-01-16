const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2 },
};
function dijkstra(graph, startNode) {
  // Step 1: Initialize data structures
  const distances = {};
  const visited = {};

  for (let vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }

  distances[startNode] = 0;

  // Step 2: Traverse the graph
  for (let vertex in graph) {
    let currentNode = minDistanceNode(distances, visited);
    visited[currentNode] = true;

    for (let neighbor in graph[currentNode]) {
      let distance = graph[currentNode][neighbor];
      let totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
      }
    }
  }

  // Step 3: Output the shortest distances
  return distances;
}
function minDistanceNode(distances, visited) {
  let minDistance = Infinity;
  let minNode = null;

  for (let node in distances) {
    let distance = distances[node];

    if (distance < minDistance && !visited[node]) {
      minDistance = distance;
      minNode = node;
    }
  }

  return minNode;
}
const startNode = 'A';
const shortestDistances = dijkstra(graph, startNode);

console.log(shortestDistances);
