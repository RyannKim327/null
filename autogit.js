function dijkstra(graph, startNode, endNode) {
  let distances = {};
  let pq = new PriorityQueue();
  let visited = new Set();

  for (let node in graph) {
    distances[node] = node === startNode ? 0 : Infinity;
    pq.enqueue(node, distances[node]);
  }

  while (!pq.isEmpty()) {
    let currentNode = pq.dequeue();
    if (visited.has(currentNode)) continue;
    visited.add(currentNode);

    for (let neighbor in graph[currentNode]) {
      let distance = distances[currentNode] + graph[currentNode][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        pq.enqueue(neighbor, distance);
      }
    }
  }

  return distances[endNode];
}

// Sample graph representation
let graph = {
  A: { B: 5, C: 3 },
  B: { A: 5, C: 1, D: 2 },
  C: { A: 3, B: 1, D: 6 },
  D: { B: 2, C: 6 }
};

console.log(dijkstra(graph, 'A', 'D')); // Output: 4
