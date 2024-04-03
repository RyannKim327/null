function dijkstra(graph, startNode) {
  const distances = {};
  const visited = {};
  let currentNode = startNode;
  const queue = Object.keys(graph);

  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
  }

  while (queue.length > 0) {
    visited[currentNode] = true;

    let neighbors = graph[currentNode];

    for (let neighbor in neighbors) {
      let distance = distances[currentNode] + neighbors[neighbor];

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }
    }

    let smallest = Infinity;
    for (let node in distances) {
      if (!visited[node] && distances[node] < smallest) {
        smallest = distances[node];
        currentNode = node;
      }
    }

    let index = queue.indexOf(currentNode);
    if (index > -1) {
      queue.splice(index, 1);
    }
  }

  return distances;
}

// Example usage
const graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 1, D: 2 },
  C: { A: 3, B: 1, D: 4 },
  D: { B: 2, C: 4 }
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log(result); // Output the shortest distances from the start node
