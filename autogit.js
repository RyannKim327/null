const graph = {
  'A': { 'B': 5, 'C': 1 },
  'B': { 'A': 5, 'C': 2, 'D': 1 },
  'C': { 'A': 1, 'B': 2, 'D': 4, 'E': 8 },
  'D': { 'B': 1, 'C': 4, 'E': 3, 'F': 6 },
  'E': { 'C': 8, 'D': 3 },
  'F': { 'D': 6 }
};
function findMinDistanceNode(distances, visited) {
  let minNode = null;
  for (const node in distances) {
    if (!visited.includes(node) && (minNode === null || distances[node] < distances[minNode])) {
      minNode = node;
    }
  }
  return minNode;
}
function dijkstra(graph, startNode) {
  const distances = {};
  const visited = [];

  // Initialize distances with Infinity, except for the start node
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  while (true) {
    const currentNode = findMinDistanceNode(distances, visited);
    if (currentNode === null) {
      break;  // No more nodes to visit
    }

    visited.push(currentNode);

    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const path = distances[currentNode] + distance;
      if (path < distances[neighbor]) {
        distances[neighbor] = path;
      }
    }
  }

  return distances;
}
const shortestDistances = dijkstra(graph, 'A');
console.log(shortestDistances);
