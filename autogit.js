function Graph() {
  this.vertices = {}; // object to store vertices and their edges
}

Graph.prototype.addVertex = function (name, edges) {
  this.vertices[name] = edges;
};
function dijkstra(graph, startVertex) {
  let distances = {};
  let visited = {};
  let previous = {};
  let queue = new PriorityQueue();

  // Set initial distances and add start vertex to the queue
  for (let vertex in graph.vertices) {
    if (vertex === startVertex) {
      distances[vertex] = 0;
      queue.enqueue(0, vertex);
    } else {
      distances[vertex] = Infinity;
      queue.enqueue(Infinity, vertex);
    }
    previous[vertex] = null;
  }

  // Visit each vertex
  while (!queue.isEmpty()) {
    let minVertex = queue.dequeue().data;
    visited[minVertex] = true;

    // Update distances to adjacent vertices
    for (let neighbor in graph.vertices[minVertex]) {
      let edge = graph.vertices[minVertex][neighbor];
      let distance = distances[minVertex] + edge;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = minVertex;

        if (!visited[neighbor]) {
          queue.enqueue(distance, neighbor);
        }
      }
    }
  }

  return { distances, previous };
}
function reconstructPath(previous, startVertex, endVertex) {
  let path = [];
  let currentVertex = endVertex;

  while (currentVertex !== startVertex) {
    path.unshift(currentVertex);
    currentVertex = previous[currentVertex];
  }

  path.unshift(startVertex);
  return path;
}
class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(priority, data) {
    this.queue.push({ priority, data });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
let graph = new Graph();

graph.addVertex("A", { B: 3, C: 2 });
graph.addVertex("B", { A: 3, C: 1, D: 5 });
graph.addVertex("C", { A: 2, B: 1, D: 1 });
graph.addVertex("D", { B: 5, C: 1, E: 2 });
graph.addVertex("E", { D: 2 });
let startVertex = "A";
let endVertex = "E";

let { distances, previous } = dijkstra(graph, startVertex);
let shortestPath = reconstructPath(previous, startVertex, endVertex);

console.log("Distances:", distances);
console.log("Shortest Path:", shortestPath);
