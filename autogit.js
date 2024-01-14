class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(id) {
    this.nodes[id] = [];
  }

  addEdge(source, destination, weight) {
    this.nodes[source].push({ node: destination, weight });
  }
}
function bellmanFord(graph, source) {
  // Step 1: Initialize distance array and set the distance of the source node to 0
  const distance = {};
  Object.keys(graph.nodes).forEach((node) => {
    distance[node] = node === source ? 0 : Infinity;
  });

  // Step 2: Relax edges repeatedly (V - 1) times
  const nodes = Object.keys(graph.nodes);
  for (let i = 1; i <= Object.keys(graph.nodes).length - 1; i++) {
    for (let j = 0; j < nodes.length; j++) {
      const node = nodes[j];
      graph.nodes[node].forEach((neighbor) => {
        if (distance[node] + neighbor.weight < distance[neighbor.node]) {
          distance[neighbor.node] = distance[node] + neighbor.weight;
        }
      });
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    graph.nodes[node].forEach((neighbor) => {
      if (distance[node] + neighbor.weight < distance[neighbor.node]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    });
  }

  return distance;
}
// Example usage
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", -3);
graph.addEdge("B", "D", 2);
graph.addEdge("D", "B", 1);
graph.addEdge("D", "C", 5);
graph.addEdge("C", "E", 2);

const source = "A";
const distances = bellmanFord(graph, source);
console.log(distances); // Output: { A: 0, B: 1, C: -2, D: -1, E: Infinity }
