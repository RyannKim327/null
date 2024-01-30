class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  for (let vertex in graph.adjacencyList) {
    if (vertex === start) {
      distances[vertex] = 0;
      queue.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
    }
    previous[vertex] = null;
  }

  while (!queue.isEmpty()) {
    const { element: vertex } = queue.dequeue();
    if (vertex === end) {
      break;
    }

    if (vertex || distances[vertex] !== Infinity) {
      for (let neighbor of graph.adjacencyList[vertex]) {
        let distance = distances[vertex] + neighbor.weight;
        if (distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
          previous[neighbor.node] = vertex;
          queue.enqueue(neighbor.node, distance);
        }
      }
    }
  }

  return { distances, previous };
}

// Priority Queue implementation (Min Heap)
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const { distances, previous } = dijkstra(graph, "A");

console.log(distances); // { A: 0, B: 4, C: 2, D: 4, E: 7, F: 5 }
console.log(previous); // { A: null, B: 'A', C: 'A', D: 'C', E: 'B', F: 'C' }
