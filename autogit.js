class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }
  
  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = {};
  }
  
  addEdge(node1, node2, weight) {
    this.edges[node1][node2] = weight;
    this.edges[node2][node1] = weight;
  }
  
  getWeight(node1, node2) {
    return this.edges[node1][node2];
  }
  
  getNodes() {
    return this.nodes;
  }
}
function dijkstra(graph, startNode) {
  let distances = {};
  let visited = new Set();
  let previous = {};
  
  // Initialize distances with Infinity except for the start node
  for (let node of graph.getNodes()) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;
  
  while (visited.size < graph.getNodes().size) {
    let currentNode = minDistanceNode(distances, visited);
    visited.add(currentNode);
    
    for (let neighbor in graph.edges[currentNode]) {
      let distance = distances[currentNode] + graph.getWeight(currentNode, neighbor);
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
      }
    }
  }
  
  return { distances, previous };
}
function minDistanceNode(distances, visited) {
  let minimum = Infinity;
  let minNode = null;
  
  for (let node in distances) {
    if (!visited.has(node) && distances[node] <= minimum) {
      minimum = distances[node];
      minNode = node;
    }
  }
  
  return minNode;
}
// Create a graph
let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B", 3);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 1);

// Find the shortest path from node A
let result = dijkstra(graph, "A");
console.log("Distances:", result.distances);
console.log("Previous nodes:", result.previous);
Distances: { A: 0, B: 3, C: 2, D: 3 }
Previous nodes: { B: 'A', C: 'A', D: 'C' }
