// Define the Graph class
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Add a vertex to the graph
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  // Add an edge between two vertices
  addEdge(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);
  }

  // Get the neighbors of a vertex
  getNeighbors(vertex) {
    return this.adjacencyList.get(vertex);
  }
}

// Perform breadth-first search traversal
function breadthFirstSearch(graph, start) {
  const visited = new Set();
  const queue = [];

  visited.add(start);
  queue.push(start);

  while (queue.length > 0) {
    const currentVertex = queue.shift();
    console.log(currentVertex);

    const neighbors = graph.getNeighbors(currentVertex);
    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example usage
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

breadthFirstSearch(graph, 'A');
