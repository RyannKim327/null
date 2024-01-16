class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(name) {
    this.nodes[name] = [];
  }

  addEdge(source, destination, weight) {
    this.nodes[source].push({ node: destination, weight });
    this.nodes[destination].push({ node: source, weight });
  }
}
function dijkstra(graph, startNode, endNode) {
  const distances = {};
  const visited = {};
  const previous = {};

  // Initialize distances and previous nodes
  for (let node in graph.nodes) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;

  while (true) {
    let smallestNode = null;

    // Find the node with the smallest distance
    for (let node in graph.nodes) {
      if (!visited[node] && (smallestNode === null || distances[node] < distances[smallestNode])) {
        smallestNode = node;
      }
    }

    if (smallestNode === null || distances[smallestNode] === Infinity) {
      break;
    }

    visited[smallestNode] = true;

    // Update distances to neighbors
    for (let neighbor of graph.nodes[smallestNode]) {
      let { node, weight } = neighbor;
      let distance = distances[smallestNode] + weight;

      if (distance < distances[node]) {
        distances[node] = distance;
        previous[node] = smallestNode;
      }
    }
  }

  // Build the shortest path
  let path = [];

  let currentNode = endNode;
  while (currentNode !== startNode) {
    path.unshift(currentNode);
    currentNode = previous[currentNode];
  }
  path.unshift(startNode);

  return { path, distance: distances[endNode] };
}
// Create the graph
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

// Add edges with their weights
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);
const startNode = 'A';
const endNode = 'E';
const shortestPath = dijkstra(graph, startNode, endNode);

console.log('Shortest path:', shortestPath.path.join(' -> '));
console.log('Distance:', shortestPath.distance);
Shortest path: A -> C -> D -> E
Distance: 9
