class Graph {
  constructor() {
    this.adjList = {};
  }
}
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }
}
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2]) {
      throw new Error('Vertex does not exist in the graph.');
    }
    this.adjList[vertex1].push(vertex2);
  }
}
class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2]) {
      throw new Error('Vertex does not exist in the graph.');
    }
    this.adjList[vertex1].push(vertex2);
  }

  topologicalSort() {
    let visited = {};
    let stack = [];

    for (let vertex in this.adjList) {
      if (!visited[vertex]) {
        this.topologicalSortUtil(vertex, visited, stack);
      }
    }

    return stack.reverse();
  }

  topologicalSortUtil(vertex, visited, stack) {
    visited[vertex] = true;

    for (let adjacentVertex of this.adjList[vertex]) {
      if (!visited[adjacentVertex]) {
        this.topologicalSortUtil(adjacentVertex, visited, stack);
      }
    }

    stack.push(vertex);
  }
}
let graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('C', 'A');
graph.addEdge('C', 'B');

let sorted = graph.topologicalSort();
console.log(sorted); // Output: ['C', 'B', 'A', 'D']
