class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      const connections1 = this.adjacencyList.get(vertex1);
      const connections2 = this.adjacencyList.get(vertex2);

      if (!connections1.includes(vertex2)) {
        connections1.push(vertex2);
      }

      if (!connections2.includes(vertex1)) {
        connections2.push(vertex1);
      }
    }
  }

  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }
    return [];
  }
}
function bfs(graph, startVertex) {
  const visited = new Set();
  const queue = [];

  visited.add(startVertex);
  queue.push(startVertex);

  while (queue.length > 0) {
    const vertex = queue.shift();
    // Process the vertex, e.g., print it to console
    console.log(vertex);

    const neighbors = graph.getNeighbors(vertex);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

bfs(graph, 'A');
