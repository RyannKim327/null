// Define a Graph class representing the graph structure
class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1].push(node2);
    this.adjList[node2].push(node1);
  }

  getNeighbors(node) {
    return this.adjList[node];
  }
}

// Perform Breadth-First Search on a graph
function breadthFirstSearch(graph, startNode) {
  const visited = new Set(); // Track visited nodes
  const queue = []; // Queue for BFS

  visited.add(startNode);
  queue.push(startNode);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode);

    const neighbors = graph.getNeighbors(currentNode);

    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example usage:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

breadthFirstSearch(graph, 'A');
