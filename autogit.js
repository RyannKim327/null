function dijkstra(graph, startNode) {
  // Step 1: Initialization
  let distances = {};
  let visited = {};
  let previous = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Step 2: Main loop
  while (Object.keys(visited).length < Object.keys(graph).length) {
    let currentNode = null;
    for (let node in graph) {
      if (!visited[node] && (currentNode === null || distances[node] < distances[currentNode])) {
        currentNode = node;
      }
    }
    
    // Step 3: Update distances
    for (let neighbor in graph[currentNode]) {
      let distance = distances[currentNode] + graph[currentNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
      }
    }
    
    visited[currentNode] = true;
  }
  
  return { distances, previous };
}
// Example graph
let graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2 },
};

// Call dijkstra function
let startNode = 'A';
let result = dijkstra(graph, startNode);

// Print shortest distances and paths
for (let node in result.distances) {
  console.log(`Shortest distance from ${startNode} to ${node}: ${result.distances[node]}`);
  let path = [];
  let currentNode = node;
  while (currentNode !== startNode) {
    path.unshift(currentNode);
    currentNode = result.previous[currentNode];
  }
  path.unshift(startNode);
  console.log(`Shortest path: ${path.join(' -> ')}`);
}
