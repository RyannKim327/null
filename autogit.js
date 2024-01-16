function dijkstra(graph, source, target) {
  // Step 2: Initialize the algorithm
  let distances = {};
  let visited = {};
  let previous = {};
  let queue = new PriorityQueue();

  // Step 3: Initialize the data structures
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
    previous[vertex] = null;
  }

  distances[source] = 0;

  // Step 4: Enqueue the source vertex with a priority of 0
  queue.enqueue(source, 0);

  // Step 5: Main algorithm loop
  while (!queue.isEmpty()) {
    // Dequeue the vertex with the minimum priority
    let currentVertex = queue.dequeue().element;

    // If the current vertex is the target, we're done
    if (currentVertex === target) {
      break;
    }

    // Skip this iteration if the vertex has been visited already
    if (visited[currentVertex]) {
      continue;
    }

    visited[currentVertex] = true;

    // Step 6: Update distances to adjacent vertices
    for (let neighbor in graph[currentVertex]) {
      let distance = distances[currentVertex] + graph[currentVertex][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentVertex;
        queue.enqueue(neighbor, distance);
      }
    }
  }

  // Step 7: Build the shortest path
  let path = [];
  let currentVertex = target;

  while (currentVertex !== null) {
    path.unshift(currentVertex);
    currentVertex = previous[currentVertex];
  }

  // Return the shortest path distance and path
  return [distances[target], path];
}
