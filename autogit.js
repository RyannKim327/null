function Graph() {
  this.vertices = {};
}

Graph.prototype.addEdge = function (source, destination) {
  if (!this.vertices.hasOwnProperty(source)) {
    this.vertices[source] = [];
  }
  this.vertices[source].push(destination);
};

Graph.prototype.getNeighbors = function (vertex) {
  return this.vertices[vertex] || [];
};
function bidirectionalSearch(graph, start, target) {
  // Create two visited arrays to keep track of visited nodes from both the start and target ends
  const visitedStart = {};
  const visitedTarget = {};

  // Create two queues to store nodes from both the start and target ends
  const queueStart = [];
  const queueTarget = [];

  // Add the start and target nodes to their respective queues
  queueStart.push(start);
  queueTarget.push(target);

  // Mark the start and target nodes as visited in their respective visited arrays
  visitedStart[start] = true;
  visitedTarget[target] = true;

  // Perform bidirectional BFS until both queues are empty
  while (queueStart.length && queueTarget.length) {
    // Process nodes from the start end
    const nodeStart = queueStart.shift();
    const neighborsStart = graph.getNeighbors(nodeStart);

    for (const neighbor of neighborsStart) {
      // If the neighbor is visited from the target end, then we have found a path
      if (visitedTarget[neighbor]) {
        return "Path found!";
      }

      // If the neighbor is not visited from the start end, mark it as visited and add it to the queue
      if (!visitedStart[neighbor]) {
        visitedStart[neighbor] = true;
        queueStart.push(neighbor);
      }
    }

    // Process nodes from the target end
    const nodeTarget = queueTarget.shift();
    const neighborsTarget = graph.getNeighbors(nodeTarget);

    for (const neighbor of neighborsTarget) {
      // If the neighbor is visited from the start end, then we have found a path
      if (visitedStart[neighbor]) {
        return "Path found!";
      }

      // If the neighbor is not visited from the target end, mark it as visited and add it to the queue
      if (!visitedTarget[neighbor]) {
        visitedTarget[neighbor] = true;
        queueTarget.push(neighbor);
      }
    }
  }

  // If both queues are empty and no path is found, return "No path found"
  return "No path found!";
}
const graph = new Graph();

// Add edges to the graph
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

// Call bidirectionalSearch function with start and target nodes
const result = bidirectionalSearch(graph, "A", "F");
console.log(result);
