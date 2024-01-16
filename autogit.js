function dijkstra(graph, startNode, endNode) {
  const distances = {};
  const previous = {};
  const queue = [];

  // Initialize distances and previous
  for (let node in graph) {
    distances[node] = Infinity;
    previous[node] = null;
  }
  distances[startNode] = 0;

  // Push the start node into the queue
  queue.push(startNode);

  while (queue.length) {
    // Get the node with the smallest distance from the queue
    const currentNode = queue.shift();

    // If end node is reached, exit the loop
    if (currentNode === endNode) {
      break;
    }

    // Loop through all neighbors of the current node
    for (let neighbor in graph[currentNode]) {
      const distance = graph[currentNode][neighbor];
      const totalDistance = distances[currentNode] + distance;

      if (totalDistance < distances[neighbor]) {
        // Update distances and previous
        distances[neighbor] = totalDistance;
        previous[neighbor] = currentNode;

        // Add the neighbor to the queue
        queue.push(neighbor);
      }
    }
  }

  // Reconstruct the shortest path
  const path = [endNode];
  let node = endNode;

  while (node !== startNode) {
    node = previous[node];
    path.unshift(node);
  }

  return path;
}
const graph = {
  A: { B: 5, C: 1 },
  B: { A: 5, C: 2, D: 1 },
  C: { A: 1, B: 2, D: 4, E: 8 },
  D: { B: 1, C: 4, E: 3, F: 6 },
  E: { C: 8, D: 3 },
  F: { D: 6 }
};

const startNode = 'A';
const endNode = 'E';

const shortestPath = dijkstra(graph, startNode, endNode);
console.log(shortestPath); // Output: [ 'A', 'C', 'D', 'E' ]
