class Graph {
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  breadthFirstSearch(startingNode) {
    const visited = new Set();
    const queue = [];

    visited.add(startingNode);
    queue.push(startingNode);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex); // Process the node (in this case, print its value)

      const neighbors = this.adjList.get(currentVertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

// Example usage:
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

graph.breadthFirstSearch('A');
