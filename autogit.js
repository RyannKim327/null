class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2) {
    this.edges[node1].push(node2);
    this.edges[node2].push(node1);
  }

  getNeighbors(node) {
    return this.edges[node];
  }
}

function biDirectionalSearch(graph, start, goal) {
  let startQueue = [start];
  let goalQueue = [goal];
  let startVisited = new Set([start]);
  let goalVisited = new Set([goal]);

  while (startQueue.length > 0 && goalQueue.length > 0) {
    let startNode = startQueue.shift();
    let goalNode = goalQueue.shift();

    if (startVisited.has(goalNode) || goalVisited.has(startNode)) {
      return true; // Path found
    }

    let startNeighbors = graph.getNeighbors(startNode);
    let goalNeighbors = graph.getNeighbors(goalNode);

    for (let neighbor of startNeighbors) {
      if (!startVisited.has(neighbor)) {
        startVisited.add(neighbor);
        startQueue.push(neighbor);
      }
    }

    for (let neighbor of goalNeighbors) {
      if (!goalVisited.has(neighbor)) {
        goalVisited.add(neighbor);
        goalQueue.push(neighbor);
      }
    }
  }

  return false; // Path not found
}

// Usage
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

const start = 'A';
const goal = 'C';

const result = biDirectionalSearch(graph, start, goal);
console.log(result ? 'Path found' : 'Path not found');
