class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2);
    this.nodes.get(node2).push(node1);
  }

  biDirectionalSearch(startNode, targetNode) {
    let visitedFromStart = new Set();
    let visitedFromTarget = new Set();
    let queueStart = [startNode];
    let queueTarget = [targetNode];

    visitedFromStart.add(startNode);
    visitedFromTarget.add(targetNode);

    while (queueStart.length > 0 && queueTarget.length > 0) {
      let currentStart = queueStart.shift();
      let currentTarget = queueTarget.shift();

      if (visitedFromTarget.has(currentStart)) {
        console.log("Path found");
        return;
      }

      if (visitedFromStart.has(currentTarget)) {
        console.log("Path found");
        return;
      }

      for (let neighbor of this.nodes.get(currentStart)) {
        if (!visitedFromStart.has(neighbor)) {
          visitedFromStart.add(neighbor);
          queueStart.push(neighbor);
        }
      }

      for (let neighbor of this.nodes.get(currentTarget)) {
        if (!visitedFromTarget.has(neighbor)) {
          visitedFromTarget.add(neighbor);
          queueTarget.push(neighbor);
        }
      }
    }

    console.log("Path not found");
  }
}

// Example usage
const graph = new Graph();
graph.addNode(0);
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);

graph.biDirectionalSearch(0, 4);
