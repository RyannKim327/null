function dijkstra(graph, source, destination) {
  const distance = [];
  const visited = [];

  // Initialize distances to infinity and visited array to false
  for (let i = 0; i < graph.length; i++) {
    distance[i] = Infinity;
    visited[i] = false;
  }

  // Distance to source node is 0
  distance[source] = 0;

  // Priority queue to store nodes with their distances
  const priorityQueue = [[source, 0]];

  while (priorityQueue.length > 0) {
    // Extract node with the minimum distance
    const [currentNode, currentDistance] = priorityQueue.shift();

    // Mark current node as visited
    visited[currentNode] = true;

    // If destination is reached, stop
    if (currentNode === destination) {
      break;
    }

    // Check neighbors and update distances
    for (let neighbor = 0; neighbor < graph[currentNode].length; neighbor++) {
      const weight = graph[currentNode][neighbor];

      // Calculate the new distance
      const newDistance = currentDistance + weight;

      // If the new distance is smaller, update the distance array and add the neighbor to the priority queue
      if (newDistance < distance[neighbor]) {
        distance[neighbor] = newDistance;
        priorityQueue.push([neighbor, newDistance]);
      }
    }
  }

  // Track the shortest path
  const shortestPath = [destination];
  let currentNode = destination;

  while (currentNode !== source) {
    for (let neighbor = 0; neighbor < graph.length; neighbor++) {
      if (graph[neighbor][currentNode] !== 0 && distance[neighbor] + graph[neighbor][currentNode] === distance[currentNode]) {
        shortestPath.unshift(neighbor);
        currentNode = neighbor;
        break;
      }
    }
  }

  return shortestPath;
}

// Example usage
const graph = [
  [0, 4, 2, 0, 0],
  [4, 0, 1, 5, 0],
  [2, 1, 0, 8, 10],
  [0, 5, 8, 0, 2],
  [0, 0, 10, 2, 0]
];

const sourceNode = 0;
const destinationNode = 4;

const shortestPath = dijkstra(graph, sourceNode, destinationNode);
console.log('Shortest path:', shortestPath);
