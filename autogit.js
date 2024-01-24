class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  getNeighbors(vertex) {
    return this.adjList.get(vertex);
  }
}

function biDirectionalSearch(graph, start, goal) {
  const forwardQueue = [start];
  const backwardQueue = [goal];
  const forwardVisited = new Set();
  const backwardVisited = new Set();
  const forwardParent = new Map();
  const backwardParent = new Map();

  while (forwardQueue.length > 0 && backwardQueue.length > 0) {
    const currentForward = forwardQueue.shift();
    const currentBackward = backwardQueue.shift();

    if (backwardVisited.has(currentForward) || forwardVisited.has(currentBackward)) {
      const path = getPath(currentForward, currentBackward, forwardParent, backwardParent);
      return path;
    }

    forwardVisited.add(currentForward);
    backwardVisited.add(currentBackward);

    const forwardNeighbors = graph.getNeighbors(currentForward);
    const backwardNeighbors = graph.getNeighbors(currentBackward);

    forwardNeighbors.forEach((neighbor) => {
      if (!forwardVisited.has(neighbor)) {
        forwardQueue.push(neighbor);
        forwardParent.set(neighbor, currentForward);
      }
    });

    backwardNeighbors.forEach((neighbor) => {
      if (!backwardVisited.has(neighbor)) {
        backwardQueue.push(neighbor);
        backwardParent.set(neighbor, currentBackward);
      }
    });
  }

  return null;
}

function getPath(start, goal, forwardParent, backwardParent) {
  const path = [];
  let current = start;
  while (current) {
    path.push(current);
    current = forwardParent.get(current);
  }
  path.reverse();
  current = backwardParent.get(goal);
  while (current) {
    path.push(current);
    current = backwardParent.get(current);
  }
  return path;
}

// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

const startNode = 'A';
const goalNode = 'E';

const path = biDirectionalSearch(graph, startNode, goalNode);
console.log(path);
