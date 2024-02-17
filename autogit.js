function bellmanFord(graph, source) {
  let distance = {};

  // Step 1: Initialize distances from the source to all other vertices as Infinity
  for (let node in graph) {
    distance[node] = Infinity;
  }

  distance[source] = 0;

  // Step 2: Relax all edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      if (distance[node] === Infinity) continue;

      for (let neighbor in graph[node]) {
        let newDist = distance[node] + graph[node][neighbor];
        if (newDist < distance[neighbor]) {
          distance[neighbor] = newDist;
        }
      }
    }
  }

  // Step 3: Check for negative cycles
  for (let node in graph) {
    for (let neighbor in graph[node]) {
      let newDist = distance[node] + graph[node][neighbor];
      if (newDist < distance[neighbor]) {
        console.log("Negative cycle detected! Bellman-Ford cannot be used.");
        return;
      }
    }
  }

  return distance;
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
