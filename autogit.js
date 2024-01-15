class Graph {
  constructor(numVertices) {
    this.numVertices = numVertices;
    this.adjList = new Map(); // Using ES6 Map to store adjacency list
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    this.adjList.get(v).push(w); // For undirected graph, add both v -> w and w -> v
  }

  getAdjacencyList() {
    return this.adjList;
  }
}
function DFS(graph, startVertex, visitCallback) {
  // Create a set to keep track of visited vertices
  const visited = new Set();

  // Recursive helper function
  function DFSUtil(vertex) {
    visited.add(vertex);
    visitCallback(vertex);

    const neighbours = graph.get(vertex);
    for (const neighbour of neighbours) {
      if (!visited.has(neighbour)) {
        DFSUtil(neighbour); // Recursive call
      }
    }
  }

  // Call the DFSUtil starting from the startVertex
  DFSUtil(startVertex);
}
// Create a graph
const graph = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
vertices.forEach(vertex => graph.addVertex(vertex));

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

// Define a callback function to handle vertex visit
function visitCallback(vertex) {
  console.log(vertex);
}

// Perform DFS traversal starting from vertex 'A'
DFS(graph.getAdjacencyList(), 'A', visitCallback);
A
B
D
E
F
C
