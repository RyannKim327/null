function Graph() {
  this.vertices = {};
}

Graph.prototype.addVertex = function(name, edges) {
  this.vertices[name] = edges;
};

Graph.prototype.addEdge = function(vertex, edge, weight) {
  this.vertices[vertex][edge] = weight;
};
function dijkstra(graph, startVertex) {
  var distances = {};
  var visited = {};
  var queue = new PriorityQueue();

  // Initialize distances and visited status for all vertices
  for (var vertex in graph.vertices) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }

  // Set the distance to the start vertex as 0
  distances[startVertex] = 0;

  // Enqueue the start vertex with priority 0
  queue.enqueue(startVertex, 0);

  while (!queue.isEmpty()) {
    var currentVertex = queue.dequeue().element;
    visited[currentVertex] = true;

    var neighbors = graph.vertices[currentVertex];

    for (var neighbor in neighbors) {
      var distance = distances[currentVertex] + neighbors[neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }

      if (!visited[neighbor]) {
        queue.enqueue(neighbor, distances[neighbor]);
        visited[neighbor] = true;
      }
    }
  }

  return distances;
}
function PriorityQueue() {
  this.elements = [];
}

PriorityQueue.prototype.enqueue = function(element, priority) {
  var queueElement = { element: element, priority: priority };

  if (this.isEmpty()) {
    this.elements.push(queueElement);
  } else {
    var added = false;
    for (var i = 0; i < this.elements.length; i++) {
      if (queueElement.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(queueElement);
    }
  }
};

PriorityQueue.prototype.dequeue = function() {
  return this.elements.shift();
};

PriorityQueue.prototype.isEmpty = function() {
  return this.elements.length === 0;
};
var graph = new Graph();

graph.addVertex('A', { B: 4, C: 2 });
graph.addVertex('B', { A: 4, C: 1, D: 5 });
graph.addVertex('C', { A: 2, B: 1, D: 8 });
graph.addVertex('D', { B: 5, C: 8, E: 2 });
graph.addVertex('E', { D: 2 });

var startVertex = 'A';
var shortestPaths = dijkstra(graph, startVertex);

console.log(shortestPaths);
