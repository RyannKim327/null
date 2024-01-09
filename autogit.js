class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }
}
function initialize(graph, source) {
  const distance = [];
  const predecessor = [];

  for (let i = 0; i < graph.V; i++) {
    distance[i] = Infinity;
    predecessor[i] = null;
  }

  distance[source] = 0;

  return { distance, predecessor };
}
function bellmanFord(graph, source) {
  const { distance, predecessor } = initialize(graph, source);

  // Relax all edges V - 1 times
  for (let i = 0; i < graph.V - 1; i++) {
    for (const { source, destination, weight } of graph.edges) {
      if (distance[source] + weight < distance[destination]) {
        distance[destination] = distance[source] + weight;
        predecessor[destination] = source;
      }
    }
  }

  // Check for negative-weight cycles
  for (const { source, destination, weight } of graph.edges) {
    if (distance[source] + weight < distance[destination]) {
      throw new Error("Graph contains a negative-weight cycle");
    }
  }

  return { distance, predecessor };
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
const { distance, predecessor } = bellmanFord(graph, source);

console.log('Vertex\tDistance\tPredecessor');
for (let i = 0; i < graph.V; i++) {
  console.log(`${i}\t${distance[i]}\t\t${predecessor[i]}`);
}
