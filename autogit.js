class Graph {
  constructor() {
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.nodes[node1].push({ node: node2, weight: weight });
    this.nodes[node2].push({ node: node1, weight: weight });
  }

  dijkstra(startNode) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();

    // Initialize distances and previous
    for (let node in this.nodes) {
      if (node === startNode) {
        distances[node] = 0;
        queue.enqueue(node, 0);
      } else {
        distances[node] = Infinity;
      }
      previous[node] = null;
    }

    while (!queue.isEmpty()) {
      const currentNode = queue.dequeue().element;

      this.nodes[currentNode].forEach(neighbor => {
        const { node, weight } = neighbor;
        const tentativeDistance = distances[currentNode] + weight;

        if (tentativeDistance < distances[node]) {
          distances[node] = tentativeDistance;
          previous[node] = currentNode;
          queue.enqueue(node, tentativeDistance);
        }
      });
    }

    return { distances, previous };
  }

  shortestPath(startNode, endNode) {
    const { distances, previous } = this.dijkstra(startNode);

    const path = [];
    let currentNode = endNode;
    while (currentNode) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    return path;
  }
}

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    const item = { element, priority };
    if (this.isEmpty()) {
      this.elements.push(item);
    } else {
      let added = false;
      for (let i = 0; i < this.elements.length; i++) {
        if (item.priority < this.elements[i].priority) {
          this.elements.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.elements.push(item);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

// Example usage:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'B', 1);
graph.addEdge('D', 'E', 3);

console.log(graph.shortestPath('A', 'E')); // Output: [ 'A', 'C', 'B', 'E' ]
