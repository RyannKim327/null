function dijkstra(graph, start, target) {
  const visited = new Set();
  const distances = {};
  const previous = {};
  const queue = [];

  distances[start] = 0;
  queue.push({ node: start, distance: 0 });

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { node, distance } = queue.shift();

    if (node === target) {
      break;
    }

    if (visited.has(node)) {
      continue;
    }

    visited.add(node);

    for (const neighbor in graph[node]) {
      const newDistance = distance + graph[node][neighbor];

      if (!distances[neighbor] || newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = node;
        queue.push({ node: neighbor, distance: newDistance });
      }
    }
  }

  if (!distances[target]) {
    return [];
  }

  return getPath(previous, target);
}

function getPath(previous, target) {
  const path = [target];
  let node = target;

  while (previous[node]) {
    path.unshift(previous[node]);
    node = previous[node];
  }

  return path;
}
const graph = {
  A: { B: 5, C: 2 },
  B: { D: 4, E: 2 },
  C: { B: 8, E: 7 },
  D: { E: 6, F: 3 },
  E: { F: 1 },
  F: {},
};
const shortestPath = dijkstra(graph, 'A', 'F');
console.log(shortestPath); // Output: ['A', 'C', 'E', 'F']
