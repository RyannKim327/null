// Example graph
const graph = {
  A: { B: 3, C: 1 },
  B: { A: 3, C: 7 },
  C: { A: 1, B: 7 }
};

function dijkstra(graph, source) {
  const distances = {};
  const previous = {};
  const queue = new FastPriorityQueue();

  // Step 3: Initialization
  for (const vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[source] = 0;

  // Step 4: Dijkstra's algorithm
  queue.add(source, 0);

  while (!queue.isEmpty()) {
    const current = queue.poll();

    for (const neighbor in graph[current]) {
      const weight = graph[current][neighbor];
      const distance = distances[current] + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
        queue.add(neighbor, distance);
      }
    }
  }

  // Step 5: Build the shortest path
  const shortestPath = [];
  let current = source;

  while (current !== null) {
    shortestPath.push(current);
    current = previous[current];
  }
  
  return shortestPath.reverse();
}

// Usage:
const shortestPath = dijkstra(graph, 'A');
console.log(shortestPath); // Output: [ 'A', 'C', 'B' ]
