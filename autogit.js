function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const visited = {};
  
  // Helper function to find the node with the smallest distance
  function findMinDistanceNode() {
    const unvisitedNodes = Object.keys(distances).filter(node => !visited[node]);
    return unvisitedNodes.reduce((minNode, node) => {
      if (distances[node] < distances[minNode]) {
        return node;
      } else {
        return minNode;
      }
    });
  }
  
  // Step 2: Initialize the algorithm
  Object.keys(graph).forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });
  distances[startNode] = 0;
  
  // Step 3: Implement the algorithm
  let currentNode = findMinDistanceNode();
  while (currentNode) {
    const neighbors = graph[currentNode];
    const distanceToCurrent = distances[currentNode];
    
    for (let neighbor in neighbors) {
      const distance = distanceToCurrent + neighbors[neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
      }
    }
    
    visited[currentNode] = true;
    currentNode = findMinDistanceNode();
  }
  
  // Step 4: Output the result
  return { distances, previous };
}

// Example usage
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 3, B: 2, D: 6 },
  D: { B: 1, C: 6 },
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log(result.distances); // { A: 0, B: 5, C: 3, D: 6 }
console.log(result.previous); // { A: null, B: 'A', C: 'A', D: 'B' }
