class Node {
  constructor(label) {
    this.label = label;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(label) {
    this.nodes[label] = new Node(label);
  }

  addEdge(source, destination) {
    const sourceNode = this.nodes[source];
    const destinationNode = this.nodes[destination];
    sourceNode.neighbors.push(destinationNode);
    // If your graph is undirected, you may also add the following line
    // destinationNode.neighbors.push(sourceNode);
  }
}
function depthFirstSearch(graph, startNode) {
  const visited = {};

  function dfs(node) {
    if (!node) return;

    visited[node.label] = true;
    console.log(node.label); // Process the visited node

    for (const neighbor of node.neighbors) {
      if (!visited[neighbor.label]) {
        dfs(neighbor); // Recursively visit neighbors
      }
    }
  }

  dfs(graph.nodes[startNode]);
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
graph.addEdge('C', 'E');
depthFirstSearch(graph, 'A');
