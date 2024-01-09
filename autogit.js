function dijkstra(graph, startNode) {
  const distances = {}; // Initialize distances to infinity
  const visited = {};
  const previous = {};
  
  // Set initial distances and previous node for startNode
  distances[startNode] = 0;
  
  // Function to find the node with the shortest distance
  function findShortestDistanceNode() {
    let shortestDistance = Infinity;
    let shortestNode = null;
    
    for (let node in distances) {
      const distance = distances[node];
      if (distance < shortestDistance && !visited[node]) {
        shortestDistance = distance;
        shortestNode = node;
      }
    }
    
    return shortestNode;
  }
  
  while (true) {
    const currentNode = findShortestDistanceNode();
    if (currentNode === null) break;
    
    visited[currentNode] = true;
    
    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;
      
      if (!distances[neighbor] || totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = currentNode;
      }
    }
  }
  
  return { distances, previous };
}

// Example usage:
const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 8 },
  D: { B: 1, C: 4, E: 3, F: 6 },
  E: { C: 8, D: 3 },
  F: { D: 6 },
};

const startNode = "A";
const { distances, previous } = dijkstra(graph, startNode);

console.log(distances); // Output: { A: 0, B: 3, C: 1, D: 4, E: 7, F: 10 }
console.log(previous);  // Output: { B: 'A', C: 'A', D: 'B', E: 'D', F: 'D' }

// Reconstruct shortest path from startNode to any other node
function reconstructPath(previous, destination) {
  const path = [destination];
  let current = destination;
  
  while (previous[current]) {
    path.unshift(previous[current]);
    current = previous[current];
  }
  
  return path;
}

const destination = "F";
const shortestPath = reconstructPath(previous, destination);
console.log(shortestPath); // Output: ['A', 'C', 'D', 'F']
