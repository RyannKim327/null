function bellmanFord(graph, startNode, endNode) {
  const distances = {};
  const predecessors = {};

  // Step 3: Initialize distances and predecessors
  for (let node in graph) {
    distances[node] = Infinity;
    predecessors[node] = null;
  }
  distances[startNode] = 0;

  // Step 4: Relax edges
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let node in graph) {
      for (let neighbor in graph[node]) {
        let weight = graph[node][neighbor];
        if (distances[node] + weight < distances[neighbor]) {
          distances[neighbor] = distances[node] + weight;
          predecessors[neighbor] = node;
        }
      }
    }
  }

  // Step 5: Check for negative cycles
  for (let node in graph) {
    for (let neighbor in graph[node]) {
      let weight = graph[node][neighbor];
      if (distances[node] + weight < distances[neighbor]) {
        throw new Error('Negative cycle detected!');
      }
    }
  }

  // Step 6-8: Build the path
  const path = [endNode];
  let predecessor = predecessors[endNode];
  while (predecessor !== null) {
    path.push(predecessor);
    predecessor = predecessors[predecessor];
  }
  path.reverse();

  return {
    path: path,
    distance: distances[endNode]
  };
}

// Example usage:
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 }
};

const shortestPath = bellmanFord(graph, 'A', 'E');
console.log(shortestPath.path); // Output: [ 'A', 'B', 'E' ]
console.log(shortestPath.distance); // Output: -2
