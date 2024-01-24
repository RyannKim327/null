class Graph {
  constructor() {
    this.vertices = [];
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  breadthFirstSearch(startVertex, targetVertex) {
    let visited = {};
    let queue = [];

    visited[startVertex] = true;
    queue.push(startVertex);

    while (queue.length) {
      let currentVertex = queue.shift();
      
      if (currentVertex === targetVertex) {
        return true; // Target found
      }
      
      for (let neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
    
    return false; // Target not found
  }
}

// Usage:
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");

console.log(graph.breadthFirstSearch("A", "E")); // true
console.log(graph.breadthFirstSearch("A", "D")); // true
console.log(graph.breadthFirstSearch("B", "C")); // false
