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

function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const queue = new PriorityQueue();

  for (let vertex in graph.adjacencyList) {
    distances[vertex] = vertex === start ? 0 : Infinity;
    previous[vertex] = null;
    queue.enqueue(vertex, distances[vertex]);
  }

  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue().value;

    if (currentVertex === end) {
      break;
    }

    if (distances[currentVertex] === Infinity) {
      continue;
    }

    for (let neighbor of graph.adjacencyList[currentVertex]) {
      const { node, weight } = neighbor;
      const tentativeDistance = distances[currentVertex] + weight;

      if (tentativeDistance < distances[node]) {
        distances[node] = tentativeDistance;
        previous[node] = currentVertex;
        queue.enqueue(node, distances[node]);
      }
    }
  }

  if (distances[end] === Infinity) {
    return null;
  }

  const shortestPath = [];
  let currentVertex = end;

  while (currentVertex) {
    shortestPath.unshift(currentVertex);
    currentVertex = previous[currentVertex];
  }

  return shortestPath;
}

// Usage example:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "E", 3);
graph.addEdge("D", "E", 1);
graph.addEdge("B", "E", 3);

console.log(dijkstra(graph, "A", "E")); // Output: ["A", "C", "D", "E"]
