function bellmanFord(graph, source) {
  let distances = {};
  let predecessors = {};

  for (let node in graph) {
    distances[node] = node === source ? 0 : Infinity;
    predecessors[node] = null;
  }

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let u in graph) {
      for (let v in graph[u]) {
        if (distances[u] + graph[u][v] < distances[v]) {
          distances[v] = distances[u] + graph[u][v];
          predecessors[v] = u;
        }
      }
    }
  }

  for (let u in graph) {
    for (let v in graph[u]) {
      if (distances[u] + graph[u][v] < distances[v]) {
        return "Graph contains a negative-weight cycle";
      }
    }
  }

  return { distances, predecessors };
}

// Example graph
let graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 }
};

let sourceNode = 'A';
let result = bellmanFord(graph, sourceNode);
console.log(result);
