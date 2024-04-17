class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = [];
  }
  
  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }
}

function biDirectionalSearch(graph, start, goal) {
  let visitedFromStart = new Set();
  let visitedFromGoal = new Set();
  let queueStart = [start];
  let queueGoal = [goal];
  
  while (queueStart.length > 0 && queueGoal.length > 0) {
    let currVertexStart = queueStart.shift();
    let currVertexGoal = queueGoal.shift();
    
    visitedFromStart.add(currVertexStart);
    visitedFromGoal.add(currVertexGoal);
    
    if (visitedFromGoal.has(currVertexStart) || visitedFromStart.has(currVertexGoal)) {
      // Path found
      return true;
    }
    
    for (let neighbor of graph.vertices[currVertexStart]) {
      if (!visitedFromStart.has(neighbor)) {
        queueStart.push(neighbor);
      }
    }
    
    for (let neighbor of graph.vertices[currVertexGoal]) {
      if (!visitedFromGoal.has(neighbor)) {
        queueGoal.push(neighbor);
      }
    }
  }
  
  return false;
}

// Example usage
let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

let start = 'A';
let goal = 'D';
let pathExists = biDirectionalSearch(graph, start, goal);
console.log(pathExists); // Output should be true
