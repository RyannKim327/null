class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(source, destination) {
    if (!this.vertices.has(source) || !this.vertices.has(destination)) {
      throw new Error('Invalid vertex');
    }
    this.vertices.get(source).push(destination);
  }

  getAdjacentVertices(vertex) {
    return this.vertices.get(vertex);
  }

  getVertices() {
    return Array.from(this.vertices.keys());
  }
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function explore(vertex) {
    visited.add(vertex);

    const neighbors = graph.getAdjacentVertices(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }

    stack.unshift(vertex);
  }

  for (const vertex of graph.getVertices()) {
    if (!visited.has(vertex)) {
      explore(vertex);
    }
  }

  return stack;
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'C');

const result = topologicalSort(graph);
console.log(result);  // Output: ['A', 'B', 'E', 'D', 'C']
