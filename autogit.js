function dijkstra(graph, source, destination) {
  // Step 1: Initialize the distance array and visited set
  const distances = {};
  const visited = new Set();

  // Step 2: Set the distance of the source node to 0 and mark it as visited
  distances[source] = 0;
  visited.add(source);
  
  // Step 3: Initialize the priority queue with the source node
  const queue = [source];

  // Step 4: While the queue is not empty
  while (queue.length > 0) {
    // Step 5: Get the node with the minimum distance from the queue
    const currentNode = queue.shift();

    // Step 6: Explore neighbors of the current node
    for (const neighbor in graph[currentNode]) {
      // Step 7: Calculate the distance to the neighbor
      const distance = distances[currentNode] + graph[currentNode][neighbor];

      // Step 8: Update the distance if it's shorter than the current distance
      if (!distances[neighbor] || distance < distances[neighbor]) {
        distances[neighbor] = distance;
      }

      // Step 9: Add the neighbor to the queue if it hasn't been visited
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  // Step 10: Return the distance from the source to the destination
  return distances[destination];
}
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 2 },
  D: { B: 3, C: 2 }
};
const source = 'A';
const destination = 'D';
const shortestDistance = dijkstra(graph, source, destination);
console.log(`Shortest distance from ${source} to ${destination}: ${shortestDistance}`);
