function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const parents = {};
  
  for (let node in graph) {
    distances[node] = Infinity;
    parents[node] = null;
  }
  
  distances[startNode] = 0;
  
  while (true) {
    let closestNode = null;
    let shortestDistance = Infinity;
    
    for (let node in graph) {
      if (!visited[node] && distances[node] < shortestDistance) {
        closestNode = node;
        shortestDistance = distances[node];
      }
    }
    
    if (closestNode === null) {
      break;
    }
    
    for (let neighbor in graph[closestNode]) {
      const distance = distances[closestNode] + graph[closestNode][neighbor];
      
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        parents[neighbor] = closestNode;
      }
    }
    
    visited[closestNode] = true;
  }
  
  return {
    distances: distances,
    parents: parents
  };
}

// Example graph
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 1, D: 2 },
  C: { A: 3, B: 1, D: 4 },
  D: { B: 2, C: 4 }
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log('Shortest distances:', result.distances);
console.log('Parents:', result.parents);
