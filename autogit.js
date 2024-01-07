function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function (vertex) {
  this.vertices[vertex] = {};
};

Graph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.vertices[vertex1][vertex2] = weight;
  this.vertices[vertex2][vertex1] = weight;
};

// Example usage:
// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addEdge("A", "B", 5);
function dijkstra(graph, startVertex, targetVertex) {
  const distances = {};
  const visited = {};
  const previous = {};
  const queue = new PriorityQueue();

  // Initialize distances, visited, and previous
  for (let vertex in graph.vertices) {
    distances[vertex] = vertex === startVertex ? 0 : Infinity;
    visited[vertex] = false;
    previous[vertex] = null;
    queue.enqueue(vertex, distances[vertex]);
  }

  // Process vertices until target vertex is reached
  while (!queue.isEmpty()) {
    const currVertex = queue.dequeue().element;

    if (currVertex === targetVertex) {
      // Backtrack to find the shortest path
      const path = [];
      let vertex = targetVertex;

      while (vertex !== null) {
        path.unshift(vertex);
        vertex = previous[vertex];
      }

      return { path, distance: distances[targetVertex] };
    }

    if (!visited[currVertex]) {
      visited[currVertex] = true;

      for (let neighbor in graph.vertices[currVertex]) {
        const distance = graph.vertices[currVertex][neighbor];
        const totalDistance = distances[currVertex] + distance;

        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          previous[neighbor] = currVertex;
          queue.enqueue(neighbor, totalDistance);
        }
      }
    }
  }

  return { path: null, distance: Infinity }; // No path found
}
function PriorityQueue() {
  this.items = [];
}

function QueueElement(element, priority) {
  this.element = element;
  this.priority = priority;
}

PriorityQueue.prototype.enqueue = function (element, priority) {
  const queueElement = new QueueElement(element, priority);
  let added = false;

  for (let i = 0; i < this.items.length; i++) {
    if (queueElement.priority < this.items[i].priority) {
      this.items.splice(i, 0, queueElement);
      added = true;
      break;
    }
  }

  if (!added) {
    this.items.push(queueElement);
  }
};

PriorityQueue.prototype.dequeue = function () {
  if (this.isEmpty()) {
    return null;
  }

  return this.items.shift();
};

PriorityQueue.prototype.isEmpty = function () {
  return this.items.length === 0;
};
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B", 5);
graph.addEdge("B", "C", 2);
graph.addEdge("C", "D", 3);
graph.addEdge("A", "D", 9);

const start = "A";
const target = "D";

const result = dijkstra(graph, start, target);
console.log(result.path); // Output: [ 'A', 'B', 'C', 'D' ]
console.log(result.distance); // Output: 10
