function dijkstra(startNode, endNode, graph) {
  const distances = {};
  const previousNodes = {};
  const unvisitedNodes = new Set();

  for (let node in graph) {
    distances[node] = Infinity;
    unvisitedNodes.add(node);
  }

  distances[startNode] = 0;

  while (unvisitedNodes.size > 0) {
    let currentNode = null;

    for (let node of unvisitedNodes) {
      if (currentNode === null || distances[node] < distances[currentNode]) {
        currentNode = node;
      }
    }

    unvisitedNodes.delete(currentNode);

    if (currentNode === endNode) {
      break;
    }

    for (let neighbor in graph[currentNode]) {
      let distance = graph[currentNode][neighbor];
      let totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previousNodes[neighbor] = currentNode;
      }
    }
  }

  return buildPath(endNode, previousNodes);
}

function buildPath(endNode, previousNodes) {
  const path = [];
  let currentNode = endNode;

  while (currentNode !== null) {
    path.unshift(currentNode);
    currentNode = previousNodes[currentNode];
  }

  return path;
}

// Example usage:
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, D: 1 },
  C: { A: 2, D: 6 },
  D: { B: 1, C: 6 },
};

console.log(dijkstra('A', 'D', graph)); // Output: ['A', 'B', 'D']
