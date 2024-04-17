class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1); // for bidirectional search
  }

  biDirectionalSearch(startNode, targetNode) {
    let visitedFromStart = new Set();
    let visitedFromEnd = new Set();
    let queueStart = [startNode];
    let queueEnd = [targetNode];

    visitedFromStart.add(startNode);
    visitedFromEnd.add(targetNode);

    while (queueStart.length > 0 && queueEnd.length > 0) {
      // Forward BFS from start node
      let currentStart = queueStart.shift();
      for (let neighbor of this.adjList.get(currentStart)) {
        if (!visitedFromStart.has(neighbor)) {
          visitedFromStart.add(neighbor);
          queueStart.push(neighbor);
        }
        if (visitedFromEnd.has(neighbor)) {
          return true; // Path found
        }
      }

      // Backward BFS from end node
      let currentEnd = queueEnd.shift();
      for (let neighbor of this.adjList.get(currentEnd)) {
        if (!visitedFromEnd.has(neighbor)) {
          visitedFromEnd.add(neighbor);
          queueEnd.push(neighbor);
        }
        if (visitedFromStart.has(neighbor)) {
          return true; // Path found
        }
      }
    }

    return false; // No path found
  }
}

// Example usage
let graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');

let pathExists = graph.biDirectionalSearch('A', 'D');
console.log(pathExists ? 'Path exists' : 'No path exists');
