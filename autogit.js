function dijkstra(graph, startNode) {
  const shortestPath = {};
  const visited = {};
  shortestPath[startNode] = 0;

  let currentNode = startNode;

  while (currentNode) {
    visited[currentNode] = true;
    const neighbors = graph[currentNode];

    for (const neighbor in neighbors) {
      if (!visited[neighbor]) {
        const distance = shortestPath[currentNode] + neighbors[neighbor];
        if (!shortestPath[neighbor] || distance < shortestPath[neighbor]) {
          shortestPath[neighbor] = distance;
        }
      }
    }

    currentNode = null;
    for (const node in graph) {
      if (!visited[node] && shortestPath[node]) {
        if (!currentNode || shortestPath[node] < shortestPath[currentNode]) {
          currentNode = node;
        }
      }
    }
  }

  return shortestPath;
}

// Example usage:
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {},
};

const shortestPath = dijkstra(graph, 'A');
console.log(shortestPath);
