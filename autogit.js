function bellmanFord(graph, source) {
  const dist = {};

  // Step 2: Initialization
  for (let node in graph) {
    dist[node] = Infinity;
  }
  dist[source] = 0;

  // Step 3: Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let edge of graph[node]) {
        const { target, weight } = edge;
        if (dist[node] + weight < dist[target]) {
          dist[target] = dist[node] + weight;
        }
      }
    }
  }

  // Step 4: Check for negative cycles
  for (let node in graph) {
    for (let edge of graph[node]) {
      const { target, weight } = edge;
      if (dist[node] + weight < dist[target]) {
        throw new Error("Graph contains a negative cycle!");
      }
    }
  }

  return dist;
}
const graph = {
  A: [{ target: "B", weight: -1 }, { target: "C", weight: 4 }],
  B: [{ target: "C", weight: 3 }, { target: "D", weight: 2 }, { target: "E", weight: 2 }],
  C: [],
  D: [{ target: "B", weight: 1 }, { target: "C", weight: 5 }],
  E: [{ target: "D", weight: -3 }],
};

const source = "A";
console.log(bellmanFord(graph, source));
