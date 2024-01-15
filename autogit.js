function breadthLimitedSearch(graph, start, limit) {
  // Create a queue to store nodes to visit
  const queue = [];

  // Mark all nodes as not visited
  const visited = new Set();

  // Create a queue to store the depth of each node
  const depthQueue = [];

  // Add the starting node to the queue and mark it as visited
  queue.push(start);
  visited.add(start);
  depthQueue.push(0);

  // Continue until the queue is empty
  while (queue.length > 0) {
    // Get the next node from the queue
    const currentNode = queue.shift();
    const currentDepth = depthQueue.shift();

    // Process the node
    console.log(`Visiting node ${currentNode} at depth ${currentDepth}`);

    // Check if the current depth exceeds the limit
    if (currentDepth >= limit) {
      console.log('Reached depth limit');
      continue;
    }

    // Get the neighbors of the current node
    const neighbors = graph[currentNode];

    // Loop through each neighbor
    for (let i = 0; i < neighbors.length; i++) {
      const neighbor = neighbors[i];

      // Check if the neighbor has not been visited
      if (!visited.has(neighbor)) {
        // Add the neighbor to the queue and mark it as visited
        queue.push(neighbor);
        visited.add(neighbor);
        depthQueue.push(currentDepth + 1);
      }
    }
  }
}
// Create a test graph
const graph = {
  A: ['B', 'C'],
  B: ['D', 'E'],
  C: ['F'],
  D: [],
  E: ['F'],
  F: []
};

// Call the breadth-limited search function
breadthLimitedSearch(graph, 'A', 2);
