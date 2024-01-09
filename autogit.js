class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = new Map();
  }

  addNode(name) {
    this.nodes.add(name);
    this.edges.set(name, new Map());
  }

  addEdge(from, to, weight) {
    this.edges.get(from).set(to, weight);
    this.edges.get(to).set(from, weight);
  }

  getNeighbors(name) {
    return this.edges.get(name);
  }
}
function dijkstra(graph, start) {
  const distances = new Map(); // Shortest distance from start node to other nodes
  const previous = new Map(); // Previous node in the shortest path

  // Initialize distances and previous with initial values
  graph.nodes.forEach((node) => {
    distances.set(node, Infinity);
    previous.set(node, null);
  });

  distances.set(start, 0); // Distance from start to start is 0

  const queue = [...graph.nodes]; // All nodes in the graph
  const visited = new Set(); // Visited nodes

  while (queue.length > 0) {
    // Find the node with the smallest distance
    const minNode = [...queue].reduce((min, node) => (distances.get(node) < distances.get(min) ? node : min));

    // Remove the node from the queue
    queue.splice(queue.indexOf(minNode), 1);

    visited.add(minNode);

    // Get neighbors of the current node
    const neighbors = graph.getNeighbors(minNode);

    // Update the distances and previous node for each neighbor
    for (const neighbor of neighbors.keys()) {
      if (!visited.has(neighbor)) {
        const currentDistance = distances.get(minNode) + neighbors.get(neighbor);

        if (currentDistance < distances.get(neighbor)) {
          distances.set(neighbor, currentDistance);
          previous.set(neighbor, minNode);
        }
      }
    }
  }

  return { distances, previous };
}
// Create a new graph
const graph = new Graph();

// Add nodes to the graph
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

// Add edges to the graph
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const { distances, previous } = dijkstra(graph, "A");

// Print the shortest distances from node A to all other nodes
distances.forEach((distance, node) => {
  console.log(`Shortest distance from A to ${node}: ${distance}`);
});

// Print the shortest path from node A to node F
console.log("Shortest path from A to F:", getPath("F"));

// Helper function to get the shortest path from start to end node
function getPath(end) {
  const path = [];
  let current = end;

  while (current !== null) {
    path.unshift(current);
    current = previous.get(current);
  }

  return path.join(" -> ");
}
