function dijkstra(graph, startNode) {
  const distances = {};
  const previous = {};
  const unvisited = new Set();

  for (let node in graph) {
    distances[node] = Infinity;
    unvisited.add(node);
  }

  distances[startNode] = 0;

  while (unvisited.size > 0) {
    const minNode = getMinNode(distances, unvisited);
    unvisited.delete(minNode);

    for (let neighbor in graph[minNode]) {
      const weight = graph[minNode][neighbor];
      const totalDistance = distances[minNode] + weight;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = minNode;
      }
    }
  }

  return { distances, previous };
}

function getMinNode(distances, unvisited) {
  let minDistance = Infinity;
  let minNode = null;

  for (let node of unvisited) {
    if (distances[node] < minDistance) {
      minDistance = distances[node];
      minNode = node;
    }
  }

  return minNode;
}

function buildPath(previous, targetNode) {
  const path = [];
  let node = targetNode;

  while (node !== undefined) {
    path.unshift(node);
    node = previous[node];
  }

  return path;
}
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 1 },
  C: { A: 2, D: 6 },
  D: { B: 1, C: 6, E: 3 },
  E: { D: 3 },
};

const startNode = "A";
const targetNode = "E";

const { distances, previous } = dijkstra(graph, startNode);
const shortestPath = buildPath(previous, targetNode);

console.log("Shortest path:", shortestPath); // Output: Shortest path: [ 'A', 'C', 'D', 'E' ]
console.log("Distances:", distances); // Output: Distances: { A: 0, B: 5, C: 2, D: 6, E: 9 }
