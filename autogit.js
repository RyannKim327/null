function bellmanFord(graph, start, numNodes) {
  // Step 1: Initialize distances
  let distances = Array(numNodes).fill(Infinity);
  distances[start] = 0;

  // Step 2: Relax edges repeatedly
  for (let i = 0; i < numNodes - 1; i++) {
    for (let j = 0; j < graph.length; j++) {
      let [source, destination, weight] = graph[j];

      if (distances[source] + weight < distances[destination]) {
        distances[destination] = distances[source] + weight;
      }
    }
  }

  // Step 3: Check for negative-weight cycles
  for (let i = 0; i < graph.length; i++) {
    let [source, destination, weight] = graph[i];

    if (distances[source] + weight < distances[destination]) {
      throw new Error('Graph contains negative-weight cycle');
    }
  }

  return distances;
}
let graph = [
  [0, 1, 6],
  [0, 2, 2],
  [1, 2, 3],
  [1, 3, 5],
  [2, 3, 4],
  [2, 4, 2],
  [3, 4, 6]
];

let startNode = 0;
let numNodes = Math.max(...graph.flat()) + 1;

let distances = bellmanFord(graph, startNode, numNodes);
console.log(distances);
