class Graph {
  constructor() {
    this.vertices = []; // array stores all the vertices
    this.adjList = new Map(); // adjacency list
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []); // initialize the adjacency list with an empty array
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w); // add an edge between vertex v and w
    this.adjList.get(w).push(v); // Add this line for an undirected graph
  }

  getAdjList(v) {
    return this.adjList.get(v);
  }
}
function DFS(graph, startVertex) {
  const visited = new Set(); // track visited vertices

  // Recursive helper function
  function dfsVisit(vertex) {
    visited.add(vertex);
    console.log(vertex); // process the vertex (you can modify this line accordingly)

    const neighbors = graph.getAdjList(vertex);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsVisit(neighbor);
      }
    }
  }

  dfsVisit(startVertex);
}
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');

DFS(graph, 'A');
