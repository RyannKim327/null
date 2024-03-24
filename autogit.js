function bellmanFord(graph, start) {
  let distance = {};
  let predecessors = {};

  // Initialize distances
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[start] = 0;

  // Relax edges repeatedly
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        let weight = graph[node][neighbor];
        if (distance[node] + weight < distance[neighbor]) {
          distance[neighbor] = distance[node] + weight;
          predecessors[neighbor] = node;
        }
      }
    }
  }

  // Check for negative cycles
  for (let node in graph) {
    for (let neighbor in graph[node]) {
      let weight = graph[node][neighbor];
      if (distance[node] + weight < distance[neighbor]) {
        throw new Error('Graph contains a negative cycle');
      }
    }
  }

  return { distance, predecessors };
}

// Example Usage
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 }
};

const startNode = 'A';
const { distance, predecessors } = bellmanFord(graph, startNode);

console.log('Distance from start node:');
console.log(distance);
console.log('Predecessors:');
console.log(predecessors);
