class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    this.vertices[vertex] = {};
  }

  addEdge(source, target, weight) {
    this.vertices[source][target] = weight;
    this.vertices[target][source] = weight;
  }
}

function dijkstra(graph, source) {
  const distances = {};
  const previous = {};
  const unvisited = new Set();

  Object.keys(graph.vertices).forEach((vertex) => {
    distances[vertex] = Infinity;
    previous[vertex] = null;
    unvisited.add(vertex);
  });

  distances[source] = 0;

  while (unvisited.size > 0) {
    let currentVertex = null;
    unvisited.forEach((vertex) => {
      if (!currentVertex || distances[vertex] < distances[currentVertex]) {
        currentVertex = vertex;
      }
    });

    unvisited.delete(currentVertex);

    Object.keys(graph.vertices[currentVertex]).forEach((neighbor) => {
      const weight = graph.vertices[currentVertex][neighbor];
      const distance = distances[currentVertex] + weight;
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentVertex;
      }
    });
  }

  return { distances, previous };
}

function shortestPath(previous, target) {
  const path = [target];
  let vertex = target;
  while (previous[vertex]) {
    vertex = previous[vertex];
    path.unshift(vertex);
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

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('D', 'E', 3);

const { distances, previous } = dijkstra(graph, 'A');

console.log('Distances:', distances);
console.log('Shortest Path:', shortestPath(previous, 'E'));
