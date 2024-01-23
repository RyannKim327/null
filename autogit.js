class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    }
  }

  addEdge(source, target) {
    if (this.vertices.has(source) && this.vertices.has(target)) {
      const edges = this.vertices.get(source);
      edges.push(target);
    } else {
      throw new Error("Invalid vertex!");
    }
  }

  getNeighbors(vertex) {
    return this.vertices.get(vertex) || [];
  }

  getVertices() {
    return this.vertices.keys();
  }
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function visit(vertex) {
    if (visited.has(vertex)) {
      return;
    }

    visited.add(vertex);

    const neighbors = graph.getNeighbors(vertex);
    for (const neighbor of neighbors) {
      visit(neighbor);
    }

    stack.push(vertex);
  }

  const vertices = graph.getVertices();
  for (const vertex of vertices) {
    visit(vertex);
  }

  return stack.reverse();
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder);  // Output: ["A", "C", "B", "D", "E"]
