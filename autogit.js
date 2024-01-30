class Graph {
  constructor() {
    this.vertices = [];
    this.edges = {};
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = {};
  }

  addEdge(source, destination, weight) {
    this.edges[source][destination] = weight;
    this.edges[destination][source] = weight; // If the graph is undirected
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(vertex, distance) {
    this.queue.push({ vertex, distance });
    this.sort();
  }

  dequeue() {
    return this.queue.shift();
  }

  sort() {
    this.queue.sort((a, b) => a.distance - b.distance);
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function dijkstra(graph, source) {
  const shortestDistances = {};
  const previousVertices = {};
  const queue = new PriorityQueue();

  graph.vertices.forEach((vertex) => {
    shortestDistances[vertex] = Infinity;
    previousVertices[vertex] = null;
  });

  shortestDistances[source] = 0;
  queue.enqueue(source, 0);

  while (!queue.isEmpty()) {
    const { vertex } = queue.dequeue();

    Object.keys(graph.edges[vertex]).forEach((neighbor) => {
      const distance = shortestDistances[vertex] + graph.edges[vertex][neighbor];
      if (distance < shortestDistances[neighbor]) {
        shortestDistances[neighbor] = distance;
        previousVertices[neighbor] = vertex;
        queue.enqueue(neighbor, distance);
      }
    });
  }

  return { shortestDistances, previousVertices };
}

function getPath(previousVertices, destination) {
  const path = [];
  let vertex = destination;
  while (vertex !== null) {
    path.unshift(vertex);
    vertex = previousVertices[vertex];
  }
  return path;
}

// Example usage
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addEdge('A', 'B', 5);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 6);
graph.addEdge('C', 'D', 3);

const { shortestDistances, previousVertices } = dijkstra(graph, 'A');
console.log('Shortest distances:', shortestDistances);
console.log('Shortest path from A to D:', getPath(previousVertices, 'D'));
