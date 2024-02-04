class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = {};
  }

  addEdge(src, dest, weight) {
    this.edges[src][dest] = weight;
    this.edges[dest][src] = weight;
  }

  getNeighbors(node) {
    return Object.keys(this.edges[node]);
  }
}
function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();

  // Initialize all distances to infinity except the start node
  for (const node of graph.nodes) {
    distances[node] = Infinity;
  }
  distances[start] = 0;

  while (visited.size < graph.nodes.size) {
    const nextNode = getNextNode(distances, visited);

    // Mark the current node as visited
    visited.add(nextNode);

    // Update distances to neighbors
    const neighbors = graph.getNeighbors(nextNode);
    for (const neighbor of neighbors) {
      const weight = graph.edges[nextNode][neighbor];
      const distance = distances[nextNode] + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }
  }

  return distances;
}
function getNextNode(distances, visited) {
  let minDistance = Infinity;
  let nextNode;

  for (const node in distances) {
    if (!visited.has(node) && distances[node] < minDistance) {
      minDistance = distances[node];
      nextNode = node;
    }
  }

  return nextNode;
}
// Create a graph
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("D", "E", 3);

// Find shortest paths starting from "A"
const startNode = "A";
const shortestPaths = dijkstra(graph, startNode);
console.log(shortestPaths);
