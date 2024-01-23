class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
  }

  getVertices() {
    return Array.from(this.adjList.keys());
  }

  getEdges() {
    const edges = [];
    for (let [vertex, neighbors] of this.adjList) {
      for (let neighbor of neighbors) {
        edges.push([vertex, neighbor]);
      }
    }
    return edges;
  }
}
function topologicalSort(graph) {
  const visited = new Set();
  const stack = [];

  function dfs(v) {
    visited.add(v);
    const neighbors = graph.adjList.get(v);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(v);
  }

  const vertices = graph.getVertices();
  for (let vertex of vertices) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack.reverse();
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('B', 'E');

const sortedOrder = topologicalSort(graph);
console.log(sortedOrder); // Output: ['B', 'A', 'C', 'D', 'E']
