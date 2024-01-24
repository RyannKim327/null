// Graph class to represent the graph
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(name, edges) {
    this.vertices[name] = edges;
  }
}

// Dijkstra's algorithm function
function dijkstra(graph, startVertex) {
  // Create an object to store shortest distances
  const distances = {};

  // Create a priority queue to store the vertices to visit
  const queue = new PriorityQueue();

  // Initialize all distances with infinity except the start vertex
  for (let vertex in graph.vertices) {
    distances[vertex] = Infinity;
  }
  distances[startVertex] = 0;

  // Enqueue the start vertex with priority 0
  queue.enqueue(startVertex, 0);

  // Process vertices until the priority queue is empty
  while (!queue.isEmpty()) {
    // Dequeue the vertex with the smallest priority
    const currentVertex = queue.dequeue();

    // Get the adjacent edges of the current vertex
    const edges = graph.vertices[currentVertex] || {};

    // Iterate over the adjacent edges
    for (let neighbor in edges) {
      // Calculate the new distance to the neighbor
      const distance = distances[currentVertex] + edges[neighbor];

      // If the new distance is smaller than the current distance,
      // update the shortest distance to the neighbor and enqueue it
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  return distances;
}

// Priority queue class to store the vertices with their priorities
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(vertex, priority) {
    this.queue.push({ vertex, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift().vertex;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }
}

// Example usage

// Create a new graph
const graph = new Graph();

// Add vertices and edges to the graph
graph.addVertex("A", { B: 3, C: 5 });
graph.addVertex("B", { A: 3, C: 1, D: 7 });
graph.addVertex("C", { A: 5, B: 1, D: 2 });
graph.addVertex("D", { B: 7, C: 2 });

// Run Dijkstra's algorithm on the graph starting from vertex A
const shortestDistances = dijkstra(graph, "A");

// Output the shortest distances to each vertex
for (let vertex in shortestDistances) {
  console.log(`Shortest distance from A to ${vertex}: ${shortestDistances[vertex]}`);
}
