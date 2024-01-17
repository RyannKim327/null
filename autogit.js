class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    if (!this.adjList.has(node1) || !this.adjList.has(node2)) {
      throw new Error("Invalid node");
    }
    this.adjList.get(node1).push(node2);
  }

  getNeighbors(node) {
    if (!this.adjList.has(node)) {
      throw new Error("Invalid node");
    }
    return this.adjList.get(node);
  }

  getNodes() {
    return Array.from(this.adjList.keys());
  }
}
function topologicalSort(graph) {
  const visited = new Set();
  const result = [];

  function helper(node) {
    visited.add(node);

    const neighbors = graph.getNeighbors(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        helper(neighbor);
      }
    }

    result.unshift(node);
  }

  const nodes = graph.getNodes();
  for (const node of nodes) {
    if (!visited.has(node)) {
      helper(node);
    }
  }

  return result;
}
const graph = new Graph();

// Add nodes
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

// Add edges
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("D", "E");
const sorted = topologicalSort(graph);
console.log(sorted);
