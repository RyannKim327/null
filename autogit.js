class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    if (this.adjacencyList.has(source) && this.adjacencyList.has(destination)) {
      this.adjacencyList.get(source).push(destination);
      this.adjacencyList.get(destination).push(source);
    }
  }

  getAdjacencyList() {
    return this.adjacencyList;
  }
}
function dfs(graph, startVertex) {
  const visited = new Set();

  function explore(vertex) {
    visited.add(vertex);

    console.log(vertex); // Do something with the visited vertex (e.g., display it)

    const neighbors = graph.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        explore(neighbor);
      }
    }
  }

  explore(startVertex);
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');

dfs(graph.getAdjacencyList(), 'A');
