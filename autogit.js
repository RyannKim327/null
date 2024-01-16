class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(id) {
    if (!this.nodes.has(id)) {
      this.nodes.set(id, []);
    }
  }

  addEdge(src, dest) {
    this.addNode(src);
    this.addNode(dest);
    this.nodes.get(src).push(dest);
    // Uncomment the line below if the graph is undirected
    // this.nodes.get(dest).push(src);
  }

  getNeighbors(id) {
    return this.nodes.get(id);
  }
}
function depthFirstSearch(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start); // Do whatever you want with the visited node

  const neighbors = graph.getNeighbors(start);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      depthFirstSearch(graph, neighbor, visited);
    }
  }
}
// Create a graph
const graph = new Graph();

// Add nodes and edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('D', 'G');
graph.addEdge('F', 'H');

// Call depthFirstSearch
depthFirstSearch(graph, 'A');
