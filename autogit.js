function bellmanFord(graph, startNode, endNode) {
  const distances = {};
  const predecessors = {};

  // Step 2: Initialize distances
  for (let node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  // Step 3: Bellman-Ford algorithm
  for (let i = 0; i < Object.keys(graph).length - 1; i++) {
    for (let currentNode in graph) {
      for (let neighbor in graph[currentNode]) {
        if (
          distances[currentNode] + graph[currentNode][neighbor] <
          distances[neighbor]
        ) {
          distances[neighbor] =
            distances[currentNode] + graph[currentNode][neighbor];
          predecessors[neighbor] = currentNode;
        }
      }
    }
  }

  // Step 6: Check for negative cycles
  for (let currentNode in graph) {
    for (let neighbor in graph[currentNode]) {
      if (
        distances[currentNode] + graph[currentNode][neighbor] <
        distances[neighbor]
      ) {
        throw new Error("Graph contains a negative cycle!");
      }
    }
  }

  return getPath(predecessors, endNode);
}

function getPath(predecessors, endNode) {
  const path = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    path.push(currentNode);
    currentNode = predecessors[currentNode];
  }

  return path.reverse();
}

// Example usage:
const graph = {
  A: { B: -1, C: 4 },
  B: { C: 3, D: 2, E: 2 },
  C: {},
  D: { B: 1, C: 5 },
  E: { D: -3 },
};

const shortestPath = bellmanFord(graph, "A", "E");
console.log(shortestPath); // Output: ["A", "B", "E"]
