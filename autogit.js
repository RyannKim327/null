function bellmanFord(graph, source) {
  const numNodes = graph.length;
  const distances = new Array(numNodes).fill(Infinity);
  const prev = new Array(numNodes).fill(null);

  distances[source] = 0;

  for (let i = 0; i < numNodes - 1; i++) {
    for (let current = 0; current < numNodes; current++) {
      for (let [adjacent, weight] of graph[current]) {
        if (distances[current] + weight < distances[adjacent]) {
          distances[adjacent] = distances[current] + weight;
          prev[adjacent] = current;
        }
      }
    }
  }

  // Check for negative cycles
  for (let current = 0; current < numNodes; current++) {
    for (let [adjacent, weight] of graph[current]) {
      if (distances[current] + weight < distances[adjacent]) {
        throw new Error("Graph contains a negative-weight cycle");
      }
    }
  }

  // Build the shortest path
  const path = [];
  let current = numNodes - 1; // Destination node
  while (current !== null) {
    path.unshift(current);
    current = prev[current];
  }

  return path;
}

// Example usage:
const graph = [
  [[1, 4], [2, 3]],         // Node 0: [1, 4] and [2, 3] are adjacent nodes with their weights
  [[2, 1], [3, 4], [4, 1]], // Node 1: [2, 1], [3, 4] and [4, 1] are adjacent nodes with their weights
  [[], [3, 1]],             // Node 2: [3, 1] is an adjacent node with its weight
  [[4, 2]],                 // Node 3: [4, 2] is an adjacent node with its weight
  [[1, -2]],                // Node 4: [1, -2] is an adjacent node with its weight
];

const source = 0;
const shortestPath = bellmanFord(graph, source);
console.log("Shortest path:", shortestPath);
