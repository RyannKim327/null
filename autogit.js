function dijkstra(graph, startNode) {
  const distances = {};
  const visited = new Set();
  const previous = {};

  // Initialize distances with Infinity for all nodes except the startNode
  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[startNode] = 0;

  while (Object.keys(visited).length !== Object.keys(graph).length) {
    let currentNode = null;
    let shortestDistance = Infinity;

    // Find the unvisited node with the smallest distance
    for (const node in graph) {
      if (!visited.has(node) && distances[node] < shortestDistance) {
        currentNode = node;
        shortestDistance = distances[node];
      }
    }

    // Mark the current node as visited
    visited.add(currentNode);

    // Update distances of neighboring nodes
    for (const neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = currentNode;
      }
    }
  }

  return { distances, previous };
}

function getPath(previous, targetNode) {
  const path = [targetNode];
  let node = targetNode;

  while (previous[node]) {
    node = previous[node];
    path.unshift(node);
  }

  return path;
}
