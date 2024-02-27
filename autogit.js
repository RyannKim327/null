function dijkstra(graph, startNode) {
  const distances = {};
  const prev = {};
  const visited = {};
  const unvisitedNodes = new Set(Object.keys(graph));

  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    prev[node] = null;
  }

  while (unvisitedNodes.size > 0) {
    const currentNode = getClosestNode(distances, visited);
    visited[currentNode] = true;
    unvisitedNodes.delete(currentNode);

    for (let neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        prev[neighbor] = currentNode;
      }
    }
  }

  return { distances, prev };
}

function getClosestNode(distances, visited) {
  return Object.keys(distances).reduce((minNode, node) => {
    if (!visited[node] && distances[node] < distances[minNode]) {
      return node;
    }
    return minNode;
  }, null);
}

// Example graph
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 1, D: 1 },
  C: { A: 3, B: 1, D: 3 },
  D: { B: 1, C: 3 },
};

const startNode = 'A';

const { distances, prev } = dijkstra(graph, startNode);

console.log(distances);
console.log(prev);
