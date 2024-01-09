class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
  }

  getNeighbors(node) {
    return this.adjList.get(node);
  }
}
function dfs(graph, startNode) {
  let visited = new Set();

  function dfsVisit(node) {
    visited.add(node);
    console.log(node); // Perform any required operations

    let neighbors = graph.getNeighbors(node);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsVisit(neighbor);
      }
    }
  }

  dfsVisit(startNode);
}
let graph = new Graph();

// Add nodes
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

// Add edges
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

dfs(graph, 1); // Start the depth-first search from node 1
