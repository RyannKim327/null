class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjList[node1].push({ node: node2, weight });
    this.adjList[node2].push({ node: node1, weight });
  }

  dijkstra(startNode) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = new PriorityQueue();

    // Initialize distances and visited arrays
    this.nodes.forEach(node => {
      distances[node] = Infinity;
      visited[node] = false;
    });

    distances[startNode] = 0;
    queue.enqueue(startNode, 0);

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue().element;
      visited[currentNode] = true;
      this.adjList[currentNode].forEach(neighbor => {
        if (!visited[neighbor.node]) {
          const currentDistance = distances[currentNode] + neighbor.weight;
          if (currentDistance < distances[neighbor.node]) {
            distances[neighbor.node] = currentDistance;
            previous[neighbor.node] = currentNode;
            queue.enqueue(neighbor.node, currentDistance);
          }
        }
      });
    }

    return { distances, previous };
  }

  getPath(startNode, targetNode, previous) {
    const path = [targetNode];
    let currentNode = targetNode;
    while (currentNode !== startNode) {
      currentNode = previous[currentNode];
      path.unshift(currentNode);
    }
    return path;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(element, priority) {
    const newItem = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
      if (newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }
    if (!added) {
      this.items.push(newItem);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const graph = new Graph();

// Create nodes
const nodes = ['A', 'B', 'C', 'D', 'E'];
nodes.forEach(node => graph.addNode(node));

// Create edges
graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'E', 1);
graph.addEdge('D', 'E', 3);

// Compute shortest paths from 'A'
const { distances, previous } = graph.dijkstra('A');

console.log(distances); // Output: { A: 0, B: 4, C: 2, D: 4, E: 3 }

console.log(graph.getPath('A', 'E', previous)); // Output: [ 'A', 'C', 'E' ]
