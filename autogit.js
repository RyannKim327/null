function Graph() {
  this.nodes = [];
  this.edges = {};
}
Graph.prototype.addNode = function (node) {
  this.nodes.push(node);
  this.edges[node] = {};
};
Graph.prototype.addEdge = function (node1, node2, weight) {
  this.edges[node1][node2] = weight;
  this.edges[node2][node1] = weight; // If the graph is undirected
};
const graph = new Graph();
const nodes = ['A', 'B', 'C', 'D', 'E']; // Example nodes
nodes.forEach((node) => graph.addNode(node)); // Add nodes to the graph
graph.addEdge('A', 'B', 4); // Add edges and weights
graph.addEdge('A', 'C', 2);
// ... add more edges as needed

const distances = {};
nodes.forEach((node) => (distances[node] = Infinity));
distances['A'] = 0;

const visited = new Set();
function dijkstra(graph, distances, visited) {
  while (visited.size < graph.nodes.length) {
    let currentNode = null;
    let minDistance = Infinity;

    // Find the node with the smallest distance
    graph.nodes.forEach((node) => {
      if (!visited.has(node) && distances[node] < minDistance) {
        minDistance = distances[node];
        currentNode = node;
      }
    });

    // Mark the current node as visited
    visited.add(currentNode);

    // Update distances of adjacent nodes
    for (let neighbor in graph.edges[currentNode]) {
      let distance = graph.edges[currentNode][neighbor];
      let totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
      }
    }
  }
}

dijkstra(graph, distances, visited);
function getShortestPath(graph, distances, source, destination) {
  const path = [destination];
  let current = destination;

  while (current !== source) {
    for (let neighbor in graph.edges[current]) {
      if (distances[current] === distances[neighbor] + graph.edges[current][neighbor]) {
        path.unshift(neighbor);
        current = neighbor;
        break;
      }
    }
  }

  return path;
}

const source = 'A';
const destination = 'E';

const shortestPath = getShortestPath(graph, distances, source, destination);
console.log('Shortest path:', shortestPath);
console.log('Shortest distance:', distances[destination]);
