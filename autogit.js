// Sample Graph Class
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
}

// Priority Queue Class
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(node, priority) {
    this.queue.push({ node, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift().node;
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

// Dijkstra's Algorithm Implementation
function dijkstra(graph, startNode, targetNode) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Initialize distances and previous nodes
  for (let node in graph.nodes) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;

  // Enqueue the startNode with priority 0
  queue.enqueue(startNode, 0);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    if (currentNode === targetNode) {
      // Target node reached, backtrack to find the shortest path
      const path = [];
      let node = targetNode;

      while (node !== null) {
        path.unshift(node);
        node = previous[node];
      }

      return { path, distance: distances[targetNode] };
    }

    // Visit neighbors
    if (!visited[currentNode]) {
      visited[currentNode] = true;
      for (let neighbor of graph.nodes[currentNode]) {
        const { node, weight } = neighbor;

        const distance = distances[currentNode] + weight;

        if (distance < distances[node]) {
          // Update distance and previous node for the neighbor
          distances[node] = distance;
          previous[node] = currentNode;
          queue.enqueue(node, distance);
        }
      }
    }
  }

  return null; // Target node not reachable
}

// Example usage:
const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const result = dijkstra(graph, "A", "E");
console.log(result);
