function dijkstra(graph, startNode) {
  let distances = {};
  let visited = {};
  
  // Initialize distances with Infinity and startNode with 0
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;
  
  // Loop as long as there are unvisited nodes
  while (Object.keys(visited).length < Object.keys(graph).length) {
    
    // Find the unvisited node with the smallest distance
    let currentNode = null;
    for (let node in distances) {
      if (!visited[node] && (currentNode === null || distances[node] < distances[currentNode])) {
        currentNode = node;
      }
    }
    
    // Visit the current node
    visited[currentNode] = true;
    
    // Update distances to neighboring nodes
    for (let neighbor in graph[currentNode]) {
      let distance = distances[currentNode] + graph[currentNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }
  
  return distances;
}

// Example graph representation
let graph = {
  'A': {'B': 5, 'C': 3},
  'B': {'A': 5, 'C': 2, 'D': 1},
  'C': {'A': 3, 'B': 2, 'D': 4},
  'D': {'B': 1, 'C': 4}
};

// Find shortest paths from node 'A'
let shortestPaths = dijkstra(graph, 'A');
console.log(shortestPaths);
