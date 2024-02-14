class Graph {
  constructor(nodes) {
    this.nodes = nodes;
    this.edges = [];
  }

  addEdge(source, destination, weight) {
    this.edges.push({ source, destination, weight });
  }

  getNodeCount() {
    return this.nodes.length;
  }

  getEdges() {
    return this.edges;
  }
}
function bellmanFord(graph, source) {
  const distances = new Array(graph.getNodeCount()).fill(Number.MAX_VALUE);
  const prev = new Array(graph.getNodeCount()).fill(null);

  distances[source] = 0;

  const edges = graph.getEdges();
  for (let i = 0; i < graph.getNodeCount() - 1; i++) {
    edges.forEach((edge) => {
      const { source, destination, weight } = edge;
      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
        prev[destination] = source;
      }
    });
  }

  return { distances, prev };
}
const graph = new Graph([0, 1, 2, 3, 4, 5]);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 2);
graph.addEdge(1, 4, 3);
graph.addEdge(2, 1, 1);
graph.addEdge(2, 3, 4);
graph.addEdge(2, 4, 5);
graph.addEdge(4, 3, -5);

const sourceNode = 0;
const { distances, prev } = bellmanFord(graph, sourceNode);

console.log("Shortest distances from node", sourceNode);
for (let i = 0; i < graph.getNodeCount(); i++) {
  console.log(`To node ${i}: ${distances[i]}`);
}
