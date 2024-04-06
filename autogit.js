const graph = {
  A: { B: 5, C: 3 },
  B: { C: 2, D: 6 },
  C: { D: 7 },
  D: { C: 1 }
};
function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const visited = new Set();

  for (let vertex in graph) {
    distances[vertex] = Infinity;
    previous[vertex] = null;
  }
  distances[start] = 0;
  while (visited.size < Object.keys(graph).length) {
    let current = findClosestUnvisited(distances, visited);
    visited.add(current);

    for (let neighbor in graph[current]) {
      let distance = graph[current][neighbor
      if (!visited.has(neighbor) && distances[current] + distance < distances[neighbor]) {
        distances[neighbor] = distances[current] + distance;
        previous[neighbor] = current;
      }
    }
  }
  return { distances, previous };
}
function findClosestUnvisited(distances, visited) {
  return Object.keys(distances).filter(node => !visited.has(node)).reduce((a, b) => distances[a] < distances[b] ? a : b);
}
