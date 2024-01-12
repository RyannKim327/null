class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function initializeDistance(graph, source) {
  const distance = [];

  for (let i = 0; i < graph.vertices; i++) {
    distance[i] = Infinity;
  }

  distance[source] = 0;
  return distance;
}
function bellmanFord(graph, source) {
  const distance = initializeDistance(graph, source);

  // Relax edges
  for (let i = 0; i < graph.vertices - 1; i++) {
    for (let j = 0; j < graph.edges.length; j++) {
      const { source, destination, weight } = graph.edges[j];
      if (distance[source] + weight < distance[destination]) {
        distance[destination] = distance[source] + weight;
      }
    }
  }

  // Check for negative weight cycles
  for (let i = 0; i < graph.edges.length; i++) {
    const { source, destination, weight } = graph.edges[i];
    if (distance[source] + weight < distance[destination]) {
      throw new Error('Graph contains negative weight cycle');
    }
  }

  return distance;
}
const graph = new Graph(5);
graph.addEdge(0, 1, -1);
graph.addEdge(0, 2, 4);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 2);
graph.addEdge(3, 2, 5);
graph.addEdge(3, 1, 1);
graph.addEdge(4, 3, -3);
const source = 0;
const shortestPaths = bellmanFord(graph, source);
console.log(shortestPaths);
