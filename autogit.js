class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(name) {
    this.nodes.set(name, []);
  }

  addEdge(startNode, endNode) {
    if (!this.nodes.has(startNode) || !this.nodes.has(endNode)) {
      throw new Error('Nodes not found in graph');
    }

    this.nodes.get(startNode).push(endNode);
    this.nodes.get(endNode).push(startNode);
  }

  biDirectionalSearch(startNode, endNode) {
    let visitedFromStart = new Set([startNode]);
    let visitedFromEnd = new Set([endNode]);
    let queueFromStart = [startNode];
    let queueFromEnd = [endNode];

    while (queueFromStart.length > 0 && queueFromEnd.length > 0) {
      let currentStart = queueFromStart.shift();
      let currentEnd = queueFromEnd.shift();

      if (visitedFromEnd.has(currentStart) || visitedFromStart.has(currentEnd)) {
        return true;
      }

      for (let neighbor of this.nodes.get(currentStart)) {
        if (!visitedFromStart.has(neighbor)) {
          visitedFromStart.add(neighbor);
          queueFromStart.push(neighbor);
        }
      }

      for (let neighbor of this.nodes.get(currentEnd)) {
        if (!visitedFromEnd.has(neighbor)) {
          visitedFromEnd.add(neighbor);
          queueFromEnd.push(neighbor);
        }
      }
    }

    return false;
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

let result = graph.biDirectionalSearch('A', 'D');
console.log(result); // Output: true
