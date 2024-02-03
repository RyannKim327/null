class Graph {
  constructor() {
    this.nodes = new Map(); // Use a map to store nodes
  }

  addNode(node) {
    this.nodes.set(node, new Map()); // Initialize the node with an empty map for the neighbors
  }

  addEdge(source, destination, weight) {
    this.nodes.get(source).set(destination, weight); // Add edge between source and destination with the specified weight
    this.nodes.get(destination).set(source, weight); // Assume the graph is undirected, so add the reverse edge as well
  }

  getNeighbors(node) {
    return this.nodes.get(node);
  }
}
function dijkstra(graph, start) {
  const distances = new Map(); // Store the shortest distances from the start node to all other nodes
  const visited = new Set(); // Track the visited nodes

  // Initialize distances with infinity for all nodes except the start node
  for (const node of graph.nodes.keys()) {
    distances.set(node, node === start ? 0 : Infinity);
  }

  while (visited.size < graph.nodes.size) {
    // Find the node with the minimum distance among the unvisited nodes
    let minDistance = Infinity;
    let minNode;
    for (const [node, distance] of distances) {
      if (!visited.has(node) && distance < minDistance) {
        minNode = node;
        minDistance = distance;
      }
    }

    // Mark the current node as visited
    visited.add(minNode);

    // Update distances to its neighbors if a shorter path is found
    const neighbors = graph.getNeighbors(minNode);
    for (const [neighbor, weight] of neighbors) {
      const distance = distances.get(minNode) + weight;
      if (distance < distances.get(neighbor)) {
        distances.set(neighbor, distance);
      }
    }
  }

  return distances;
}
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('D', 'E', 3);
graph.addEdge('C', 'E', 1);
const startNode = 'A';
const distances = dijkstra(graph, startNode);

console.log(`Shortest distances from node ${startNode}:`);
for (const [node, distance] of distances) {
  console.log(`To node ${node}: ${distance}`);
}
