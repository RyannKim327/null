function dijkstra(graph, source) {
  const distances = {};
  const previousNodes = {};
  const priorityQueue = new PriorityQueue();

  // Initialize distances and previous nodes
  for (const node in graph) {
    distances[node] = Infinity;
    previousNodes[node] = null;
  }
  distances[source] = 0;

  // Enqueue source node with priority 0
  priorityQueue.enqueue(source, 0);

  // Run Dijkstra's algorithm
  while (!priorityQueue.isEmpty()) {
    const { element: current } = priorityQueue.dequeue();

    for (const neighbor in graph[current]) {
      const distance = graph[current][neighbor];
      const tentativeDistance = distances[current] + distance;

      if (tentativeDistance < distances[neighbor]) {
        distances[neighbor] = tentativeDistance;
        previousNodes[neighbor] = current;
        priorityQueue.enqueue(neighbor, tentativeDistance);
      }
    }
  }

  // Build and return the shortest path
  const shortestPath = [];
  let current = target;
  while (current !== null) {
    shortestPath.unshift(current);
    current = previousNodes[current];
  }

  return shortestPath;
}

// Example usage
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {}
};

const source = 'A';
const target = 'F';

console.log(dijkstra(graph, source)); // Output: [ 'A', 'C', 'E', 'F' ]
