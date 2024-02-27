function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  const previous = {};
  let unvisited = Object.keys(graph);

  unvisited.forEach(node => {
    distances[node] = Infinity;
    previous[node] = null;
  });

  distances[startNode] = 0;

  while (unvisited.length > 0) {
    const currentNode = minDistanceNode(unvisited, distances);
    unvisited = unvisited.filter(node => node !== currentNode);

    for (let neighbor in graph[currentNode]) {
      const distance = distances[currentNode] + graph[currentNode][neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
      }
    }
  }

  return { distances, previous };
}

function minDistanceNode(nodes, distances) {
  return nodes.reduce((minNode, node) =>
    distances[node] < distances[minNode] ? node : minNode
  );
}

// Example graph
const graph = {
  A: { B: 3, C: 4 },
  B: { A: 3, C: 1, D: 7 },
  C: { A: 4, B: 1, D: 2 },
  D: { B: 7, C: 2 }
};

const startNode = 'A';
const { distances, previous } = dijkstra(graph, startNode);

console.log(distances);
console.log(previous);
