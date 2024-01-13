class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(source, destination, weight) {
    this.vertices.get(source).push({ node: destination, weight });
    this.vertices.get(destination).push({ node: source, weight });
  }
}
function dijkstra(graph, startVertex, endVertex) {
  const distances = new Map();
  const visited = new Set();
  const previousVertices = new Map();
  const queue = new PriorityQueue();

  // Initialize distances and previousVertices
  graph.vertices.forEach((_, vertex) => {
    distances.set(vertex, Infinity);
    previousVertices.set(vertex, null);
  });

  distances.set(startVertex, 0);
  queue.enqueue(startVertex, 0);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    if (currentVertex === endVertex) {
      // Build the path from startVertex to endVertex
      const path = [];
      let vertex = endVertex;
      while (vertex !== null) {
        path.unshift(vertex);
        vertex = previousVertices.get(vertex);
      }
      return path;
    }

    visited.add(currentVertex);

    const neighbors = graph.vertices.get(currentVertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor.node)) {
        const distance = distances.get(currentVertex) + neighbor.weight;
        if (distance < distances.get(neighbor.node)) {
          distances.set(neighbor.node, distance);
          previousVertices.set(neighbor.node, currentVertex);
          queue.enqueue(neighbor.node, distance);
        }
      }
    }
  }

  // If the end vertex is not reachable from the start vertex, return null
  return null;
}
// Create a graph
const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

// Add edges
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// Find the shortest path
const shortestPath = dijkstra(graph, "A", "E");
console.log(shortestPath);
