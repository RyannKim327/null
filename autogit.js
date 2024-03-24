function bellmanFord(graph, source) {
  let distances = {};
  let vertices = Object.keys(graph);

  // Step 1: Initialize distances to all vertices as Infinity
  for (let vertex of vertices) {
    distances[vertex] = Infinity;
  }
  distances[source] = 0;

  // Step 2: Relax all edges |V| - 1 times
  for (let i = 0; i < vertices.length - 1; i++) {
    for (let vertex of vertices) {
      for (let neighbor in graph[vertex]) {
        if (distances[vertex] + graph[vertex][neighbor] < distances[neighbor]) {
          distances[neighbor] = distances[vertex] + graph[vertex][neighbor];
        }
      }
    }
  }

  // Step 3: Check for negative cycles
  for (let vertex of vertices) {
    for (let neighbor in graph[vertex]) {
      if (distances[vertex] + graph[vertex][neighbor] < distances[neighbor]) {
        console.error("Graph contains a negative-weight cycle");
        return;
      }
    }
  }

  return distances;
}

// Example graph
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 }
};

const source = 'A';
const shortestDistances = bellmanFord(graph, source);
console.log(shortestDistances);
