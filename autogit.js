class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  getAdjacencyList() {
    return this.adjList;
  }
}
function depthFirstSearch(graph, start) {
  const visited = new Set();

  function dfs(vertex) {
    visited.add(vertex);

    console.log(vertex); // Or perform any other desired operation

    const neighbors = graph.get(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);
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
graph.addEdge('C', 'E');
depthFirstSearch(graph.getAdjacencyList(), 'A');
