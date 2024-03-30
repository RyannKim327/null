function bellmanFord(graph, startNode) {
  let distances = {};
  let predecessor = {};
  
  // Initialize distances and predecessor
  for (let node in graph) {
    distances[node] = Infinity;
    predecessor[node] = null;
  }
  distances[startNode] = 0;
  
  // Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        let weight = graph[node][neighbor];
        if (distances[node] + weight < distances[neighbor]) {
          distances[neighbor] = distances[node] + weight;
          predecessor[neighbor] = node;
        }
      }
    }
  }

  // Check for negative cycles
  for (let node in graph) {
    for (let neighbor in graph[node]) {
      let weight = graph[node][neighbor];
      if (distances[node] + weight < distances[neighbor]) {
        console.log("Negative cycle detected");
        return;
      }
    }
  }
  
  return { distances, predecessor };
}

// Example graph representation
let graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 }
};

let startNode = 'A';
let shortestPaths = bellmanFord(graph, startNode);
console.log(shortestPaths);
