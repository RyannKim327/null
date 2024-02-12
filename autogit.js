function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const queue = [];

  // Step 2: Initialize distances and previous
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[start] = 0;

  // Step 5: Enqueue start vertex
  queue.push({ vertex: start, distance: 0 });

  while (queue.length) {
    // Step 6a: Dequeue vertex with minimum distance
    queue.sort((a, b) => a.distance - b.distance);
    const { vertex: current, distance } = queue.shift();

    // Step 6b: Break loop if end vertex is reached
    if (current === end) break;

    // Step 6c: Process each neighbor
    for (let neighbor in graph[current]) {
      const totalDistance = distance + graph[current][neighbor];
      
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = current;
        queue.push({ vertex: neighbor, distance: totalDistance });
      }
    }
  }

  // Construct shortest path
  const path = [];
  let vertex = end;

  while (vertex !== null) {
    path.unshift(vertex);
    vertex = previous[vertex];
  }

  return { path, distance: distances[end] };
}
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 1 },
  C: { A: 2, D: 6 },
  D: { B: 1, C: 6 }
};
