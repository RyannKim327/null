function Graph() {
  this.vertices = {}; // Object to store every vertex with its neighbors and their distances

  // Function to add a new vertex to the graph
  this.addVertex = function (name, edges) {
    this.vertices[name] = edges;
  };
}
function dijkstra(graph, startVertex) {
  const distances = {}; // Object to store the minimum distance from the start vertex
  const visited = {}; // Object to keep track of visited vertices
  const queue = new PriorityQueue(); // Min heap to store vertices based on their distances

  // Initialize distances and set start vertex's distance to 0
  for (const vertex in graph.vertices) {
    distances[vertex] = Infinity;
  }
  distances[startVertex] = 0;

  // Add start vertex to the priority queue
  queue.enqueue(startVertex, distances[startVertex]);

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue().element;

    // Visit the current vertex if it's not visited already
    if (!visited[currentVertex]) {
      visited[currentVertex] = true;

      // Iterate through the neighbors of the current vertex
      for (const neighbor in graph.vertices[currentVertex]) {
        const distance = graph.vertices[currentVertex][neighbor];
        const totalDistance = distances[currentVertex] + distance;

        // Update the minimum distance and enqueue the neighbor if it's a better path
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          queue.enqueue(neighbor, totalDistance);
        }
      }
    }
  }

  return distances;
}
function PriorityQueue() {
  this.elements = [];

  this.enqueue = function (element, priority) {
    const queueElement = { element, priority };

    if (this.isEmpty()) {
      this.elements.push(queueElement);
    } else {
      let added = false;

      for (let i = 0; i < this.elements.length; i++) {
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

  this.dequeue = function () {
    return this.elements.shift();
  };

  this.isEmpty = function () {
    return this.elements.length === 0;
  };
}
const graph = new Graph();

// Add vertices and their distances
graph.addVertex('A', { B: 4, C: 2 });
graph.addVertex('B', { A: 4, D: 2 });
graph.addVertex('C', { A: 2, D: 7 });
graph.addVertex('D', { B: 2, C: 7, E: 3 });
graph.addVertex('E', { D: 3 });

// Call Dijkstra's algorithm function
const startVertex = 'A';
const distances = dijkstra(graph, startVertex);
console.log(distances);
