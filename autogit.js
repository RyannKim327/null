function dijkstra(graph, startNode) {
  let distances = {};
  let visited = {};
  let queue = [];
  
  // Initialize distances with Infinity for all nodes except the startNode
  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    queue.push(node);
  }
  
  while (queue.length) {
    let currentNode = minDistanceNode(distances, queue);
    queue = queue.filter(node => node !== currentNode);
    
    for (let neighbor in graph[currentNode]) {
      let distance = distances[currentNode] + graph[currentNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }
  
  return distances;
}

function minDistanceNode(distances, queue) {
  let minDistance = Infinity;
  let minNode = null;
  
  queue.forEach(node => {
    if (distances[node] < minDistance) {
      minDistance = distances[node];
      minNode = node;
    }
  });
  
  return minNode;
}

// Example usage:
let graph = {
  A: { B: 2, C: 5 },
  B: { A: 2, C: 1 },
  C: { A: 5, B: 1 }
};

let startNode = 'A';
let shortestDistances = dijkstra(graph, startNode);

console.log(shortestDistances);

