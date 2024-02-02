function dijkstra(graph, source, target) {
  // Step 2: Initialize distances and visited arrays
  let distances = {};
  let visited = {};

  // Step 3: Initialize all distances to Infinity and visited to false
  for (let vertex in graph) {
    distances[vertex] = Infinity;
    visited[vertex] = false;
  }

  // Step 4: Set the distance of the source vertex to 0
  distances[source] = 0;

  // Step 5: Loop through all vertices
  while (true) {
    let minDistance = Infinity;
    let nextVertex = null;

    // Step 6: Find the vertex with the minimum distance
    for (let vertex in graph) {
      if (distances[vertex] < minDistance && !visited[vertex]) {
        minDistance = distances[vertex];
        nextVertex = vertex;
      }
    }

    // Step 7: If all vertices have been visited or there is no path, break the loop
    if (nextVertex === null || nextVertex === target) {
      break;
    }

    // Step 8: Mark the current vertex as visited
    visited[nextVertex] = true;

    // Step 9: Update the distances of adjacent vertices
    for (let neighbor in graph[nextVertex]) {
      let distance = graph[nextVertex][neighbor];
      let totalDistance = distances[nextVertex] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
      }
    }
  }

  // Step 10: Build the shortest path from source to target
  let path = [];
  let currentNode = target;

  while (currentNode !== source) {
    path.unshift(currentNode);
    currentNode = graph[currentNode].previous;
  }

  path.unshift(source);

  // Step 11: Return the shortest path and distance
  return {
    path,
    distance: distances[target]
  };
}
let graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2, E: 4 },
  E: { D: 4 }
};

let source = 'A';
let target = 'E';

let result = dijkstra(graph, source, target);

console.log('Shortest path: ' + result.path.join(' -> '));
console.log('Shortest distance: ' + result.distance);
Shortest path: A -> C -> D -> E
Shortest distance: 6
