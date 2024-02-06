class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addEdge(node1, node2) {
    if (!this.adjacencyList[node1]) {
      this.adjacencyList[node1] = [];
    }
    if (!this.adjacencyList[node2]) {
      this.adjacencyList[node2] = [];
    }
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  getNeighbors(node) {
    return this.adjacencyList[node] || [];
  }
}

function biDirectionalSearch(graph, start, target) {
  const startVisited = new Set();
  const targetVisited = new Set();

  const startQueue = [];
  const targetQueue = [];

  startQueue.push(start);
  targetQueue.push(target);

  startVisited.add(start);
  targetVisited.add(target);

  while (startQueue.length && targetQueue.length) {
    const currentStart = startQueue.shift();
    const currentTarget = targetQueue.shift();

    if (targetVisited.has(currentStart)) {
      // Path found
      return getPath(start, currentStart, target);
    }

    if (startVisited.has(currentTarget)) {
      // Path found
      return getPath(start, currentTarget, target);
    }

    for (const neighbor of graph.getNeighbors(currentStart)) {
      if (!startVisited.has(neighbor)) {
        startQueue.push(neighbor);
        startVisited.add(neighbor);
      }
    }

    for (const neighbor of graph.getNeighbors(currentTarget)) {
      if (!targetVisited.has(neighbor)) {
        targetQueue.push(neighbor);
        targetVisited.add(neighbor);
      }
    }
  }
  
  // No path found
  return null;
}

function getPath(start, current, target) {
  const path = [];
  while (current !== start) {
    path.unshift(current);
    current = path[current];
  }
  path.unshift(start);
  return path;
}

// Example usage:
const graph = new Graph();

// Add edges to the graph
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('F', 'G');
graph.addEdge('G', 'H');
graph.addEdge('H', 'I');
graph.addEdge('I', 'J');

const startNode = 'A';
const targetNode = 'J';

const path = biDirectionalSearch(graph, startNode, targetNode);

console.log(path);
