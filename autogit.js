class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(source, destination) {
    this.nodes[source].push(destination);
    this.nodes[destination].push(source);
  }

  getNeighbors(node) {
    return this.nodes[node];
  }
}
function depthFirstSearch(graph, start, visited = new Set()) {
  visited.add(start);
  console.log(start);

  const neighbors = graph.getNeighbors(start);
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      depthFirstSearch(graph, neighbor, visited);
    }
  }
}
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('D', 'E');
depthFirstSearch(graph, 'A');
