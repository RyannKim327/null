class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(src, dest) {
    this.adjList.get(src).push(dest);
    this.adjList.get(dest).push(src); // for bidirectional search
  }
}

function biDirectionalSearch(graph, startNode, endNode) {
  let visitedStart = new Set();
  let visitedEnd = new Set();
  let queueStart = [startNode];
  let queueEnd = [endNode];
  let found = false;

  while (queueStart.length && queueEnd.length) {
    let currentStart = queueStart.shift();
    let currentEnd = queueEnd.shift();

    visitedStart.add(currentStart);
    visitedEnd.add(currentEnd);

    if (visitedStart.has(currentEnd) || visitedEnd.has(currentStart)) {
      found = true;
      break;
    }

    for (let neighbor of graph.adjList.get(currentStart) || []) {
      if (!visitedStart.has(neighbor)) {
        queueStart.push(neighbor);
      }
    }

    for (let neighbor of graph.adjList.get(currentEnd) || []) {
      if (!visitedEnd.has(neighbor)) {
        queueEnd.push(neighbor);
      }
    }
  }

  return found;
}

// Example Usage
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

let startNode = 'A';
let endNode = 'D';
let result = biDirectionalSearch(graph, startNode, endNode);
console.log(result ? 'Path found' : 'No path found');
