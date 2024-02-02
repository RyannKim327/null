function bellmanFord(graph, source) {
  const distance = {};
  const predecessor = {};

  for (let node in graph) {
    distance[node] = Infinity;
    predecessor[node] = null;
  }
  distance[source] = 0;
}
function bellmanFord(graph, source) {
  // ...

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        const weight = graph[node][neighbor];
        if (distance[node] + weight < distance[neighbor]) {
          distance[neighbor] = distance[node] + weight;
          predecessor[neighbor] = node;
        }
      }
    }
  }
}
function bellmanFord(graph, source) {
  // ...

  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    // ...
  }

  for (let node in graph) {
    for (let neighbor in graph[node]) {
      const weight = graph[node][neighbor];
      if (distance[node] + weight < distance[neighbor]) {
        throw new Error('Graph contains negative cycle');
      }
    }
  }
}
function bellmanFord(graph, source) {
  // ...

  return { distance, predecessor };
}
const graph = {
  A: { B: -1, C: 4 },
  B: { D: 2, E: 3, C: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const source = 'A';
const result = bellmanFord(graph, source);
console.log(result.distance);      // { A: 0, B: -1, C: 2, D: -2, E: 1 }
console.log(result.predecessor);   // { A: null, B: 'A', C: 'B', D: 'E', E: 'B' }
