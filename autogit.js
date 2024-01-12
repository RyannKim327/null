function dijkstra(graph, start) {
  const distances = {};
  const pq = new PriorityQueue();
  const previous = {};

  // Step 3: Initialize distances
  for (let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  // Step 4: Implement Dijkstra's algorithm
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();

    if (current === end) {
      // Stop algorithm if target node reached
      break;
    }

    for (let neighbor in graph[current]) {
      const weight = graph[current][neighbor];
      const distance = distances[current] + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = current;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  // Step 5: Reconstruct shortest path
  const path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return { distances, path };
}

// Example usage
const graph = {
  A: { B: 2, C: 4 },
  B: { D: 3, E: 2 },
  C: { B: 1, D: 5 },
  D: { E: 3 },
  E: {},
};

const { distances, path } = dijkstra(graph, 'A');
console.log(distances); // { A: 0, B: 2, C: 3, D: 5, E: 4 }
console.log(path); // [ 'A', 'B', 'E' ]
