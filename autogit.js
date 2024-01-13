class Graph {
  constructor() {
    this.adjList = new Map(); // Use a Map to store the adjacency list
  }
  
  addNode(node) {
    // Add a new node to the graph
    this.adjList.set(node, []);
  }
  
  addEdge(node1, node2) {
    // Add an edge between two nodes
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1); // Add this line if the graph is undirected
  }
  
  getNeighbors(node) {
    // Get the neighbors of a node
    return this.adjList.get(node);
  }
  
  getNodes() {
    // Get all nodes in the graph
    return this.adjList.keys();
  }
}
function dfs(graph, startNode) {
  const visited = new Set(); // Maintain a set to keep track of visited nodes
  
  function dfsRecursive(node) {
    visited.add(node); // Mark the current node as visited
    console.log(node); // Do whatever operation you want with the node data

    const neighbors = graph.getNeighbors(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        dfsRecursive(neighbor); // Recursively call the dfs function for unvisited neighbors
      }
    }
  }
  
  dfsRecursive(startNode);
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'E');
dfs(graph, 'A');
