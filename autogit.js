class Graph {
  constructor() {
    this.graph = {};
  }

  addEdge(src, dest) {
    if (!this.graph[src]) {
      this.graph[src] = [];
    }
    this.graph[src].push(dest);
  }

  breadthFirstSearch(startingNode) {
    let visited = new Set();
    let queue = [];

    visited.add(startingNode);
    queue.push(startingNode);

    while (queue.length > 0) {
      let currentNode = queue.shift();
      console.log(currentNode);

      let neighbors = this.graph[currentNode];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

// Example Usage:

let graph = new Graph();
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(3, 7);
graph.breadthFirstSearch(1);
