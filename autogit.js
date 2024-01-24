function findMinDistance(distances, visited) {
  let minValue = Infinity;
  let minIndex = -1;
  for (let i = 0; i < distances.length; i++) {
    if (visited[i] === false && distances[i] <= minValue) {
      minValue = distances[i];
      minIndex = i;
    }
  }
  return minIndex;
}
function dijkstra(graph, start, end) {
  const distances = Array(graph.length).fill(Infinity);
  const visited = Array(graph.length).fill(false);
  distances[start] = 0;
}
function dijkstra(graph, start, end) {
  const distances = Array(graph.length).fill(Infinity);
  const visited = Array(graph.length).fill(false);
  distances[start] = 0;

  for (let i = 0; i < graph.length - 1; i++) {
    const curr = findMinDistance(distances, visited);
    visited[curr] = true;

    for (let v = 0; v < graph.length; v++) {
      if (
        visited[v] === false &&
        graph[curr][v] !== 0 &&
        distances[curr] !== Infinity &&
        distances[curr] + graph[curr][v] < distances[v]
      ) {
        distances[v] = distances[curr] + graph[curr][v];
      }
    }
  }
}
const graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

const startVertex = 0;
const endVertex = 7;

dijkstra(graph, startVertex, endVertex);
console.log(`Shortest distance from ${startVertex} to ${endVertex}: ${distances[endVertex]}`);
